
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function ContactoPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">{t('navbar.contact')}</h1>
      <p className="text-lg text-muted-foreground">Ponte en contacto con nuestro equipo.</p>
    </div>
  );
}
