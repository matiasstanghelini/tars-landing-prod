
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function DocumentacionPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">
          {t('resources.documentation')}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t('resources.documentation_subtitle')}
        </p>
        <div className="prose max-w-none">
          <h2>{t('resources.available_guides')}</h2>
          <ul>
            {(t('resources.guides') as unknown as string[]).map((guide: string, index: number) => (
              <li key={index}>{guide}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
