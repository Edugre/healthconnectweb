'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Clinic = {
  id: string;
  name: string;
  address_line1?: string;
  city?: string;
  state?: string;
  zip?: string;
  description?: string;
  phone?: string;
  hours?: string;
  languages?: string[];
  care_types?: string[];
  uninsured_accepted?: boolean;
  medicaid_accepted?: boolean;
  medicare_accepted?: boolean;
  sliding_scale?: boolean;
};

export default function ClinicPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const [clinic, setClinic] = useState<Clinic | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function loadClinic() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/clinics/search?clinicId=${encodeURIComponent(id)}`);
        const json = await res.json();
        if (!res.ok) {
          setError(json.error || 'Clinic not found');
          setClinic(null);
        } else {
          const first: Clinic | undefined = (json.clinics || [])[0];
          if (!first) {
            setError('Clinic not found');
          } else {
            setClinic(first);
          }
        }
      } catch {
        setError('Failed to load clinic');
      } finally {
        setLoading(false);
      }
    }

    void loadClinic();
  }, [id]);

  const fullAddress = clinic
    ? `${clinic.address_line1 ?? ''}${clinic.city ? `, ${clinic.city}` : ''}${
        clinic.state ? `, ${clinic.state}` : ''
      }${clinic.zip ? ` ${clinic.zip}` : ''}`
    : '';

  const mapUrl = clinic
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        fullAddress || 'Miami, FL',
      )}`
    : '#';

  return (
    <>
      {/* Breadcrumb */}
      <div
        style={{
          background: 'var(--gray-100)',
          borderBottom: '1px solid var(--gray-200)',
          padding: '10px 0',
        }}
      >
        <div className="container">
          <span style={{ fontSize: 13, color: 'var(--gray-500)' }}>
            <Link
              href="/"
              style={{
                color: 'var(--gray-500)',
                textDecoration: 'none',
              }}
            >
              Home
            </Link>{' '}
            /{' '}
            <Link
              href="/search"
              style={{
                color: 'var(--gray-500)',
                textDecoration: 'none',
              }}
            >
              Find Care
            </Link>{' '}
            /{' '}
            <span style={{ color: 'var(--gray-700)' }}>
              {clinic?.name ?? 'Clinic'}
            </span>
          </span>
        </div>
      </div>

      {/* PROFILE HERO */}
      <div className="profile-hero">
        <div className="container">
          {loading ? (
            <p>Loading clinic...</p>
          ) : error ? (
            <p>{error}</p>
          ) : clinic ? (
            <>
              <div className="profile-header">
                <div className="profile-avatar">
                  <span>{clinic.name?.charAt(0) ?? 'C'}</span>
                </div>
                <div className="profile-info">
                  <div
                    style={{
                      display: 'flex',
                      gap: 8,
                      flexWrap: 'wrap',
                      marginBottom: 10,
                    }}
                  >
                    {clinic.sliding_scale && (
                      <span className="badge badge-gray">Sliding-Scale</span>
                    )}
                    {clinic.uninsured_accepted && (
                      <span className="badge badge-green">Uninsured OK</span>
                    )}
                    {clinic.medicaid_accepted && (
                      <span className="badge badge-green">Medicaid</span>
                    )}
                    {clinic.medicare_accepted && (
                      <span className="badge badge-green">Medicare</span>
                    )}
                  </div>
                  <h1>{clinic.name}</h1>
                  <p>{fullAddress}</p>
                </div>
                <div className="profile-actions">
                  <button className="btn btn-primary" type="button">
                    Follow for Updates
                  </button>
                  {clinic.phone && (
                    <a
                      href={`tel:${clinic.phone.replace(/\D/g, '')}`}
                      className="btn btn-dark btn-lg"
                    >
                      Call Now
                    </a>
                  )}
                </div>
              </div>

              {/* Simple availability placeholders for now */}
              <div
                style={{
                  display: 'flex',
                  gap: 24,
                  marginTop: 32,
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 12,
                    padding: '14px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <div
                    className="dot dot-green"
                    style={{ width: 12, height: 12 }}
                  />
                  <div>
                    <strong
                      style={{ display: 'block', fontSize: 14 }}
                    >
                      Availability
                    </strong>
                    <span
                      style={{ fontSize: 12, opacity: 0.7 }}
                    >
                      Call clinic for current wait times
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 12,
                    padding: '14px 20px',
                  }}
                >
                  <strong
                    style={{ display: 'block', fontSize: 14 }}
                  >
                    {clinic.hours ?? 'Hours not specified'}
                  </strong>
                  <span
                    style={{ fontSize: 12, opacity: 0.7 }}
                  >
                    Operating hours
                  </span>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* PROFILE BODY */}
      <div className="section-sm">
        <div className="container">
          <div className="profile-grid">
            <div>
              <div className="info-card">
                <h3>About This Clinic</h3>
                <p
                  style={{
                    fontSize: 15,
                    color: 'var(--gray-600)',
                    lineHeight: 1.8,
                  }}
                >
                  {clinic?.description ||
                    'This clinic profile will soon include a detailed description pulled from our clinic database.'}
                </p>
              </div>

              <div className="info-card">
                <h3>Services Offered</h3>
                <div className="services-list">
                  {(clinic?.care_types ?? []).map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="info-card">
                <h3>Languages Spoken</h3>
                <div className="services-list">
                  {(clinic?.languages ?? []).map((l) => (
                    <span key={l} className="tag">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="info-card">
                <h3>Contact &amp; Location</h3>
                <div className="info-row">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <strong>{clinic?.phone ?? 'Phone not available'}</strong>
                    <span>Call to confirm availability</span>
                  </div>
                </div>
                <div className="info-row">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <circle
                      cx="12"
                      cy="11"
                      r="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div>
                    <strong>{fullAddress || 'Address not available'}</strong>
                    <span>Miami, FL</span>
                  </div>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: 12,
                  }}
                >
                  Get Directions
                </a>
              </div>

              <div className="info-card">
                <h3>Insurance Accepted</h3>
                <div className="services-list">
                  {clinic?.uninsured_accepted && (
                    <span className="tag">Uninsured patients</span>
                  )}
                  {clinic?.medicaid_accepted && (
                    <span className="tag">Medicaid</span>
                  )}
                  {clinic?.medicare_accepted && (
                    <span className="tag">Medicare</span>
                  )}
                  {clinic?.sliding_scale && (
                    <span className="tag">Sliding-scale fees</span>
                  )}
                </div>
                <div
                  style={{
                    marginTop: 16,
                    background: 'var(--green-50)',
                    border: '1px solid var(--green-200)',
                    borderRadius: 10,
                    padding: '12px 14px',
                    fontSize: 12,
                    color: 'var(--green-800)',
                  }}
                >
                  <strong>No insurance?</strong> This clinic may still serve
                  you. Call to ask about sliding-scale or free care.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED CLINICS placeholder */}
      <div
        style={{ background: 'var(--gray-100)', padding: '48px 0' }}
      >
        <div className="container">
          <h2
            style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}
          >
            Similar clinics nearby
          </h2>
          <div className="clinic-grid">
            <p style={{ fontSize: 14, color: 'var(--gray-600)' }}>
              Related clinics will appear here once we connect this page to the
              full clinic search backend.
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div
            className="footer-bottom"
            style={{ borderTop: 'none', paddingTop: 0 }}
          >
            <Link
              href="/"
              className="nav-logo"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <div className="nav-logo-icon">M</div>
              MediBridge
            </Link>
            <span style={{ fontSize: 13 }}>
              © 2026 MediBridge — Miami, FL.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

