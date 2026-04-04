'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [zip, setZip] = useState('');
  const [service, setService] = useState('');
  const [clinicCount, setClinicCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/clinics/count')
      .then((res) => res.json())
      .then((data) => typeof data.count === 'number' && setClinicCount(data.count))
      .catch(() => {});
  }, []);

  function handleHeroSearch() {
    const params = new URLSearchParams();
    if (zip) params.set('zip', zip);
    if (service) params.set('type', service);

    const query = params.toString();
    const href = query ? `/search?${query}` : '/search';
    router.push(href);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleHeroSearch();
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12zm0-9a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              Miami, Florida — Free for Patients
            </div>
            <h1>
              Find <em>affordable care</em>
              <br />
              near you — in minutes.
            </h1>
            <p className="hero-sub">
              MedicBridges connects you with free clinics, low-cost pharmacies,
              and mental health services in Miami. No insurance? No problem.
            </p>

            {/* SEARCH BOX */}
            <div className="search-box" id="heroSearch">
              <div className="search-field">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <label htmlFor="zipInput">ZIP Code</label>
                  <input
                    id="zipInput"
                    type="text"
                    placeholder="e.g. 33125"
                    maxLength={5}
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </div>
              <div className="search-field">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <div>
                  <label htmlFor="serviceSelect">I need</label>
                  <select
                    id="serviceSelect"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Any service</option>
                    <option value="clinic">Primary Care</option>
                    <option value="mental-health">Mental Health / Therapy</option>
                    <option value="pharmacy">Pharmacy / Medications</option>
                    <option value="dental">Dental</option>
                    <option value="womens">Women&apos;s Health</option>
                  </select>
                </div>
              </div>
              <div className="search-btn-wrap">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={handleHeroSearch}
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path
                      strokeLinecap="round"
                      d="M21 21l-4.35-4.35"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <Link
                href="/search"
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: 13,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  textDecoration: 'none',
                  transition: 'color 0.18s',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                  />
                </svg>
                Advanced search with more filters →
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>
                  {clinicCount === null
                    ? '—'
                    : clinicCount >= 50
                      ? '50+'
                      : String(clinicCount)}
                </strong>
                <span>Miami clinics listed</span>
              </div>
              <div className="hero-stat">
                <strong>$0</strong>
                <span>Cost for patients</span>
              </div>
              <div className="hero-stat">
                <strong>3 min</strong>
                <span>Average time to match</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: 'var(--color-gray-100)' }}>
        <div className="container">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Find care in 3 simple steps</h2>
          <p className="section-sub">
            No forms. No confusion. Just answers — in your language.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Tell us what you need</h3>
              <p>
                Select your service type, ZIP code, and insurance situation.
                Takes 30 seconds.
              </p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>See your matches</h3>
              <p>
                We show you ranked clinics with real availability, wait times,
                and cost information.
              </p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Get connected</h3>
              <p>
                Call directly, get directions, or follow the clinic for future
                updates. Simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CLINICS */}
      <section className="section">
        <div className="container">
          <div
            className="home-featured-header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: 16,
              marginBottom: 0,
            }}
          >
            <div>
              <div className="section-label">Featured in Miami</div>
              <h2 className="section-title">Top-matched clinics near you</h2>
            </div>
            <Link href="/search" className="btn btn-secondary">
              See all clinics →
            </Link>
          </div>
          <div className="clinic-grid">
            {/* We will populate this from Supabase later */}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <strong>44,000+</strong>
              <p>
                Adults die annually in the US due to lack of health insurance
              </p>
            </div>
            <div className="stat-item">
              <strong>38%</strong>
              <p>of Americans delay care because of cost</p>
            </div>
            <div className="stat-item">
              <strong>1 in 4</strong>
              <p>Miami-Dade residents are uninsured or underinsured</p>
            </div>
            <div className="stat-item">
              <strong>$0</strong>
              <p>Cost for patients to use MedicBridges, always</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY VOICES */}
      <section className="section">
        <div className="container">
          <div className="section-label">Community Voices</div>
          <h2 className="section-title">Real patients. Real stories.</h2>
          <p className="section-sub">
            From our interviews with patients at Miami community clinics.
          </p>
          <div className="quotes-grid">
            <div className="quote-card">
              <span className="quote-mark">&ldquo;</span>
              <p className="quote-text">
                I didn&apos;t know I could see a doctor without insurance. I
                thought the ER was my only option. Now I have a regular primary
                care doctor who speaks Spanish.
              </p>
              <div className="quote-author">
                <div className="quote-avatar" />
                <div className="quote-author-info">
                  <strong>María, 34</strong>
                  <span>Little Havana, Miami</span>
                </div>
              </div>
            </div>
            <div className="quote-card">
              <span className="quote-mark">&ldquo;</span>
              <p className="quote-text">
                I needed medication every month and I couldn&apos;t afford it.
                I found out through this clinic that there&apos;s a program
                where I get it for free. Changed my life.
              </p>
              <div className="quote-author">
                <div className="quote-avatar" />
                <div className="quote-author-info">
                  <strong>Carlos, 52</strong>
                  <span>Hialeah, Miami</span>
                </div>
              </div>
            </div>
            <div className="quote-card">
              <span className="quote-mark">&ldquo;</span>
              <p className="quote-text">
                Mental health is still taboo in my family, but I found a free
                therapist who speaks Creole. For the first time I felt
                understood and not judged.
              </p>
              <div className="quote-author">
                <div className="quote-avatar" />
                <div className="quote-author-info">
                  <strong>Nadège, 28</strong>
                  <span>Little Haiti, Miami</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTER NOW CTA */}
      <section style={{ background: 'var(--color-black)', padding: '72px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div
              className="section-label"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'var(--color-green-200)',
                margin: '0 auto 16px',
              }}
            >
              Join MedicBridges
            </div>
            <h2 className="section-title" style={{ color: 'white' }}>
              Ready to get started?
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 17,
                maxWidth: 480,
                margin: '0 auto',
              }}
            >
              Whether you need care or you provide it, MedicBridges is here to
              connect you.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
              gap: 24,
              maxWidth: 860,
              margin: '0 auto',
            }}
          >
            {/* PATIENT CARD */}
            <div
              style={{
                background: 'var(--color-green-900)',
                border: '1px solid var(--color-green-700)',
                borderRadius: 16,
                padding: '36px 32px',
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  color: 'var(--color-green-400)',
                  marginBottom: 12,
                }}
              >
                For Patients
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 24,
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: 12,
                }}
              >
                Find care you can afford.
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Create a free profile and get matched with clinics, pharmacies,
                and mental health services in Miami based on your needs,
                language, and insurance status.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  marginBottom: 28,
                }}
              >
                {[
                  'Always free — no hidden costs',
                  'Matched to clinics that accept you',
                  'Follow clinics and get updates',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.75)',
                      display: 'flex',
                      gap: 10,
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        background: 'var(--color-green-500)',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 10,
                        color: 'white',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/patient-signup"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Register Now — It&apos;s Free
              </Link>
            </div>
            {/* CLINIC CARD */}
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 16,
                padding: '36px 32px',
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  color: 'var(--color-gray-400)',
                  marginBottom: 12,
                }}
              >
                For Clinics &amp; Providers
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 24,
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: 12,
                }}
              >
                Reach patients who need you.
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                List your clinic and get pre-screened Medicaid and uninsured
                patients routed directly to you. No long-term contracts. Start
                free today.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  marginBottom: 28,
                }}
              >
                {[
                  'Basic listing is free, always',
                  'Pre-screened, eligible patients only',
                  'Listed in 24 hours',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.75)',
                      display: 'flex',
                      gap: 10,
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        background: 'rgba(255,255,255,0.15)',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 10,
                        color: 'white',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/for-clinics#contact"
                className="btn btn-lg"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: 'white',
                  color: 'var(--color-green-900)',
                }}
              >
                Register Your Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="section" style={{ background: 'var(--color-gray-100)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div
              className="section-label"
              style={{ margin: '0 auto 16px' }}
            >
              What We Cover
            </div>
            <h2 className="section-title">Every type of care you need</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 20,
              paddingTop: 8,
            }}
          >
            <div className="cover-card">
              <h3>Primary Care</h3>
              <p>General checkups, chronic conditions, preventative care</p>
            </div>
            <div className="cover-card">
              <h3>Free Medications</h3>
              <p>On-site dispensing, free generics, medication programs</p>
            </div>
            <div className="cover-card">
              <h3>Mental Health</h3>
              <p>Free therapy, psychiatry, crisis support, counseling</p>
            </div>
            <div className="cover-card">
              <h3>Dental</h3>
              <p>Cleanings, extractions, sliding-scale dental care</p>
            </div>
            <div className="cover-card">
              <h3>Women&apos;s Health</h3>
              <p>OB-GYN, family planning, prenatal care</p>
            </div>
            <div className="cover-card">
              <h3>Vaccinations</h3>
              <p>Free immunizations, flu shots, travel vaccines</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR CLINICS TEASER */}
      <section className="for-clinics">
        <div className="container">
          <div className="home-for-clinics-teaser-grid">
            <div className="home-for-clinics-teaser-head">
              <div
                className="section-label"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: 'var(--color-green-200)',
                }}
              >
                For Healthcare Providers
              </div>
              <h2 className="section-title" style={{ color: 'white' }}>
                Reach patients who need you.
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 17,
                  lineHeight: 1.7,
                  marginBottom: 0,
                }}
              >
                List your clinic for free. Get pre-screened, Medicaid-eligible
                patients matched directly to your services. Reduce no-shows.
                Improve outcomes.
              </p>
            </div>
            <div className="home-for-clinics-teaser-cards">
              <div
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 16,
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div style={{ fontSize: 28 }} />
                <div>
                  <strong
                    style={{
                      display: 'block',
                      color: 'white',
                      fontSize: 15,
                    }}
                  >
                    More visibility
                  </strong>
                  <span
                    style={{
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    Appear in searches by qualifying patients in your area
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 16,
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div style={{ fontSize: 28 }} />
                <div>
                  <strong
                    style={{
                      display: 'block',
                      color: 'white',
                      fontSize: 15,
                    }}
                  >
                    Pre-screened leads
                  </strong>
                  <span
                    style={{
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    Patients matched to your eligibility criteria before they
                    arrive
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 16,
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div style={{ fontSize: 28 }} />
                <div>
                  <strong
                    style={{
                      display: 'block',
                      color: 'white',
                      fontSize: 15,
                    }}
                  >
                    No long-term contracts
                  </strong>
                  <span
                    style={{
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    Start free. Upgrade when you see the results.
                  </span>
                </div>
              </div>
            </div>
            <div className="home-for-clinics-teaser-cta" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/for-clinics" className="btn btn-primary btn-lg">
                List Your Clinic Free
              </Link>
              <Link
                href="/for-clinics#pricing"
                className="btn btn-secondary btn-lg"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                }}
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link
                href="/"
                className="nav-logo"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                <div className="nav-logo-icon">M</div>
                MedicBridges
              </Link>
              <p>
                Connecting Miami&apos;s underserved communities with free and
                affordable healthcare. Always free for patients.
              </p>
            </div>
            <div className="footer-col">
              <h4>For Patients</h4>
              <ul>
                <li>
                  <Link href="/search">Find a Clinic</Link>
                </li>
                <li>
                  <Link href="/search?type=pharmacy">Free Medications</Link>
                </li>
                <li>
                  <Link href="/search?type=mental-health">Mental Health</Link>
                </li>
                <li>
                  <Link href="/search?type=dental">Dental Care</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>For Clinics</h4>
              <ul>
                <li>
                  <Link href="/for-clinics">List Your Clinic</Link>
                </li>
                <li>
                  <Link href="/for-clinics#pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/for-clinics#how">How It Works</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li>
                  <Link href="/problem">The Problem</Link>
                </li>
                <li>
                  <Link href="/problem#research">Our Research</Link>
                </li>
                <li>
                  <a href="mailto:hello@medibridge.care">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © 2026 MedicBridges — Florida International University Student
              Research Project, Miami, FL.
            </span>
            <div style={{ display: 'flex', gap: 16 }}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/privacy">Terms of Use</Link>
              <Link href="/privacy">Legal</Link>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 0',
            marginTop: 16,
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.7,
              maxWidth: 800,
              margin: '0 auto',
            }}
          >
            <strong style={{ color: 'rgba(255,255,255,0.6)' }}>
              Privacy Notice:
            </strong>{' '}
            MedicBridges is a non-commercial academic prototype developed by
            students at Florida International University. We collect only the
            minimum information necessary to match patients with clinics. We do
            not sell your data, use it for advertising, or share it without your
            consent. Your use of this platform is entirely voluntary.{' '}
            <Link
              href="/privacy"
              style={{
                color: 'var(--color-green-400)',
                fontWeight: 600,
                marginLeft: 6,
              }}
            >
              Read full Privacy Policy &amp; Terms of Use
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
