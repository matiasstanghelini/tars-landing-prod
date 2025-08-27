
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function CreacionTiendasPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Creación de Tiendas</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Creamos el contenido de tu tienda de forma sencilla.
        </p>
        <div className="prose max-w-none">
          <p>
            Nuestro servicio de creación de tiendas te permite configurar tu e-commerce 
            de manera rápida y eficiente. Nos encargamos de todo el proceso técnico 
            para que puedas enfocarte en tu negocio.
          </p>
        </div>
      </div>
    </div>
  );
}
