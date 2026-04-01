'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

type Clinic = any;

function SearchPageContent() {
  const searchParams = useSearchParams();

  const [query, setQuery] = useState('');
  const [zip, setZip] = useState('');
  const [clinicType, setClinicType] = useState('');
  const [insurance, setInsurance] = useState('');
  const [language, setLanguage] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'availability' | 'name'>(
    'featured',
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [clinics, setClinics] = useState<Clinic[]>([]);

  useEffect(() => {
    const initialZip = searchParams.get('zip') || '';
    const initialType = searchParams.get('type') || '';

    setZip(initialZip);
    // Map the "type" param from the hero to a clinicType filter when possible
    if (initialType === 'clinic') setClinicType('clinic');
    else if (initialType === 'mental-health') setClinicType('mental-health');
    else if (initialType === 'pharmacy') setClinicType('pharmacy');

    // Always run an initial search on load (with or without params — no params = show all)
    void runSearch(initialZip, initialType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function runSearch(zipOverride?: string, clinicTypeOverride?: string) {
    const effectiveZip = zipOverride ?? zip;
    const effectiveClinicType = clinicTypeOverride ?? clinicType;

    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (effectiveZip) params.set('zip', effectiveZip);
    if (query) params.set('q', query);
    if (effectiveClinicType) params.set('clinicType', effectiveClinicType);
    if (insurance) params.set('insurance', insurance);
    if (language) params.set('language', language);

    try {
      const res = await fetch(`/api/clinics/search?${params.toString()}`);
      const json = await res.json();

      if (!res.ok) {
        setError(json.error || 'Search failed');
        setClinics([]);
      } else {
        const list: Clinic[] = json.clinics || [];
        setClinics(list);
      }
    } catch {
      setError('Network error');
      setClinics([]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    void runSearch();
  }

  const totalCount = clinics.length;

  return (
    <>
      {/* SEARCH HERO */}
      <div className="search-hero">
        <div className="container">
          <h1>Find Care in Miami</h1>
          <p>
            Free clinics, pharmacies, mental health, specialists — filtered for
            you.
          </p>
          <form className="search-bar-full" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search by clinic name, specialty, or service..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn btn-primary search-bar-submit"
              type="submit"
              disabled={loading}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
              </svg>
              {loading ? 'Searching…' : 'Search'}
            </button>
          </form>
        </div>
      </div>

      {/* MAIN FILTERS + RESULTS */}
      <div className="section-sm">
        <div className="container">
          {/* Compact filter card styled like the original search filters */}
          <div className="filters-bar">
            <div className="filter-group">
              <label>Clinic type</label>
              <select
                value={clinicType}
                onChange={(e) => setClinicType(e.target.value)}
              >
                <option value="">All types</option>
                <option value="clinic">Primary Care / FQHC</option>
                <option value="mental-health">Mental Health</option>
                <option value="pharmacy">Pharmacy</option>
              </select>
            </div>
            <div className="filter-group">
              <label>ZIP code</label>
              <input
                type="text"
                placeholder="e.g. 33125"
                maxLength={5}
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <label>Insurance</label>
              <select
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
              >
                <option value="">Any</option>
                <option value="uninsured">No insurance / Uninsured</option>
                <option value="medicaid">Medicaid</option>
                <option value="medicare">Medicare</option>
                <option value="sliding_scale">Sliding-scale</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="">Any language</option>
                <option value="Spanish">Spanish</option>
                <option value="Haitian Creole">Haitian Creole</option>
                <option value="Portuguese">Portuguese</option>
                <option value="English">English</option>
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                minWidth: 160,
              }}
            >
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => runSearch()}
                disabled={loading}
              >
                Apply Filters
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setQuery('');
                  setZip('');
                  setClinicType('');
                  setInsurance('');
                  setLanguage('');
                  setClinics([]);
                  setError(null);
                }}
              >
                Reset All
              </button>
            </div>
          </div>

          {/* SORT BAR */}
          <div className="sort-bar">
            <p className="results-count">
              {totalCount > 0
                ? `Showing ${totalCount} clinic${totalCount === 1 ? '' : 's'}`
                : 'No clinics to show yet'}
            </p>
            <div className="sort-select">
              Sort by:
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as typeof sortBy)
                }
              >
                <option value="featured">Best match</option>
                <option value="availability" disabled>
                  Availability: soonest (coming soon)
                </option>
                <option value="name">Name A–Z</option>
              </select>
            </div>
          </div>

          {/* RESULTS GRID */}
          {error && (
            <p style={{ color: 'var(--error)', marginBottom: 16 }}>{error}</p>
          )}

          <div className="clinic-grid">
            {clinics
              .slice()
              .sort((a: any, b: any) => {
                if (sortBy === 'name') {
                  return (a.name || '').localeCompare(b.name || '');
                }
                // For now rely on backend ordering for "featured"
                return 0;
              })
              .map((clinic: any) => (
                <Link
                  key={clinic.id}
                  href={`/clinic/${clinic.id}`}
                  className="clinic-card"
                >
                  <div className="clinic-card-header">
                    <div className="clinic-avatar">
                      <span>{clinic.name?.charAt(0) || 'C'}</span>
                    </div>
                    <div className="clinic-badges">
                      {clinic.sliding_scale && (
                        <span className="badge badge-green">Sliding scale</span>
                      )}
                      {clinic.uninsured_accepted && (
                        <span className="badge badge-gray">Uninsured OK</span>
                      )}
                    </div>
                  </div>
                  <div className="clinic-card-body">
                    <h3>{clinic.name}</h3>
                    <div className="clinic-card-address">
                      <span>
                        {clinic.address_line1
                          ? `${clinic.address_line1}, `
                          : ''}
                        {clinic.city}, {clinic.state} {clinic.zip}
                      </span>
                    </div>
                    <div className="clinic-tags">
                      {Array.isArray(clinic.languages) &&
                        clinic.languages.map((lang: string) => (
                          <span key={lang} className="tag">
                            {lang}
                          </span>
                        ))}
                    </div>
                    <div className="clinic-meta">
                      <span className="wait-time">
                        {/* Placeholder metadata until we model real availability */}
                        Cost &amp; insurance details available
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {!loading && !error && clinics.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                color: 'var(--color-gray-500)',
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: 'var(--color-gray-700)',
                  marginBottom: 8,
                }}
              >
                No clinics yet
              </h3>
              <p style={{ marginBottom: 16 }}>
                Try entering a ZIP code or adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container py-12">Loading…</div>}>
      <SearchPageContent />
    </Suspense>
  );
}

