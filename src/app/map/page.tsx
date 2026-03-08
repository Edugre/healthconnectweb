'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type PanelMode = 'normal' | 'specialized';

function parseCoord(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const n = Number.parseFloat(value);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function distanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function MapPage() {
  const mapRef = useRef<any | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const userCoordsRef = useRef<{ lat: number; lng: number } | null>(null);
  const leafletRef = useRef<any | null>(null);
  const userIconRef = useRef<any | null>(null);
  const clinicIconRef = useRef<any | null>(null);
  const [activePanel, setActivePanel] = useState<PanelMode>('normal');
  const [isLocating, setIsLocating] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [zip, setZip] = useState('');
  const [radiusKm, setRadiusKm] = useState(5);
  const [clinicType, setClinicType] = useState<string>('');
  const [filtersModalOpen, setFiltersModalOpen] = useState(false);
  const clinicMarkersRef = useRef<any[]>([]);

  useEffect(() => {
    if (filtersModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [filtersModalOpen]);

  useEffect(() => {
    let mounted = true;

    async function init() {
      const L = await import('leaflet');
      if (!mounted || mapRef.current || !mapContainerRef.current) return;

      leafletRef.current = L;
      // Build custom SVG-based icons for user and clinic markers.
      // The SVG lives in /public/location-pin.svg so it is served at /location-pin.svg.
      const baseIcon = L.icon({
        iconUrl: '/location-pin.svg',
        // Explicitly disable the default PNG shadow so we don't request /marker-shadow.png.
        shadowUrl: undefined as any,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });
      userIconRef.current = baseIcon;
      clinicIconRef.current = baseIcon;
      const center: [number, number] = [25.7617, -80.1918];
      const map = L.map(mapContainerRef.current).setView(center, 12);
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '© OpenStreetMap © <a href="https://carto.com/">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        },
      ).addTo(map);
      mapRef.current = map;
      // Load all clinics as soon as map is ready
      void loadClinics({});
    }

    void init();

    return () => {
      mounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  function setClinicMarkers(clinics: any[]) {
    if (!mapRef.current || !leafletRef.current) return;
    clinicMarkersRef.current.forEach((m) => m.remove());
    clinicMarkersRef.current = [];
    const L = leafletRef.current;
    clinics.forEach((c: any) => {
      const lat = parseCoord(c.latitude);
      const lng = parseCoord(c.longitude);
      if (lat == null || lng == null) return;
      const marker = L.marker([lat, lng], {
        icon: clinicIconRef.current ?? undefined,
      }).addTo(mapRef.current);
      marker.bindPopup(
        `<div class="popup-name">${c.name || 'Clinic'}</div>
         <div class="popup-type">${c.clinic_type || ''}</div><a href="/clinic/${c.id
        }">View clinic →</a>`,
      );
      clinicMarkersRef.current.push(marker);
    });
  }

  async function loadClinics(filters: {
    q?: string;
    zip?: string;
    clinicType?: string;
    radiusKm?: number;
  }) {
    if (!mapRef.current || !leafletRef.current) return;
    setFilterLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.q?.trim()) params.set('q', filters.q.trim());
      if (filters.zip?.trim()) params.set('zip', filters.zip.trim());
      if (filters.clinicType && filters.clinicType !== 'all')
        params.set('clinicType', filters.clinicType);
      const res = await fetch(`/api/clinics/search?${params.toString()}`);
      const json = await res.json();
      if (!res.ok) return;
      let clinics: any[] = json.clinics ?? [];
      const user = userCoordsRef.current;
      const radius = filters.radiusKm ?? radiusKm;
      if (user && radius > 0 && clinics.length > 0) {
        clinics = clinics.filter((c: any) => {
          const lat = parseCoord(c.latitude);
          const lng = parseCoord(c.longitude);
          if (lat == null || lng == null) return false;
          return distanceKm(user.lat, user.lng, lat, lng) <= radius;
        });
      }
      setClinicMarkers(clinics);
    } catch {
      // keep existing markers on error
    } finally {
      setFilterLoading(false);
    }
  }

  function applyFilters() {
    void loadClinics({
      q: searchQuery.trim() || undefined,
      zip: zip.trim() || undefined,
      clinicType:
        clinicType && clinicType !== 'all' ? clinicType : undefined,
      radiusKm,
    });
  }

  function handleUseLocation(panel: PanelMode) {
    setActivePanel(panel);
    if (!navigator.geolocation || !mapRef.current || !leafletRef.current) {
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        userCoordsRef.current = coords;
        mapRef.current.setView([coords.lat, coords.lng], 14);
        // Re-apply current filters so radius filter uses new location
        void loadClinics({
          q: searchQuery.trim() || undefined,
          zip: zip.trim() || undefined,
          clinicType:
            clinicType && clinicType !== 'all' ? clinicType : undefined,
          radiusKm,
        });
        setIsLocating(false);
      },
      () => setIsLocating(false),
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  return (
    <div className="map-page">
      <div className="app">
        {/* SIDEBAR (on mobile shown as modal) */}
        <div
          className={`sidebar ${filtersModalOpen ? 'map-filters-modal-open' : ''}`}
          role="dialog"
          aria-label="Search filters"
          aria-modal={filtersModalOpen}
        >
          <div className="map-filters-modal-header">
            <h2 className="map-filters-modal-title">Filters</h2>
            <button
              type="button"
              className="map-filters-modal-close"
              onClick={() => setFiltersModalOpen(false)}
              aria-label="Close filters"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="tabs">
            <button
              className={`tab ${activePanel === 'normal' ? 'active' : ''}`}
              type="button"
              onClick={() => setActivePanel('normal')}
            >
              Quick Search
            </button>
            <button
              className={`tab ${activePanel === 'specialized' ? 'active' : ''
                }`}
              type="button"
              onClick={() => setActivePanel('specialized')}
            >
              Specialized
            </button>
          </div>

          {/* QUICK SEARCH PANEL */}
          <div
            className={`panel ${activePanel === 'normal' ? 'active' : ''}`}
            id="panel-normal"
          >
            <div className="panel-inner">
              <button
                className="locate-btn"
                type="button"
                onClick={() => handleUseLocation('normal')}
                disabled={isLocating}
              >
                {isLocating ? (
                  <>
                    <div className="spinner" />
                    Locating...
                  </>
                ) : (
                  <>
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z"
                      />
                    </svg>
                    Use My Current Location
                  </>
                )}
              </button>

              <div className="divider">
                <span>or enter manually</span>
              </div>

              <div className="field">
                <label>City or Address</label>
                <input
                  type="text"
                  placeholder="e.g. Miami, FL"
                  id="manual-location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="field">
                <label>Search Radius (when location set)</label>
                <select
                  id="radius-normal"
                  value={radiusKm}
                  onChange={(e) => setRadiusKm(Number(e.target.value))}
                >
                  <option value={1}>1 km — Walking distance</option>
                  <option value={2}>2 km</option>
                  <option value={5}>5 km</option>
                  <option value={10}>10 km</option>
                  <option value={20}>20 km</option>
                </select>
              </div>

              <button
                className="search-btn"
                type="button"
                onClick={() => {
                  applyFilters();
                  setFiltersModalOpen(false);
                }}
                disabled={filterLoading}
              >
                {filterLoading ? 'Filtering…' : 'Apply filters'}
              </button>
            </div>
            <div className="empty-state">
              <div className="empty-icon">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z"
                  />
                </svg>
              </div>
              <div className="empty-text">
                All clinics are shown on the map. Use your location to pan and
                filter by distance, or use the filters above to narrow by name,
                ZIP, or type.
              </div>
            </div>
            <div className="data-note">
              Map pins are powered by MediBridge&apos;s real clinic directory
              data.
            </div>
          </div>

          {/* SPECIALIZED PANEL */}
          <div
            className={`panel ${activePanel === 'specialized' ? 'active' : ''}`}
            id="panel-specialized"
          >
            <div className="panel-inner">
              <button
                className="locate-btn"
                type="button"
                onClick={() => handleUseLocation('specialized')}
                disabled={isLocating}
              >
                {isLocating ? (
                  <>
                    <div className="spinner" />
                    Locating...
                  </>
                ) : (
                  <>
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z"
                      />
                    </svg>
                    Use My Current Location
                  </>
                )}
              </button>

              <div className="divider">
                <span>or enter manually</span>
              </div>

              <div className="field">
                <label>City or Address</label>
                <input
                  type="text"
                  id="manual-location-spec"
                  placeholder="e.g. Miami, FL"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="field">
                <label>Specialty / Type</label>
                <select
                  id="specialty"
                  value={clinicType}
                  onChange={(e) => setClinicType(e.target.value)}
                >
                  <option value="all">All Medical Facilities</option>
                  <option value="hospital">Hospital</option>
                  <option value="clinic">Clinic / Health Center</option>
                  <option value="doctors">Doctor&apos;s Office</option>
                  <option value="dentist">Dentist</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="physiotherapist">Physiotherapist</option>
                  <option value="optometrist">Optometrist</option>
                  <option value="mental-health">
                    Psychiatrist / Mental Health
                  </option>
                  <option value="gynaecologist">Gynecologist</option>
                  <option value="paediatrician">Pediatrician</option>
                  <option value="emergency">Emergency / Urgent Care</option>
                </select>
              </div>

              <div className="field">
                <label>Search Radius (when location set)</label>
                <select
                  id="radius-spec"
                  value={radiusKm}
                  onChange={(e) => setRadiusKm(Number(e.target.value))}
                >
                  <option value={1}>1 km</option>
                  <option value={2}>2 km</option>
                  <option value={5}>5 km</option>
                  <option value={10}>10 km</option>
                  <option value={20}>20 km</option>
                </select>
              </div>

              <button
                className="search-btn"
                type="button"
                onClick={() => {
                  applyFilters();
                  setFiltersModalOpen(false);
                }}
                disabled={filterLoading}
              >
                {filterLoading ? 'Filtering…' : 'Apply filters'}
              </button>
            </div>
            <div className="empty-state">
              <div className="empty-icon">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path
                    strokeLinecap="round"
                    d="M3 9h18M9 21V9"
                  />
                </svg>
              </div>
              <div className="empty-text">
                All clinics are shown on the map. Choose a specialty and click
                Apply filters to show only that type.
              </div>
            </div>
            <div className="data-note">
              Map pins are powered by MediBridge&apos;s real clinic directory
              data.
            </div>
          </div>
        </div>

        {/* MAP */}
        <div id="map" ref={mapContainerRef} />

        {/* Mobile: FAB to open filters */}
        <button
          type="button"
          className="map-filters-fab"
          onClick={() => setFiltersModalOpen(true)}
          aria-label="Open filters"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 2v-5.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
}

