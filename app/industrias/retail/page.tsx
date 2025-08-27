
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function RetailPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('industries.retail')}</h1>
      <p className="text-lg text-muted-foreground">Soluciones especializadas para el sector retail.</p>
    </div>
  );
}
