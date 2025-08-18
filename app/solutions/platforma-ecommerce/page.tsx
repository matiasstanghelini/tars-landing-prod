
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function PlataformaEcommercePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Plataforma E-commerce</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Solución integral para crear y gestionar tu tienda online.
        </p>
        <div className="prose max-w-none">
          <p>
            Nuestra plataforma de e-commerce te permite crear y gestionar tu tienda online 
            de manera completa. Incluye todas las herramientas necesarias para vender 
            productos en línea de forma eficiente.
          </p>
        </div>
      </div>
    </div>
  );
}
