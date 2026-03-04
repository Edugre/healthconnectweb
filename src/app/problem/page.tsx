'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProblemPage() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  function toggleAudio(id: string) {
    setPlayingId((current) => (current === id ? null : id));
  }

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="container">
          <div
            className="section-label"
            style={{
              background: 'rgba(255,255,255,0.15)',
              color: 'var(--green-100)',
              margin: '0 auto 16px',
            }}
          >
            The Problem We&apos;re Solving
          </div>
          <h1>
            Healthcare exists.
            <br />
            But for millions — it&apos;s invisible.
          </h1>
          <p>
            We went directly to the community to understand why. This is what we
            found.
          </p>
        </div>
      </div>

      {/* STATS ROW */}
      <section className="stats-strip" style={{ padding: '48px 0' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <strong>44,000+</strong>
              <p>
                Adults aged 18–64 die annually in the US due to lack of health
                insurance
              </p>
            </div>
            <div className="stat-item">
              <strong>38%</strong>
              <p>of Americans delay or avoid care due to cost</p>
            </div>
            <div className="stat-item">
              <strong>1 in 4</strong>
              <p>Miami-Dade residents are uninsured or underinsured</p>
            </div>
            <div className="stat-item">
              <strong>$0</strong>
              <p>
                spent on patient-facing outreach by most community clinics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM NARRATIVE */}
      <section id="problem" style={{ padding: '80px 0' }}>
        <div className="container">
          {/* Block 1 */}
          <div className="problem-block">
            <div>
              <div
                style={{
                  background: 'var(--green-100)',
                  borderRadius: 'var(--radius-lg)',
                  height: 320,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 80,
                }}
              />
            </div>
            <div className="problem-text">
              <div className="section-label">The Access Gap</div>
              <h2>The care exists. People just can&apos;t find it.</h2>
              <p>
                Miami has over 40 federally qualified health centers, dozens of
                free clinics, and hundreds of providers who accept Medicaid and
                uninsured patients. Yet most people have no idea these resources
                exist.
              </p>
              <p>
                The problem isn&apos;t supply — it&apos;s information. When you
                don&apos;t know where to go, the ER becomes your primary care
                doctor. That costs the system $1,200+ per visit when a community
                clinic would cost $0.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 16,
                  marginTop: 24,
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    background: 'var(--green-50)',
                    border: '1px solid var(--green-200)',
                    borderRadius: 12,
                    padding: '16px 20px',
                    flex: 1,
                    minWidth: 140,
                  }}
                >
                  <strong
                    style={{
                      display: 'block',
                      fontSize: 22,
                      color: 'var(--green-700)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    40+
                  </strong>
                  <span
                    style={{ fontSize: 13, color: 'var(--gray-600)' }}
                  >
                    FQHCs in Miami-Dade
                  </span>
                </div>
                <div
                  style={{
                    background: 'var(--green-50)',
                    border: '1px solid var(--green-200)',
                    borderRadius: 12,
                    padding: '16px 20px',
                    flex: 1,
                    minWidth: 140,
                  }}
                >
                  <strong
                    style={{
                      display: 'block',
                      fontSize: 22,
                      color: 'var(--green-700)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    $0
                  </strong>
                  <span
                    style={{ fontSize: 13, color: 'var(--gray-600)' }}
                  >
                    Cost at many community clinics
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid var(--gray-200)',
              margin: '32px 0',
            }}
          />

          {/* Block 2 */}
          <div className="problem-block reverse">
            <div>
              <div
                style={{
                  background: 'var(--gray-100)',
                  borderRadius: 'var(--radius-lg)',
                  height: 320,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 80,
                }}
              />
            </div>
            <div className="problem-text">
              <div className="section-label">Medication Abandonment</div>
              <h2>Patients leave without the medications they need.</h2>
              <p>
                Many community clinics dispense medications on-site at no cost
                through the federal 340B drug pricing program. But patients
                don&apos;t know to ask. They walk out without their
                prescriptions and their condition worsens.
              </p>
              <p>
                NeedyMeds estimates over 25 million Americans skip or delay
                prescriptions annually because of cost. Many don&apos;t know
                that free options exist right where they already go for care.
              </p>
            </div>
          </div>

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid var(--gray-200)',
              margin: '32px 0',
            }}
          />

          {/* Block 3 */}
          <div className="problem-block">
            <div>
              <div
                style={{
                  background: 'var(--green-50)',
                  borderRadius: 'var(--radius-lg)',
                  height: 320,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 80,
                }}
              />
            </div>
            <div className="problem-text">
              <div className="section-label">Mental Health Desert</div>
              <h2>Mental health care is the most invisible of all.</h2>
              <p>
                For underserved communities in Miami, finding free or affordable
                therapy is nearly impossible — not because services don&apos;t
                exist, but because the information is fragmented, buried in
                government websites, or simply unavailable in Spanish or Haitian
                Creole.
              </p>
              <p>
                Over 60% of Miami adults with mental health conditions receive
                no treatment. Language barriers, stigma, and cost are all
                factors — but lack of visible access is the first barrier to
                break.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIELD RESEARCH */}
      <section
        id="research"
        style={{ background: 'var(--gray-100)', padding: '80px 0' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div
              className="section-label"
              style={{ margin: '0 auto 16px' }}
            >
              Field Research
            </div>
            <h2 className="section-title">
              We went to the clinics and listened.
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Our team conducted in-person interviews with patients at
              low-resource clinics in Miami. These are their words.
            </p>
          </div>

          {/* INTERVIEW QUOTES */}
          <div className="quotes-grid">
            <div className="quote-card">
              <span className="quote-mark">"</span>
              <p className="quote-text">
                I didn&apos;t know I could see a doctor without insurance until
                my neighbor told me. I had been going to the ER for two years
                and paying those bills. This clinic is three blocks from my
                house.
              </p>
              <div className="quote-author">
                <div className="quote-avatar" />
                <div className="quote-author-info">
                  <strong>Patient Interview #1</strong>
                  <span>Little Havana — Primary Care</span>
                </div>
              </div>
              {/* Audio Player (placeholder) */}
              <div className="audio-player" style={{ marginTop: 16 }}>
                <button
                  className="play-btn"
                  type="button"
                  onClick={() => toggleAudio('audio1')}
                  aria-label="Toggle audio 1"
                >
                  {playingId === 'audio1' ? (
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <rect x="4" y="3" width="4" height="14" rx="1" />
                      <rect x="12" y="3" width="4" height="14" rx="1" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  )}
                </button>
                <div className="audio-info">
                  <strong>Patient Interview — Little Havana</strong>
                  <span>Spanish · 2:14 · Uninsured, age 34</span>
                </div>
              </div>
            </div>

            <div className="quote-card">
              <span className="quote-mark">"</span>
              <p className="quote-text">
                My doctor here gives me my blood pressure medication every time
                I come. I didn&apos;t know that was even possible. Before, I
                couldn&apos;t afford it and I just... stopped taking it. That
                was dangerous.
              </p>
              <div className="quote-author">
                <div className="quote-avatar" />
                <div className="quote-author-info">
                  <strong>Patient Interview #2</strong>
                  <span>Hialeah — Chronic Condition</span>
                </div>
              </div>
              <div className="audio-player" style={{ marginTop: 16 }}>
                <button
                  className="play-btn"
                  type="button"
                  onClick={() => toggleAudio('audio2')}
                  aria-label="Toggle audio 2"
                >
                  {playingId === 'audio2' ? (
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <rect x="4" y="3" width="4" height="14" rx="1" />
                      <rect x="12" y="3" width="4" height="14" rx="1" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  )}
                </button>
                <div className="audio-info">
                  <strong>Patient Interview — Hialeah</strong>
                  <span>Spanish/English · 3:07 · Medicaid, age 52</span>
                </div>
              </div>
            </div>

            <div className="quote-card">
              <span className="quote-mark">"</span>
              <p className="quote-text">
                Mental health in my community is not talked about. I was
                ashamed. But when I found out there was a free therapist who
                speaks Creole — someone who would understand me — I called the
                same day.
              </p>
              <div className="quote-author">
                <div className="quote-avatar" />
                <div className="quote-author-info">
                  <strong>Patient Interview #3</strong>
                  <span>Little Haiti — Mental Health</span>
                </div>
              </div>
              <div className="audio-player" style={{ marginTop: 16 }}>
                <button
                  className="play-btn"
                  type="button"
                  onClick={() => toggleAudio('audio3')}
                  aria-label="Toggle audio 3"
                >
                  {playingId === 'audio3' ? (
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <rect x="4" y="3" width="4" height="14" rx="1" />
                      <rect x="12" y="3" width="4" height="14" rx="1" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  )}
                </button>
                <div className="audio-info">
                  <strong>Patient Interview — Little Haiti</strong>
                  <span>Haitian Creole · 1:58 · Uninsured, age 28</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div
            style={{
              maxWidth: 700,
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div
              className="section-label"
              style={{ margin: '0 auto 16px' }}
            >
              The Solution
            </div>
            <h2 className="section-title">
              That&apos;s why we built MediBridge.
            </h2>
            <p
              style={{
                fontSize: 17,
                color: 'var(--gray-600)',
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              One platform that aggregates every free clinic, sliding-scale
              provider, community pharmacy, and mental health service in Miami —
              and matches you to the right one, in your language, based on your
              situation.
            </p>
            <div
              style={{
                display: 'flex',
                gap: 16,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link href="/search" className="btn btn-primary btn-lg">
                Find Care Now →
              </Link>
              <Link href="/for-clinics" className="btn btn-secondary btn-lg">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE FOOTER STRIP */}
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

