'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/search', label: 'Find Care' },
  { href: '/map', label: 'Live Map' },
  { href: '/problem', label: 'The Problem' },
  { href: '/for-clinics', label: 'For Clinics' },
] as const;

export default function MedicBridgesNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isMapPage = pathname === '/map';
  const navInnerClass = isMapPage ? 'nav-inner nav-inner--fullwidth' : 'nav-inner';

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('nav-mobile-open');
    } else {
      document.body.classList.remove('nav-mobile-open');
    }
    return () => document.body.classList.remove('nav-mobile-open');
  }, [mobileOpen]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) setMobileOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav className={`nav ${isMapPage ? 'nav--map' : ''}`}>
        <div className={isMapPage ? 'nav-inner-wrap' : 'container'}>
          <div className={navInnerClass}>
            <Link href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
              <div className="nav-logo-icon">M</div>
              MedicBridges
            </Link>
            <ul className="nav-links">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={pathname === href ? 'active' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="nav-cta">
              <Link href="/patient-signup" className="btn btn-primary btn-sm">
                Register Free
              </Link>
            </div>
            <button
              type="button"
              className="nav-hamburger"
              aria-label="Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay + drawer */}
      <div
        className="nav-mobile-overlay"
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
      />
      <div className="nav-mobile-drawer" role="dialog" aria-label="Main menu">
        <div className="nav-mobile-drawer-inner">
          <ul className="nav-mobile-links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={pathname === href ? 'active' : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-mobile-cta">
            <Link
              href="/patient-signup"
              className="btn btn-primary btn-lg"
              onClick={() => setMobileOpen(false)}
            >
              Register Free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
