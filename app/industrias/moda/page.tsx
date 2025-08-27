
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function ModaPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('industries.fashion')}</h1>
      <p className="text-lg text-muted-foreground">E-commerce especializado para el sector de la moda.</p>
    </div>
  );
}
