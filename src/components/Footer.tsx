'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#334155] text-white text-center py-8 relative">
      <p>{t.footer.text}</p>
      <p className="mt-4">{t.footer.ford}</p>
    </footer>
  );
}

