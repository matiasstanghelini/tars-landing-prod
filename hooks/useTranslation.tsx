
"use client";

import { useState, useEffect, useCallback } from "react";

type TranslationKeys = {
  [key: string]: string | TranslationKeys;
};

// Pre-load translations to avoid async loading delays
const translations: Record<string, TranslationKeys> = {};

// Load Spanish translations
import esTranslations from '@/locales/es/common.json';
translations['es'] = esTranslations;

// Load English translations
import enTranslations from '@/locales/en/common.json';
translations['en'] = enTranslations;

export function useTranslation() {
  const [locale, setLocale] = useState('es');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Get locale from localStorage or default to 'es'
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') || 'es';
      setLocale(savedLocale);
    }
  }, []);

  const t = useCallback((key: string): string => {
    const currentTranslations = translations[locale] || translations['es'];
    const keys = key.split('.');
    let value: any = currentTranslations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  }, [locale]);

  const changeLanguage = useCallback((newLocale: string) => {
    setIsLoading(true);
    setLocale(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
    // Small delay to show the change is happening, then remove loading
    setTimeout(() => setIsLoading(false), 100);
  }, []);

  return {
    t,
    locale,
    isLoading,
    changeLanguage,
  };
}
