
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function BienesDeConsumoPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('industries.consumer_goods')}</h1>
      <p className="text-lg text-muted-foreground">Gestión especializada para empresas de bienes de consumo.</p>
    </div>
  );
}
