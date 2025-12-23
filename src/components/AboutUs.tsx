'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section
      id="quienes-somos"
      className="relative min-h-screen py-16 px-4 md:px-[5%] max-w-6xl mx-auto flex flex-col justify-start overflow-y-auto pt-24 md:pt-28 pb-8 md:pb-64"
    >
      {/* Main Content */}
      <div className="flex-shrink-0 mt-8 md:mt-12">
        <h2 className="text-3xl md:text-4xl text-[#0F766E] mb-6 text-center">
          {t.about.title}
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl mb-6 text-[#334155]">
            {t.about.para1}
          </p>
          <p className="text-lg md:text-xl text-[#334155]">
            {t.about.para2}
          </p>
        </div>
      </div>

      {/* Ford Card - Below text on mobile, bottom right on desktop */}
      <div className="mt-8 md:absolute md:bottom-8 md:right-4 lg:right-8 w-full md:w-auto max-w-lg md:max-w-2xl bg-white p-4 md:p-5 rounded-2xl shadow-xl border-2 border-[#0F766E]">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
          {/* Ford Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/ford.png"
              alt="Ford Philanthropy Challenge"
              width={96}
              height={96}
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
          </div>
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="text-base md:text-lg font-bold text-[#0F766E] mb-2">
              {t.ford.title}
            </div>
            <p
              className="text-xs md:text-sm text-[#334155]"
              dangerouslySetInnerHTML={{ __html: t.ford.text }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

