'use client';

import { useState } from 'react';
import { Mail, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();
  const [showForm, setShowForm] = useState(false);

  // Google Form URL with embedded parameter
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfT2FpxHL6k0ijmawaJmSLG2M56J_M2zxPR7mKxZH0IQYUNvw/viewform?embedded=true';

  return (
    <>
      <section
        id="contacto"
        className="min-h-screen bg-[#D1FAE5] py-16 px-4 md:px-[5%] text-center text-[#334155] flex flex-col justify-center items-center pt-24 md:pt-28"
      >
        <h2 className="text-[#334155] text-3xl md:text-4xl mb-6">{t.cta.title}</h2>
        <div className="text-lg md:text-xl mb-8 max-w-2xl mx-auto px-4 text-[#334155] space-y-2">
          {t.cta.subtext.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="px-8 md:px-12 py-3 md:py-4 bg-[#0F766E] text-white border-none rounded-full text-lg md:text-xl font-semibold cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-[#0d5d57]"
        >
          {t.cta.button}
        </button>

        {/* Contact Information */}
        <div className="mt-12 max-w-2xl mx-auto">
          <p className="text-base md:text-lg mb-6 text-[#334155]">
            {t.cta.contactMessage}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-base text-[#334155]">
            <a
              href="mailto:info@medicbridges.org"
              className="flex items-center gap-2 hover:text-[#0F766E] transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@medicbridges.org
            </a>
            <a
              href="https://www.medicbridges.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#0F766E] transition-colors"
            >
            </a>
          </div>
        </div>
      </section>

      {/* Modal with Google Form */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 z-[2000] flex items-center justify-center p-4"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors bg-white shadow-md"
              aria-label="Close form"
            >
              <X className="w-6 h-6 text-[#334155]" />
            </button>

            {/* Google Form Iframe */}
            <div className="w-full h-[90vh] overflow-auto">
              <iframe
                src={GOOGLE_FORM_URL}
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="min-h-[800px]"
                title="Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

