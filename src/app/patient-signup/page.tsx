'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PatientSignupPage() {
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
              background: 'rgba(255,255,255,0.15)',
              color: 'var(--green-100)',
              margin: '0 auto 16px',
            }}
          >
            Free — Always
          </div>
          <h1>Create Your Patient Profile</h1>
          <p>
            Tell us a little about yourself and we&apos;ll match you with the
            right clinic, pharmacy, or therapist in Miami.
          </p>
        </div>
      </div>

      <div className="register-body">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-section-title">Personal Information</div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Maria"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Garcia"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="(305) 000-0000"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="zip">ZIP Code *</label>
                <input
                  type="text"
                  id="zip"
                  placeholder="e.g. 33125"
                  maxLength={5}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" />
              </div>
            </div>

            <div className="form-section-title">Insurance Status</div>
            <div className="form-group">
              <label htmlFor="insurance">
                What is your insurance situation? *
              </label>
              <select id="insurance" required>
                <option value="">Select one...</option>
                <option value="uninsured">I have no insurance</option>
                <option value="medicaid">I have Medicaid</option>
                <option value="medicare">I have Medicare</option>
                <option value="marketplace">
                  I have Marketplace / ACA insurance
                </option>
                <option value="underinsured">
                  I have insurance but can&apos;t afford copays
                </option>
                <option value="unsure">I&apos;m not sure</option>
              </select>
            </div>

            <div className="form-section-title">Care You Need</div>
            <div className="form-group">
              <label>Select all that apply:</label>
              <div className="checkbox-group">
                {[
                  ['primary', 'Primary Care'],
                  ['dental', 'Dental'],
                  ['mental-health', 'Mental Health / Therapy'],
                  ['pharmacy', 'Medications / Pharmacy'],
                  ['womens', "Women\u2019s Health"],
                  ['pediatrics', 'Pediatrics / Children'],
                  ['vision', 'Vision'],
                  ['chronic', 'Chronic Condition'],
                ].map(([value, label]) => (
                  <label key={value} className="checkbox-item">
                    <input type="checkbox" name="care" value={value} />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group" style={{ marginTop: 8 }}>
              <label htmlFor="urgency">
                How urgent is your care need?
              </label>
              <select id="urgency" defaultValue="month">
                <option value="today">I need care today</option>
                <option value="week">Within this week</option>
                <option value="month">Within a month</option>
                <option value="nourgency">No specific urgency</option>
              </select>
            </div>

            <div className="form-section-title">Language Preference</div>
            <div className="form-group">
              <label>Select your preferred language(s):</label>
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="lang"
                    value="english"
                    defaultChecked
                  />
                  English
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="lang" value="spanish" />
                  Spanish / Espanol
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="lang" value="creole" />
                  Haitian Creole
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="lang" value="portuguese" />
                  Portuguese
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="lang" value="other" />
                  Other
                </label>
              </div>
            </div>

            <div className="form-section-title">Notifications</div>
            <div className="form-group">
              <label>How would you like to receive clinic updates?</label>
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="notify"
                    value="email"
                    defaultChecked
                  />
                  Email
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="notify" value="sms" />
                  Text message (SMS)
                </label>
              </div>
            </div>

            <div className="submit-area">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ justifyContent: 'center', width: '100%' }}
              >
                Create My Profile — Find Care Now
              </button>
              <p className="privacy-note">
                Your information is private and never sold. MediBridge is free
                for patients, always.
                <br />
                By registering you agree to our{' '}
                <Link
                  href="/privacy"
                  style={{ color: 'var(--green-600)' }}
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <p
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  color: 'var(--gray-500)',
                }}
              >
                Are you a clinic?{' '}
                <Link
                  href="/clinic-signup"
                  style={{
                    color: 'var(--green-600)',
                    fontWeight: 600,
                  }}
                >
                  Register your clinic here
                </Link>
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
              You&apos;re registered!
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'var(--gray-600)',
                maxWidth: 420,
                margin: '0 auto 32px',
                lineHeight: 1.7,
              }}
            >
              We&apos;ll match you with the best clinics for your needs in
              Miami. Check your email for your personalized matches.
            </p>
            <Link href="/search" className="btn btn-primary btn-lg">
              Find Care Now
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
              MediBridge
            </Link>
            <span style={{ fontSize: 13 }}>Free for patients, always.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

