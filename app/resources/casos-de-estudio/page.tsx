
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function CasosDeEstudioPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('resources.case_studies')}</h1>
      <p className="text-lg text-muted-foreground">Historias de éxito y casos prácticos.</p>
    </div>
  );
}
