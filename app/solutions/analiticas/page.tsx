
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function AnaliticasPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('solutions.analytics')}</h1>
      <p className="text-lg text-muted-foreground">Obtén reportes y métricas avanzadas de tu negocio.</p>
    </div>
  );
}
