"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function IndustriasPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('industries.title')}</h1>
      <p className="text-lg text-muted-foreground">{t('industries.description')}</p>
    </div>
  );
}