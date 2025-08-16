
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('resources.blog')}</h1>
      <p className="text-lg text-muted-foreground">Artículos y novedades del sector.</p>
    </div>
  );
}
