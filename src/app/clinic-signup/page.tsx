'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ClinicSignupPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className="register-hero">
        <div className="container">
          <div
            className="section-label"
            style={{
              background: 'rgba(255,255,255,0.12)',
              color: 'var(--color-green-200)',
              margin: '0 auto 16px',
            }}
          >
            For Healthcare Providers
          </div>
          <h1>Register Your Clinic on MedicBridges</h1>
          <p>
            Start reaching pre-screened Medicaid and uninsured patients in
            Miami. Get listed free — upgrade when you see results.
          </p>
        </div>
      </div>

      <div className="register-body">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-section-title">Clinic Information</div>
            <div className="form-group">
              <label htmlFor="clinicName">
                Clinic / Organization Name *
              </label>
              <input
                type="text"
                id="clinicName"
                placeholder="e.g. Jessie Trice Community Health Center"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="clinicType">Type of Clinic *</label>
                <select id="clinicType" required>
                  <option value="">Select...</option>
                  <option>FQHC / Community Health Center</option>
                  <option>Free Clinic</option>
                  <option>Mental Health Center</option>
                  <option>Community Pharmacy</option>
                  <option>Hospital / Health System</option>
                  <option>Planned Parenthood / Reproductive Health</option>
                  <option>Dental Clinic</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="clinicZip">ZIP Code *</label>
                <input
                  type="text"
                  id="clinicZip"
                  placeholder="e.g. 33125"
                  maxLength={5}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="clinicAddress">Full Address *</label>
              <input
                type="text"
                id="clinicAddress"
                placeholder="Street address, Miami, FL"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="clinicPhone">Phone Number *</label>
                <input
                  type="tel"
                  id="clinicPhone"
                  placeholder="(305) 000-0000"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="clinicWebsite">Website (optional)</label>
                <input
                  type="url"
                  id="clinicWebsite"
                  placeholder="https://yourclinic.org"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="clinicHours">Operating Hours *</label>
              <input
                type="text"
                id="clinicHours"
                placeholder="e.g. Mon–Fri 8am–5pm, Sat 9am–1pm"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="clinicDesc">Brief Description</label>
              <textarea
                id="clinicDesc"
                rows={3}
                placeholder="Tell patients a little about your clinic, the community you serve, and what makes you unique..."
              />
            </div>

            <div className="form-section-title">Contact Person</div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactName">Full Name *</label>
                <input
                  type="text"
                  id="contactName"
                  placeholder="First and last name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactRole">Role / Title *</label>
                <input
                  type="text"
                  id="contactRole"
                  placeholder="e.g. Operations Director"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactEmail">Email *</label>
                <input
                  type="email"
                  id="contactEmail"
                  placeholder="contact@clinic.org"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactPhone">Direct Phone</label>
                <input
                  type="tel"
                  id="contactPhone"
                  placeholder="(305) 000-0000"
                />
              </div>
            </div>

            <div className="form-section-title">Services Offered</div>
            <div className="form-group">
              <label>Select all services your clinic provides:</label>
              <div className="checkbox-group">
                {[
                  ['primary', 'Primary Care'],
                  ['dental', 'Dental'],
                  ['mental-health', 'Mental Health / Therapy'],
                  ['pharmacy', 'Pharmacy / Medications'],
                  ['womens', "Women\u2019s Health"],
                  ['pediatrics', 'Pediatrics'],
                  ['vision', 'Vision'],
                  ['hiv', 'HIV/AIDS'],
                  ['substance', 'Substance Abuse'],
                  ['chronic', 'Chronic Disease Mgmt'],
                  ['prenatal', 'Prenatal / OB-GYN'],
                  ['vaccines', 'Vaccinations'],
                ].map(([value, label]) => (
                  <label key={value} className="checkbox-item">
                    <input type="checkbox" name="services" value={value} />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-section-title">Insurance &amp; Pricing</div>
            <div className="form-group">
              <label>Which patients do you serve?</label>
              <div className="checkbox-group">
                {[
                  ['uninsured', 'Uninsured patients'],
                  ['medicaid', 'Medicaid'],
                  ['medicare', 'Medicare'],
                  ['sliding', 'Sliding-scale fees'],
                  ['marketplace', 'Marketplace / ACA'],
                ].map(([value, label]) => (
                  <label key={value} className="checkbox-item">
                    <input type="checkbox" name="insurance" value={value} />
                    {label}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Do you dispense medications on-site?</label>
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input type="checkbox" name="meds" value="yes" />
                  Yes — free or low-cost meds available
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="meds" value="340b" />
                  Yes — 340B drug pricing program
                </label>
              </div>
            </div>

            <div className="form-section-title">
              Languages Spoken at Your Clinic
            </div>
            <div className="form-group">
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="langs"
                    value="english"
                    defaultChecked
                  />
                  English
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="langs" value="spanish" />
                  Spanish / Espanol
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="langs" value="creole" />
                  Haitian Creole
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="langs" value="portuguese" />
                  Portuguese
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="langs" value="other" />
                  Other
                </label>
              </div>
            </div>

            <div className="form-section-title">Choose Your Plan</div>
            <div className="plan-cards">
              <label className="plan-card selected">
                <input
                  type="radio"
                  name="plan"
                  value="basic"
                  defaultChecked
                />
                <span className="plan-name">Basic</span>
                <div className="plan-price">Free</div>
                <p className="plan-desc">
                  Listed in directory. Patients can find and call you.
                </p>
              </label>
              <label className="plan-card">
                <input type="radio" name="plan" value="featured" />
                <span className="plan-name">Featured</span>
                <div className="plan-price">
                  $99 <span>/mo</span>
                </div>
                <p className="plan-desc">
                  Top placement, AI matching, and basic analytics.
                </p>
              </label>
              <label className="plan-card">
                <input type="radio" name="plan" value="partner" />
                <span className="plan-name">Partner</span>
                <div className="plan-price">
                  $299 <span>/mo</span>
                </div>
                <p className="plan-desc">
                  For networks &amp; hospitals with advanced needs.
                </p>
              </label>
            </div>

            <div className="submit-area">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ justifyContent: 'center', width: '100%' }}
              >
                Submit — We&apos;ll Reach Out in 24h →
              </button>
              <p className="privacy-note">
                Your information is private and never sold. MedicBridges is a
                non-commercial academic prototype.
                <br />
                By registering you agree to our{' '}
                <Link
                  href="/privacy"
                  style={{ color: 'var(--color-green-600)' }}
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </form>
        ) : (
          <div className="success-screen" style={{ display: 'block' }}>
            <div className="success-icon">
              <svg
                width="36"
                height="36"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 28,
                fontWeight: 800,
                marginBottom: 12,
              }}
            >
              Thanks — you&apos;re on the list!
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'var(--color-gray-600)',
                maxWidth: 420,
                margin: '0 auto 32px',
                lineHeight: 1.7,
              }}
            >
              Our team will reach out within 24 hours to complete your listing
              and get your clinic live on MedicBridges.
            </p>
            <Link href="/for-clinics" className="btn btn-primary btn-lg">
              Learn more about partnering
            </Link>
          </div>
        )}
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
              MedicBridges
            </Link>
            <span style={{ fontSize: 13 }}>© 2026 MedicBridges — Miami, FL.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

