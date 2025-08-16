
"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type TranslationKeys = {
  [key: string]: string | TranslationKeys;
};

export function useTranslation() {
  const router = useRouter();
  const [translations, setTranslations] = useState<TranslationKeys>({});
  const [isLoading, setIsLoading] = useState(true);

  const locale = router.locale || 'es';

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setIsLoading(true);
        const response = await import(`../locales/${locale}/common.json`);
        setTranslations(response.default);
      } catch (error) {
        console.error(`Failed to load translations for locale: ${locale}`, error);
        // Fallback to Spanish if translation fails
        if (locale !== 'es') {
          const fallback = await import(`../locales/es/common.json`);
          setTranslations(fallback.default);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [locale]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const changeLanguage = (newLocale: string) => {
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return {
    t,
    locale,
    changeLanguage,
    isLoading
  };
}
