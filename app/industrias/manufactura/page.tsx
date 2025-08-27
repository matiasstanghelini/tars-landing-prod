
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function ManufacturaPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('industries.manufacturing')}</h1>
      <p className="text-lg text-muted-foreground">Soluciones tecnológicas para el sector manufacturero.</p>
    </div>
  );
}
