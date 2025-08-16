
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function GestorDeContenidosPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('solutions.content_manager')}</h1>
      <p className="text-lg text-muted-foreground">Gestiona el contenido de tu tienda de forma sencilla y eficiente.</p>
    </div>
  );
}
