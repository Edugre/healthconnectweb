'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PageTitle() {
  const { t } = useLanguage();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.title = t.pageTitle;
    }
  }, [t.pageTitle]);

  return null;
}

