'use client';

import { useState } from 'react';
import { Users, Globe, Shield, FileText, Target, Handshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const missionItems = [
  { Icon: Users, key: 'card1' as const },
  { Icon: Globe, key: 'card2' as const },
  { Icon: Shield, key: 'card3' as const },
  { Icon: FileText, key: 'card4' as const },
  { Icon: Target, key: 'card5' as const },
  { Icon: Handshake, key: 'card6' as const },
];

export default function Mission() {
  const { t } = useLanguage();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setExpandedItem(expandedItem === key ? null : key);
  };

  return (
    <section
      id="mision"
      className="min-h-screen py-8 px-4 md:px-[5%] max-w-4xl mx-auto flex flex-col justify-center overflow-y-auto pt-20 md:pt-24 bg-[#F8FAFC]"
    >
      <h2 className="text-2xl md:text-3xl text-[#0F766E] mb-3 text-center flex-shrink-0">
        {t.mission.title}
      </h2>
      <div className="bg-[#D1FAE5] p-3 md:p-4 border-l-4 border-[#0F766E] rounded-lg my-3 italic text-sm md:text-base flex-shrink-0 text-[#334155]">
        {t.mission.quote}
      </div>

      <div className="w-full mt-4 flex-shrink-0 space-y-1">
        {missionItems.map((item) => {
          const isExpanded = expandedItem === item.key;
          return (
            <div
              key={item.key}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleItem(item.key)}
                className="w-full p-2 md:p-3 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors focus:outline-none"
                aria-expanded={isExpanded}
                aria-controls={`content-${item.key}`}
              >
                <div className="flex items-center gap-2 md:gap-3 flex-1 text-left">
                  <item.Icon className="w-6 h-6 md:w-8 md:h-8 text-[#0F766E] flex-shrink-0" />
                  <h4 className="text-[#0F766E] text-sm md:text-base font-semibold">
                    {t.mission[item.key].title}
                  </h4>
                </div>
                <div className="flex-shrink-0 ml-2">
                  <span
                    className={`text-[#0F766E] text-lg font-bold transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </div>
              </button>

              {/* Accordion Content */}
              <div
                id={`content-${item.key}`}
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-3 md:px-4 pb-3 md:pb-4 pt-0">
                  <p className="text-[#334155] text-sm md:text-base leading-relaxed">
                    {t.mission[item.key].text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

