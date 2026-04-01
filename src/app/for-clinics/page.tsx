'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ForClinicsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* HERO */}
      <div className="for-clinics-hero" style={{
        background:
          'linear-gradient(160deg, var(--color-green-900), var(--color-green-700))',
        color: 'white',
      }}
      >
        <div className="container">
          <div className="for-clinics-hero-grid">
            <div>
              <div
                className="section-label"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  color: 'var(--color-green-100)',
                }}
              >
                For Healthcare Providers
              </div>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px,5vw,52px)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: 20,
                  letterSpacing: -1,
                }}
              >
                Reach patients who
                <br />
                <em
                  style={{
                    fontStyle: 'normal',
                    color: 'var(--color-green-300)',
                  }}
                >
                  actually need you.
                </em>
              </h1>
              <p
                style={{
                  fontSize: 18,
                  color: 'rgba(255,255,255,0.75)',
                  marginBottom: 40,
                  lineHeight: 1.7,
                }}
              >
                MedicBridges routes pre-screened, Medicaid-eligible uninsured
                patients directly to your clinic. Reduce no-shows, fill open
                slots, and reduce your outreach costs.
              </p>
              <div
                style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}
              >
                <a href="#contact" className="btn btn-primary btn-lg">
                  List Your Clinic Free
                </a>
                <a
                  href="#pricing"
                  className="btn btn-secondary btn-lg"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    borderColor: 'rgba(255,255,255,0.25)',
                    color: 'white',
                  }}
                >
                  See Pricing Plans
                </a>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.6)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px 24px',
                  alignItems: 'center',
                }}
              >
                <span>✓ Free listing, no credit card</span>
                <span>✓ No long-term contract</span>
                <span>✓ Live in 24 hours</span>
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 20,
              }}
            >
              <div
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 0,
                  padding: '24px 20px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-green-300)',
                    marginBottom: 4,
                  }}
                >
                  50+
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                  Miami clinics
                </div>
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 0,
                  padding: '24px 20px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-green-300)',
                    marginBottom: 4,
                  }}
                >
                  $0
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                  to start
                </div>
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 0,
                  padding: '24px 20px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-green-300)',
                    marginBottom: 4,
                  }}
                >
                  24h
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                  to go live
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY MEDIBRIDGE */}
      <section
        id="how"
        className="section"
        style={{ background: 'var(--color-gray-100)' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div
              className="section-label"
              style={{ margin: '0 auto 16px' }}
            >
              Why MedicBridges
            </div>
            <h2 className="section-title">Your competitive advantage</h2>
            <p
              className="section-sub"
              style={{ margin: '0 auto', maxWidth: 520 }}
            >
              Built for Miami-Dade community health. More visibility, better-matched patients, no long-term lock-in.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 24,
            }}
          >
            <div className="step" style={{ textAlign: 'left', padding: 28 }}>
              <div style={{ fontSize: 32, marginBottom: 14 }} />
              <h3>Local Focus — Miami Only</h3>
              <p>
                We don&apos;t spread thin nationally. Every patient on
                MedicBridges is in Miami-Dade. Your visibility is concentrated
                where it matters.
              </p>
            </div>
            <div className="step" style={{ textAlign: 'left', padding: 28 }}>
              <div style={{ fontSize: 32, marginBottom: 14 }} />
              <h3>Medicaid Specialization</h3>
              <p>
                Built exclusively for Medicaid, sliding-scale, and uninsured
                patients — the population your clinic is designed to serve.
              </p>
            </div>
            <div className="step" style={{ textAlign: 'left', padding: 28 }}>
              <div style={{ fontSize: 32, marginBottom: 14 }} />
              <h3>Pre-Screened Leads</h3>
              <p>
                Patients are matched to your eligibility criteria before they
                arrive. No wasted appointments. Fewer no-shows.
              </p>
            </div>
            <div className="step" style={{ textAlign: 'left', padding: 28 }}>
              <div style={{ fontSize: 32, marginBottom: 14 }} />
              <h3>Community Trust</h3>
              <p>
                Built with patient interviews and community input. Users on
                MedicBridges are motivated, trust the platform, and follow
                through.
              </p>
            </div>
            <div className="step" style={{ textAlign: 'left', padding: 28 }}>
              <div style={{ fontSize: 32, marginBottom: 14 }} />
              <h3>No Long-Term Contracts</h3>
              <p>
                Start with a free listing. Upgrade when you see results. No
                commitments, no risk — designed for community health budgets.
              </p>
            </div>
            <div className="step" style={{ textAlign: 'left', padding: 28 }}>
              <div style={{ fontSize: 32, marginBottom: 14 }} />
              <h3>Analytics Dashboard</h3>
              <p>
                Track profile views, patient connections, and conversion rates.
                Understand your impact and optimize your intake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS FOR CLINICS */}
      <section className="section">
        <div className="container">
          <div className="two-col-responsive">
            <div style={{ textAlign: 'left' }}>
              <div className="section-label">Simple Referral Workflow</div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>How patient routing works</h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  marginTop: 32,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    className="step-num"
                    style={{
                      flexShrink: 0,
                      minWidth: 40,
                      width: 40,
                      height: 40,
                      fontSize: 16,
                    }}
                  >
                    1
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <strong
                      style={{
                        display: 'block',
                        fontSize: 16,
                        marginBottom: 4,
                      }}
                    >
                      Patient searches for care
                    </strong>
                    <span
                      style={{
                        fontSize: 14,
                        color: 'var(--color-gray-500)',
                        lineHeight: 1.5,
                      }}
                    >
                      They enter ZIP, service type, and insurance status
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    className="step-num"
                    style={{
                      flexShrink: 0,
                      minWidth: 40,
                      width: 40,
                      height: 40,
                      fontSize: 16,
                    }}
                  >
                    2
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <strong
                      style={{
                        display: 'block',
                        fontSize: 16,
                        marginBottom: 4,
                      }}
                    >
                      AI matches to your clinic
                    </strong>
                    <span
                      style={{
                        fontSize: 14,
                        color: 'var(--color-gray-500)',
                        lineHeight: 1.5,
                      }}
                    >
                      Your clinic appears as a top result for qualifying
                      patients
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    className="step-num"
                    style={{
                      flexShrink: 0,
                      minWidth: 40,
                      width: 40,
                      height: 40,
                      fontSize: 16,
                    }}
                  >
                    3
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <strong
                      style={{
                        display: 'block',
                        fontSize: 16,
                        marginBottom: 4,
                      }}
                    >
                      Patient connects with you
                    </strong>
                    <span
                      style={{
                        fontSize: 14,
                        color: 'var(--color-gray-500)',
                        lineHeight: 1.5,
                      }}
                    >
                      They call, follow your clinic, or visit directly
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    className="step-num"
                    style={{
                      flexShrink: 0,
                      minWidth: 40,
                      width: 40,
                      height: 40,
                      fontSize: 16,
                    }}
                  >
                    4
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <strong
                      style={{
                        display: 'block',
                        fontSize: 16,
                        marginBottom: 4,
                      }}
                    >
                      You track ROI in your dashboard
                    </strong>
                    <span
                      style={{
                        fontSize: 14,
                        color: 'var(--color-gray-500)',
                        lineHeight: 1.5,
                      }}
                    >
                      See views, connections, and outcome data
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                background: 'var(--color-green-50)',
                border: '1px solid var(--color-green-200)',
                borderRadius: 0,
                padding: 28,
                minWidth: 0,
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 20,
                }}
              >
                What clinics are saying
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontStyle: 'italic',
                      color: 'var(--color-gray-700)',
                      lineHeight: 1.7,
                      marginBottom: 10,
                    }}
                  >
                    &quot;We had open slots on Wednesdays that we couldn&apos;t
                    fill through our usual outreach. MedicBridges is exactly the
                    kind of patient routing tool we&apos;ve needed.&quot;
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        minWidth: 36,
                        background: 'var(--color-green-200)',
                        borderRadius: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 16,
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ minWidth: 0 }}>
                      <strong
                        style={{
                          display: 'block',
                          fontSize: 13,
                          color: 'var(--color-gray-900)',
                        }}
                      >
                        Operations Director
                      </strong>
                      <span
                        style={{
                          fontSize: 12,
                          color: 'var(--color-gray-500)',
                        }}
                      >
                        Community Health Center, Miami
                      </span>
                    </div>
                  </div>
                </div>
                <hr
                  style={{
                    border: 'none',
                    borderTop: '1px solid var(--color-green-200)',
                    margin: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontStyle: 'italic',
                      color: 'var(--color-gray-700)',
                      lineHeight: 1.7,
                      marginBottom: 10,
                    }}
                  >
                    &quot;The pre-screening is the key. We get patients who are
                    actually eligible, which makes our intake process so much
                    faster.&quot;
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        minWidth: 36,
                        background: 'var(--color-green-200)',
                        borderRadius: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 16,
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ minWidth: 0 }}>
                      <strong
                        style={{
                          display: 'block',
                          fontSize: 13,
                          color: 'var(--color-gray-900)',
                        }}
                      >
                        Medical Director
                      </strong>
                      <span
                        style={{
                          fontSize: 12,
                          color: 'var(--color-gray-500)',
                        }}
                      >
                        FQHC, Miami-Dade County
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        style={{ background: 'var(--color-green-900)', padding: '80px 0' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div
              className="section-label"
              style={{
                background: 'rgba(255,255,255,0.12)',
                color: 'var(--color-green-100)',
                margin: '0 auto 16px',
              }}
            >
              Transparent Pricing
            </div>
            <h2 className="section-title" style={{ color: 'white' }}>
              Simple plans. No surprises.
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: 17,
              }}
            >
              Start free. Upgrade when you&apos;re ready. No long-term
              contracts, ever.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Basic</div>
              <div className="pricing-price">Free</div>
              <div className="pricing-sub">Always free to get started</div>
              <ul className="pricing-features">
                <li>Listed in the directory</li>
                <li>Basic profile (name, address, phone)</li>
                <li>Services and hours displayed</li>
                <li>Patients can find and call you</li>
              </ul>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{
                  marginTop: 28,
                  width: '100%',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #6b7280 0%, #374151 100%)',
                }}
              >
                Get Listed Free
              </a>
            </div>
            <div className="pricing-card featured">
              <div
                className="pricing-tier"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                Featured
              </div>
              <div className="pricing-price">
                $99 <span>/mo</span>
              </div>
              <div
                className="pricing-sub"
                style={{ opacity: 0.85 }}
              >
                Most popular for FQHCs
              </div>
              <ul className="pricing-features">
                <li>Everything in Basic</li>
                <li>Top placement in search results</li>
                <li>AI matching enabled</li>
                <li>Follow / subscriber notifications</li>
                <li>Basic analytics dashboard</li>
                <li>AI match badge on profile</li>
              </ul>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{
                  marginTop: 28,
                  width: '100%',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
                  color: 'var(--color-green-800)',
                }}
              >
                Start 30-Day Free Trial
              </a>
            </div>
            <div className="pricing-card">
              <div className="pricing-tier">Partner</div>
              <div className="pricing-price">
                $299 <span>/mo</span>
              </div>
              <div className="pricing-sub">
                For health networks &amp; hospitals
              </div>
              <ul className="pricing-features">
                <li>Everything in Featured</li>
                <li>Priority patient routing</li>
                <li>Full intake form integration</li>
                <li>Advanced analytics + exports</li>
                <li>Dedicated account manager</li>
                <li>Multi-location support</li>
              </ul>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{
                  marginTop: 28,
                  width: '100%',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, var(--color-green-400) 0%, var(--color-green-700) 100%)',
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / SIGN UP */}
      <section id="contact" className="section">
        <div className="container">
          <div className="two-col-responsive">
            <div>
              <div className="section-label">Get Started</div>
              <h2 className="section-title">
                List your clinic on MedicBridges
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: 'var(--color-gray-600)',
                  marginBottom: 32,
                  lineHeight: 1.7,
                }}
              >
                Fill out this short form and we&apos;ll reach out within 24
                hours to get your clinic listed — free, no commitment.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'center',
                    fontSize: 14,
                    color: 'var(--color-gray-600)',
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      background: 'var(--color-green-100)',
                      borderRadius: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-green-700)',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  />
                  Setup in under 24 hours
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'center',
                    fontSize: 14,
                    color: 'var(--color-gray-600)',
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      background: 'var(--color-green-100)',
                      borderRadius: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-green-700)',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  />
                  No credit card required for Basic
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'center',
                    fontSize: 14,
                    color: 'var(--color-gray-600)',
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      background: 'var(--color-green-100)',
                      borderRadius: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-green-700)',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  />
                  Cancel or change plans anytime
                </div>
              </div>
            </div>
            <div>
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: 'var(--color-gray-500)',
                        textTransform: 'uppercase',
                        letterSpacing: 0.8,
                        display: 'block',
                        marginBottom: 6,
                      }}
                    >
                      Clinic Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jessie Trice Community Health"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1.5px solid var(--color-gray-200)',
                        borderRadius: 0,
                        fontSize: 15,
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: 'var(--color-gray-500)',
                        textTransform: 'uppercase',
                        letterSpacing: 0.8,
                        display: 'block',
                        marginBottom: 6,
                      }}
                    >
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      placeholder="First and last name"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1.5px solid var(--color-gray-200)',
                        borderRadius: 0,
                        fontSize: 15,
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: 'var(--color-gray-500)',
                        textTransform: 'uppercase',
                        letterSpacing: 0.8,
                        display: 'block',
                        marginBottom: 6,
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="you@clinic.org"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1.5px solid var(--color-gray-200)',
                        borderRadius: 0,
                        fontSize: 15,
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: 'var(--color-gray-500)',
                        textTransform: 'uppercase',
                        letterSpacing: 0.8,
                        display: 'block',
                        marginBottom: 6,
                      }}
                    >
                      Type of Clinic
                    </label>
                    <select
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1.5px solid var(--color-gray-200)',
                        borderRadius: 0,
                        fontSize: 15,
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        cursor: 'pointer',
                        background: 'white',
                      }}
                    >
                      <option>FQHC / Community Health Center</option>
                      <option>Free Clinic</option>
                      <option>Mental Health Center</option>
                      <option>Pharmacy</option>
                      <option>Hospital / Health System</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: 'var(--color-gray-500)',
                        textTransform: 'uppercase',
                        letterSpacing: 0.8,
                        display: 'block',
                        marginBottom: 6,
                      }}
                    >
                      Interested Plan
                    </label>
                    <select
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1.5px solid var(--color-gray-200)',
                        borderRadius: 0,
                        fontSize: 15,
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        cursor: 'pointer',
                        background: 'white',
                      }}
                    >
                      <option>Basic (Free)</option>
                      <option>Featured ($99/mo)</option>
                      <option>Partner ($299/mo)</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      marginTop: 4,
                    }}
                  >
                    Submit — We&apos;ll Reach Out in 24h →
                  </button>
                </form>
              ) : (
                <div
                  style={{
                    background: 'var(--color-green-50)',
                    border: '1px solid var(--color-green-200)',
                    borderRadius: 0,
                    padding: 24,
                    textAlign: 'center',
                    marginTop: 16,
                  }}
                >
                  <div
                    style={{ fontSize: 36, marginBottom: 12 }}
                  />
                  <strong
                    style={{
                      display: 'block',
                      fontSize: 16,
                      color: 'var(--color-green-800)',
                      marginBottom: 6,
                    }}
                  >
                    You&apos;re on the list!
                  </strong>
                  <span
                    style={{
                      fontSize: 14,
                      color: 'var(--color-gray-600)',
                    }}
                  >
                    Our team will reach out within 24 hours to complete your
                    listing.
                  </span>
                </div>
              )}
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
              MedicBridges
            </Link>
            <span style={{ fontSize: 13 }}>
              © 2026 MedicBridges — Miami, FL.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

