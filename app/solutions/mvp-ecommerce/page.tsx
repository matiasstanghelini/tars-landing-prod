
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function MVPEcommercePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">MVP de E-commerce</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Solución para crear un MVP de e-commerce en el menor tiempo posible.
        </p>
        <div className="prose max-w-none">
          <p>
            Desarrolla tu producto mínimo viable de e-commerce de forma rápida y eficiente. 
            Perfecto para validar tu idea de negocio en el mercado.
          </p>
        </div>
      </div>
    </div>
  );
}
