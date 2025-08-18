
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function DemoPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">{t('navbar.demo')}</h1>
      <p className="text-lg text-muted-foreground">Prueba nuestras soluciones en acción.</p>
    </div>
  );
}
