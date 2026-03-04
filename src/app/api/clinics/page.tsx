'use client';

import { useState } from 'react';

const CARE_TYPES = [
  { value: 'primary_care', label: 'Primary care' },
  { value: 'pediatrics', label: 'Pediatrics' },
  { value: 'dental', label: 'Dental' },
  { value: 'mental_health', label: 'Mental health' },
  { value: 'obgyn', label: 'OB/GYN' },
  { value: 'urgent_care', label: 'Urgent care' },
];

const CLINIC_TYPES = [
  { value: 'clinic', label: 'Primary Care / FQHC' },
  { value: 'mental-health', label: 'Mental health' },
  { value: 'pharmacy', label: 'Pharmacy' },
];

const INSURANCE_OPTIONS = [
  { value: 'uninsured', label: 'No insurance / Uninsured' },
  { value: 'medicaid', label: 'Medicaid' },
  { value: 'medicare', label: 'Medicare' },
  { value: 'sliding_scale', label: 'Sliding-scale' },
];

const LANGUAGES = [
  { value: 'Spanish', label: 'Spanish' },
  { value: 'English', label: 'English' },
  { value: 'Haitian Creole', label: 'Haitian Creole' },
  { value: 'Portuguese', label: 'Portuguese' },
];

export default function ClinicSearch() {
  const [zip, setZip] = useState('');
  const [careType, setCareType] = useState('');
  const [query, setQuery] = useState('');
  const [clinicType, setClinicType] = useState('');
  const [insurance, setInsurance] = useState('');
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);

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

  function requestLocation() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      (err) => {
        console.error('Geolocation error', err);
      }
    );
  }

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const params = new URLSearchParams({ zip });
    if (careType) params.append('careType', careType);
    if (query) params.set('q', query);
    if (clinicType) params.set('clinicType', clinicType);
    if (insurance) params.set('insurance', insurance);
    if (language) params.set('language', language);

    try {
      const res = await fetch(`/api/clinics/search?${params.toString()}`);
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Search failed');
      } else {
        const rawClinics = json.clinics || [];

        if (userLocation) {
          const enriched = rawClinics
            .map((clinic: any) => {
              const lat = clinic.latitude;
              const lon = clinic.longitude;

              let distanceKmValue: number | null = null;
              if (typeof lat === 'number' && typeof lon === 'number') {
                distanceKmValue = distanceKm(
                  userLocation.lat,
                  userLocation.lon,
                  lat,
                  lon
                );
              }

              return { ...clinic, distanceKm: distanceKmValue };
            })
            .sort((a: any, b: any) => {
              if (a.distanceKm == null && b.distanceKm == null) return 0;
              if (a.distanceKm == null) return 1;
              if (b.distanceKm == null) return -1;
              return a.distanceKm - b.distanceKm;
            });

          setResults(enriched);
        } else {
          setResults(rawClinics);
        }
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-3xl mx-auto p-4 space-y-6">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">
              ZIP code
            </label>
            <input
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="e.g. 33136"
              className="w-full border rounded px-3 py-2"
            />
            <div className="flex items-center gap-2 mt-2">
              <button
                type="button"
                onClick={requestLocation}
                className="text-xs text-blue-600 underline"
              >
                Use my current location for distance
              </button>
              {userLocation && (
                <span className="text-xs text-gray-500">Location set</span>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Search term (optional)
            </label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Clinic name, service, or city"
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">
              Type of care (optional)
            </label>
            <select
              value={careType}
              onChange={(e) => setCareType(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Any</option>
              {CARE_TYPES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Clinic type (optional)
            </label>
            <select
              value={clinicType}
              onChange={(e) => setClinicType(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Any</option>
              {CLINIC_TYPES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">
              Insurance / cost focus (optional)
            </label>
            <select
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Any</option>
              {INSURANCE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Language (optional)
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Any</option>
              {LANGUAGES.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Searching…' : 'Find clinics'}
        </button>
      </form>

      <div className="mt-6 space-y-3">
        {error && <p className="text-red-600 text-sm">{error}</p>}

        {results.map((clinic) => (
          <div key={clinic.id} className="border rounded p-3">
            <h3 className="font-semibold">{clinic.name}</h3>
            <p className="text-sm">
              {clinic.address_line1}, {clinic.city}, {clinic.state}{' '}
              {clinic.zip}
            </p>
            {clinic.phone && (
              <p className="text-sm mt-1">Phone: {clinic.phone}</p>
            )}
            {clinic.sliding_scale && (
              <p className="text-xs mt-1 text-green-700">
                Sliding scale available
              </p>
            )}
            {clinic.distanceKm != null && (
              <p className="text-xs mt-1 text-gray-600">
                {clinic.distanceKm.toFixed(1)} km away
              </p>
            )}
          </div>
        ))}

        {!loading && !error && results.length === 0 && (
          <p className="text-sm text-gray-600">
            No clinics found yet. Try another ZIP or adjust your filters.
          </p>
        )}
      </div>
    </section>
  );
}