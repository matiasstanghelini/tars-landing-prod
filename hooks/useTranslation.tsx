
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
    const savedLocale = typeof window !== 'undefined' 
      ? localStorage.getItem('locale') || 'es' 
      : 'es';
    setLocale(savedLocale);
  }, []);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/locales/${locale}/common.json`);
        if (response.ok) {
          const data = await response.json();
          setTranslations(data);
        }
      } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to Spanish if loading fails
        if (locale !== 'es') {
          try {
            const fallbackResponse = await fetch('/locales/es/common.json');
            if (fallbackResponse.ok) {
              const fallbackData = await fallbackResponse.json();
              setTranslations(fallbackData);
            }
          } catch (fallbackError) {
            console.error('Error loading fallback translations:', fallbackError);
          }
        }
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
  }, []);

  return {
    t,
    locale,
    isLoading,
    changeLanguage,
  };
}
