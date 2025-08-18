
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function AIChatbotPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">AI Chatbots para E-commerce</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Solución para crear chatbots para e-commerce.
        </p>
        <div className="prose max-w-none">
          <p>
            Implementa chatbots inteligentes que mejoren la experiencia de tus clientes 
            y automaticen las ventas en tu tienda online.
          </p>
        </div>
      </div>
    </div>
  );
}
