
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function SobreNosotrosPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('resources.about_us')}</h1>
      <p className="text-lg text-muted-foreground">Conoce más sobre nuestra empresa y equipo.</p>
    </div>
  );
}
