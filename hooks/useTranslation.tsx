"use client";

import { useState, useEffect, useCallback } from "react";

type TranslationKeys = {
  [key: string]: string | TranslationKeys;
};

export function useTranslation() {
  const [translations, setTranslations] = useState<TranslationKeys>({});
  const [isLoading, setIsLoading] = useState(true);
  const [locale, setLocale] = useState('es');

  useEffect(() => {
    // Get locale from localStorage or default to 'es'
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') || 'es';
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        // Import translations directly instead of fetching
        let translationsData;
        if (locale === 'en') {
          translationsData = await import('@/locales/en/common.json');
        } else {
          translationsData = await import('@/locales/es/common.json');
        }
        setTranslations(translationsData.default || translationsData);
      } catch (error) {
        console.error('Error loading translations:', error);
        setTranslations({});
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [locale]);

  const t = useCallback((key: string): string => {
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
  }, [translations]);

  const changeLanguage = useCallback((newLocale: string) => {
    setLocale(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
    // Force re-render instead of reload
    window.location.reload();
  }, []);

  return {
    t,
    locale,
    isLoading,
    changeLanguage,
  };
}