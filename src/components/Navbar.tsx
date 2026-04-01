'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#D1FAE5] px-[5%] py-4 flex flex-col md:flex-row justify-between items-center shadow-lg z-[1000] gap-4">
      <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-[#334155]">
        <span>MedicBridges</span>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-center">
        {isHomePage ? (
          <>
            <a
              href="#quienes-somos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('quienes-somos');
              }}
              className="text-[#334155] no-underline font-semibold transition-opacity hover:opacity-80 text-sm md:text-base"
            >
              {t.nav.about}
            </a>
            <a
              href="#mision"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('mision');
              }}
              className="text-[#334155] no-underline font-semibold transition-opacity hover:opacity-80 text-sm md:text-base"
            >
              {t.nav.mission}
            </a>
            <a
              href="#impacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('impacto');
              }}
              className="text-[#334155] no-underline font-semibold transition-opacity hover:opacity-80 text-sm md:text-base"
            >
              {t.nav.impact}
            </a>
            <Link
              href="/historias"
              className="text-[#334155] no-underline font-semibold transition-opacity hover:opacity-80 text-sm md:text-base"
            >
              {t.nav.stories}
            </Link>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contacto');
              }}
              className="text-[#334155] no-underline font-semibold transition-opacity hover:opacity-80 text-sm md:text-base"
            >
              {t.nav.contact}
            </a>
          </>
        ) : (
          <Link
            href="/"
            className="text-[#334155] no-underline font-semibold transition-opacity hover:opacity-80 text-sm md:text-base"
          >
            {t.nav.home}
          </Link>
        )}
        <div className="flex gap-2 items-center bg-white/20 px-2 py-1 rounded-none cursor-pointer transition-colors hover:bg-white/30">
          <button
            onClick={() => setLanguage('es')}
            className={`bg-transparent border-none cursor-pointer p-1 rounded-none transition-all hover:scale-110 ${
              language === 'es' ? 'ring-2 ring-[#0F766E] ring-offset-2' : 'opacity-60 hover:opacity-100'
            }`}
            aria-label="Español"
            title="Español"
          >
            <Image
              src="/es.png"
              alt="Español"
              width={24}
              height={24}
              className="w-6 h-6 rounded-none object-cover"
            />
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`bg-transparent border-none cursor-pointer p-1 rounded-none transition-all hover:scale-110 ${
              language === 'en' ? 'ring-2 ring-[#0F766E] ring-offset-2' : 'opacity-60 hover:opacity-100'
            }`}
            aria-label="English"
            title="English"
          >
            <Image
              src="/us.png"
              alt="English"
              width={24}
              height={24}
              className="w-6 h-6 rounded-none object-cover"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

