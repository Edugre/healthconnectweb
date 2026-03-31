'use client';

import { HeartPulse, Scale, Lightbulb, Link2, DollarSign, Bot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const sdgItems = [
  { Icon: HeartPulse, key: 'sdg3' as const },
  { Icon: Scale, key: 'sdg10' as const },
];

const impactItems = [
  { Icon: Lightbulb, key: 'item1' as const },
  { Icon: Link2, key: 'item2' as const },
  { Icon: DollarSign, key: 'item3' as const },
  { Icon: Bot, key: 'item4' as const },
];

export default function Impact() {
  const { t } = useLanguage();

  return (
    <section
      id="impacto"
      className="min-h-screen py-8 px-4 md:px-[5%] max-w-6xl mx-auto flex flex-col justify-center overflow-y-auto pt-20 md:pt-24"
    >
      <h2 className="text-2xl md:text-3xl text-[#0F766E] mb-3 text-center flex-shrink-0">
        {t.impact.title}
      </h2>

      <h3 className="text-lg md:text-xl text-[#0F766E] my-3 flex-shrink-0">
        {t.impact.sdg.title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 flex-shrink-0">
        {sdgItems.map((item) => (
          <div
            key={item.key}
            className="flex items-start gap-3 p-3 md:p-4 bg-white rounded-none shadow-md"
          >
            <item.Icon className="w-6 h-6 md:w-8 md:h-8 text-[#0F766E] flex-shrink-0" />
            <div>
              <strong className="text-sm md:text-base block mb-1 text-[#334155]">{t.impact.sdg[item.key].title}</strong>
              <p className="text-xs md:text-sm text-[#334155]">{t.impact.sdg[item.key].text}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg md:text-xl text-[#0F766E] mt-6 mb-3 flex-shrink-0">
        {t.impact.how.title}
      </h3>
      <div className="bg-white p-4 md:p-6 rounded-none shadow-lg mb-4 flex-shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          {impactItems.map((item) => (
            <div
              key={item.key}
              className="flex items-start gap-3 p-3 md:p-4 bg-white rounded-none shadow-sm"
            >
              <item.Icon className="w-6 h-6 md:w-8 md:h-8 text-[#0F766E] flex-shrink-0" />
              <div>
                <strong className="text-sm md:text-base block mb-1 text-[#334155]">{t.impact.how[item.key].title}</strong>
                <p className="text-xs md:text-sm text-[#334155]">{t.impact.how[item.key].text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

