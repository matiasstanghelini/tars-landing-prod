
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function DocumentacionPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Documentación</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Guías de uso y documentación técnica.
        </p>
        <div className="prose max-w-none">
          <h2>Guías Disponibles</h2>
          <ul>
            <li>Configuración inicial de la plataforma</li>
            <li>Gestión de productos</li>
            <li>Configuración de pagos</li>
            <li>Personalización del diseño</li>
            <li>API y integraciones</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
