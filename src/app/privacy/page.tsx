'use client';

import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      {/* HERO */}
      <div className="policy-hero">
        <div className="container">
          <div
            className="policy-meta"
            style={{ marginBottom: 14 }}
          >
            <span>
              Florida International University — Student Research Project
            </span>
          </div>
          <h1>Privacy Policy &amp; Terms of Use</h1>
          <div className="policy-meta">
            <span>MedicBridges</span>
            <span>Last updated: March 2026</span>
            <span>
              Non-commercial. Non-profit. Educational purposes only.
            </span>
          </div>
        </div>
      </div>

      <div className="policy-body">
        {/* SUMMARY BOX */}
        <div className="policy-summary-box">
          <h3>Summary</h3>
          <p>
            We are FIU students building this platform to help people find
            medical care. We collect only what is necessary, never sell your
            data, and you are here because you choose to be — not because anyone
            required you. This platform is a non-commercial academic prototype
            and is not a substitute for professional medical advice.
          </p>
        </div>

        {/* TABLE OF CONTENTS */}
        <div className="toc">
          <h3>Table of Contents</h3>
          <ol>
            <li>
              <a href="#sec1">Who We Are</a>
            </li>
            <li>
              <a href="#sec2">Purpose of the Platform</a>
            </li>
            <li>
              <a href="#sec3">Voluntary Use</a>
            </li>
            <li>
              <a href="#sec4">Data We Collect</a>
            </li>
            <li>
              <a href="#sec5">How We Use Your Data</a>
            </li>
            <li>
              <a href="#sec6">Data Storage &amp; Security</a>
            </li>
            <li>
              <a href="#sec7">Your Rights</a>
            </li>
            <li>
              <a href="#sec8">Medical Disclaimer</a>
            </li>
            <li>
              <a href="#sec9">No Liability</a>
            </li>
            <li>
              <a href="#sec10">Third Party Services</a>
            </li>
            <li>
              <a href="#sec11">Changes to This Policy</a>
            </li>
            <li>
              <a href="#sec12">Contact</a>
            </li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div className="policy-section" id="sec1">
          <h2>1. Who We Are</h2>
          <p>
            This platform was developed by students at{' '}
            <strong>Florida International University (FIU)</strong> as part of
            an academic research project. This project is{' '}
            <strong>
              non-commercial, non-profit, and intended solely for educational
              and research purposes.
            </strong>
          </p>
          <p>
            We are not a medical provider, insurance company, or healthcare
            business. This platform does not offer, facilitate, or replace
            professional healthcare services.
          </p>
        </div>

        {/* SECTION 2 */}
        <div className="policy-section" id="sec2">
          <h2>2. Purpose of the Platform</h2>
          <p>This platform exists to:</p>
          <ul>
            <li>Connect patients with medical clinics for informational purposes</li>
            <li>
              Support academic research on healthcare access and patient-clinic
              connectivity
            </li>
            <li>
              Provide a prototype tool as part of a university research
              initiative
            </li>
          </ul>
          <div className="callout">
            This is not a substitute for professional medical advice, diagnosis,
            or treatment.
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="policy-section" id="sec3">
          <h2>3. Voluntary Use</h2>
          <p>
            <strong>Your use of this platform is 100% voluntary.</strong>
          </p>
          <ul>
            <li>
              No one is required or obligated to register, submit data, or use
              any feature of this platform
            </li>
            <li>
              You may stop using the platform at any time and request deletion
              of your data
            </li>
            <li>
              By creating an account, you acknowledge that you are doing so
              freely and of your own will
            </li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div className="policy-section" id="sec4">
          <h2>4. Data We Collect</h2>
          <p>Depending on your registration type, we may collect:</p>
          <div className="two-col">
            <div>
              <p>
                <strong>For Patients:</strong>
              </p>
              <ul>
                <li>First name and age range</li>
                <li>General location (ZIP code)</li>
                <li>Medical specialties of interest</li>
                <li>Insurance or payment preferences</li>
                <li>Language preference</li>
                <li>Availability preferences</li>
              </ul>
            </div>
            <div>
              <p>
                <strong>For Clinics:</strong>
              </p>
              <ul>
                <li>Clinic name and address</li>
                <li>Contact information</li>
                <li>Specialties and services offered</li>
                <li>Operating hours and pricing range</li>
                <li>Languages spoken</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: 16 }}>
            <strong>We do NOT collect:</strong>
          </p>
          <ul>
            <li>Social Security numbers</li>
            <li>Full medical records or history</li>
            <li>Payment or credit card information</li>
            <li>Government-issued identification</li>
          </ul>
        </div>

        {/* SECTION 5 */}
        <div className="policy-section" id="sec5">
          <h2>5. How We Use Your Data</h2>
          <p>
            Your data is used <strong>exclusively</strong> for:
          </p>
          <ul>
            <li>Matching patients with relevant clinics on the platform</li>
            <li>
              Academic research and analysis (in anonymized, aggregated form)
            </li>
            <li>Improving the platform&apos;s features and usability</li>
          </ul>
          <p>We will <strong>never:</strong></p>
          <ul>
            <li>Sell your data to third parties</li>
            <li>Use your data for advertising or marketing</li>
            <li>Share your personal information without your consent</li>
            <li>Use your data for any commercial purpose</li>
          </ul>
        </div>

        {/* SECTION 6 */}
        <div className="policy-section" id="sec6">
          <h2>6. Data Storage &amp; Security</h2>
          <ul>
            <li>All data is stored securely using encrypted databases</li>
            <li>
              Access is limited to the student research team and supervising
              faculty
            </li>
            <li>
              We follow best practices to protect your information, though no
              system is 100% secure
            </li>
          </ul>
          <div className="callout warning">
            This is a student prototype. Please do not submit sensitive personal
            medical information through this platform.
          </div>
        </div>

        {/* SECTION 7 */}
        <div className="policy-section" id="sec7">
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>
              <strong>Access</strong> — request a copy of your data at any time
            </li>
            <li>
              <strong>Correction</strong> — update or correct your information
            </li>
            <li>
              <strong>Deletion</strong> — request complete removal of your data
            </li>
            <li>
              <strong>Opt-out</strong> — stop using the platform at any time
              without consequences
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at:{' '}
            <strong>
              <a
                href="mailto:medibridge@fiu.edu"
                style={{ color: 'var(--color-green-700)' }}
              >
                medibridge@fiu.edu
              </a>
            </strong>
          </p>
        </div>

        {/* SECTION 8 */}
        <div className="policy-section" id="sec8">
          <h2>8. Medical Disclaimer</h2>
          <div className="callout warning">
            This platform does not provide medical advice. The information
            provided is for general informational purposes only. Always consult
            a qualified healthcare professional for medical decisions. We are
            not responsible for any medical decisions made based on information
            found on this platform.
          </div>
        </div>

        {/* SECTION 9 */}
        <div className="policy-section" id="sec9">
          <h2>9. No Liability</h2>
          <p>As a student research project:</p>
          <ul>
            <li>We provide this platform &quot;as is&quot; with no guarantees</li>
            <li>We are not liable for the accuracy of clinic listings</li>
            <li>
              We are not responsible for interactions between patients and
              clinics that occur outside this platform
            </li>
            <li>Use of this platform is at your own discretion</li>
          </ul>
        </div>

        {/* SECTION 10 */}
        <div className="policy-section" id="sec10">
          <h2>10. Third Party Services</h2>
          <p>This platform may use third-party tools such as:</p>
          <ul>
            <li>
              <strong>Google Maps</strong> — for location and direction features
            </li>
            <li>
              <strong>Firebase or equivalent</strong> — for secure data storage
            </li>
          </ul>
          <p>
            These services have their own privacy policies, which we encourage
            you to review independently.
          </p>
        </div>

        {/* SECTION 11 */}
        <div className="policy-section" id="sec11">
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this policy as the project evolves. Any changes will
            be posted on this page with an updated date. Continued use of the
            platform following any update implies acceptance of the revised
            policy.
          </p>
        </div>

        {/* SECTION 12 */}
        <div className="policy-section" id="sec12">
          <h2>12. Contact</h2>
          <p>
            This project is supervised by faculty at{' '}
            <strong>Florida International University.</strong>
          </p>
          <ul>
            <li>
              Email:{' '}
              <a
                href="mailto:medibridge@fiu.edu"
                style={{
                  color: 'var(--color-green-700)',
                  fontWeight: 600,
                }}
              >
                medibridge@fiu.edu
              </a>
            </li>
            <li>
              Institution: Florida International University, Miami, FL
            </li>
            <li>Project Period: 2025–2026</li>
          </ul>
        </div>

        {/* CLOSING STATEMENT */}
        <div
          style={{
            background: 'var(--color-gray-100)',
            border: '1px solid var(--color-gray-200)',
            borderRadius: 0,
            padding: '24px 28px',
            fontSize: 14,
            color: 'var(--color-gray-600)',
            lineHeight: 1.8,
            marginTop: 8,
          }}
        >
          By using this platform, you confirm that you have read and understood
          this policy, that your use is voluntary, and that you understand this
          is a student research project with no commercial intent.
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
              MedicBridges
            </Link>
            <span
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              Florida International University — Student Research Project,
              2025–2026
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

