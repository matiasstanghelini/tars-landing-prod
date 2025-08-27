
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function MarketplacePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('solutions.marketplace')}</h1>
      <p className="text-lg text-muted-foreground">Crea tu propio marketplace y conecta vendedores con compradores.</p>
    </div>
  );
}
