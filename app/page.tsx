"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">{t('home.title')}</h1>
      <p className="text-lg text-muted-foreground">
        {t('home.subtitle')}
      </p>
    </div>
  );
}
