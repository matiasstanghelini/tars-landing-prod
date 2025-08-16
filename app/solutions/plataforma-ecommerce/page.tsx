
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function PlataformaEcommercePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('solutions.ecommerce_platform')}</h1>
      <p className="text-lg text-muted-foreground">Solución integral para crear y gestionar tu tienda online.</p>
    </div>
  );
}
