
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function SolutionsPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('solutions.title')}</h1>
      <p className="text-lg text-muted-foreground">{t('solutions.description')}</p>
    </div>
  );
}
