'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white px-[5%] pt-20 md:pt-24 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 drop-shadow-lg">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md">
          {t.hero.subtitle}
        </p>
        <Link
          href="/historias"
          className="inline-block px-8 md:px-12 py-3 md:py-4 bg-gradient-to-br from-[#25a063] to-[#0f4028] text-white no-underline rounded-none text-lg md:text-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-2xl hover:from-[#3dc47d] hover:to-[#155234] drop-shadow-lg"
        >
          {t.hero.storiesButton}
        </Link>
      </div>
    </section>
  );
}

