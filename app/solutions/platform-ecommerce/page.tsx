"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Items from "@/components/sections/items/default";
import { ShoppingBag, CreditCard, Package, Truck } from "lucide-react";

export default function PlataformaEcommercePage() {
  const { t } = useTranslation();

  const items = [
    {
      title: t('solutions.platform_ecommerce.items.store.title') || 'Plataforma E-commerce',
      description: t('solutions.platform_ecommerce.items.store.description') || 'Gestión completa de productos y categorías',
      icon: <ShoppingBag className="size-5 stroke-1" />
    },
    {
      title: t('solutions.platform_ecommerce.items.payments.title') || 'Pagos Seguros',
      description: t('solutions.platform_ecommerce.items.payments.description') || 'Múltiples métodos de pago disponibles para integrar',
      icon: <CreditCard className="size-5 stroke-1" />
    },
    {
      title: t('solutions.platform_ecommerce.items.inventory.title') || 'Gestión de Inventario',
      description: t('solutions.platform_ecommerce.items.inventory.description') || 'Control de stock en tiempo real',
      icon: <Package className="size-5 stroke-1" />
    },
    {
      title: t('solutions.platform_ecommerce.items.shipping.title') || 'Envíos',
      description: t('solutions.platform_ecommerce.items.shipping.description') || 'Integración con principales empresas de logística',
      icon: <Truck className="size-5 stroke-1" />
    }
    // Agrega más items según necesites
  ];

  return (
    <div className="min-h-screen">
      <div className="container">
        <Items title={t('solutions.platform_ecommerce.features_title') || 'Características de la Plataforma E-commerce'} items={items} />
      </div>
    </div>
  );
}
