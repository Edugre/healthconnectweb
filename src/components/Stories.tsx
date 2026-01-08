'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Stories() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] pt-32 pb-20 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0F766E] mb-6 text-center">
          {t.stories.title}
        </h1>
        <p className="text-xl md:text-2xl text-[#334155] mb-12 text-center font-medium">
          {t.stories.subtitle}
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
          <p className="text-lg text-[#475569] leading-relaxed text-center">
            {t.stories.placeholder}
          </p>
        </div>
      </div>
    </section>
  );
}
