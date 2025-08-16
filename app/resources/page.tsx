"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function ResourcesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('resources.title')}</h1>
      <p className="text-lg text-muted-foreground">{t('resources.description')}</p>
    </div>
  );
}