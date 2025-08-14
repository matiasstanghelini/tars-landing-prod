"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import TarsLogo from "@/components/logos/tarsLogo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  content?: ReactNode;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  introItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function Navigation({
  menuItems = [
    {
      title: "Introducción",
      content: "default",
    },
    {
      title: "Soluciones",
      content: "components",
    },
    {
      title: "Recursos",
      content: "components",
    },
    {
      title: "Sobre Nosotros",
      isLink: true,
      href: "/sobre-nosotros",
    },
    {
      title: "Documentation",
      isLink: true,
      href: "https://www.launchuicomponents.com/",
    },
  ],
  components = [
    // Soluciones
    {
      title: "Plataforma E-commerce",
      href: "/soluciones/plataforma-ecommerce",
      description: "Solución integral para crear y gestionar tu tienda online."
    },
    {
      title: "Marketplace",
      href: "/soluciones/marketplace",
      description: "Crea tu propio marketplace y conecta múltiples vendedores."
    },
    {
      title: "Gestor de Contenidos",
      href: "/soluciones/gestor-de-contenidos",
      description: "Administra el contenido de tu tienda de forma sencilla."
    },
    {
      title: "Analíticas",
      href: "/soluciones/analiticas",
      description: "Obtén reportes y métricas avanzadas de tu negocio."
    },
    // Industrias
    {
      title: "Retail",
      href: "/industrias/retail",
      description: "Soluciones para el sector retail."
    },
    {
      title: "Moda",
      href: "/industrias/moda",
      description: "E-commerce especializado en moda."
    },
    {
      title: "Bienes de Consumo",
      href: "/industrias/bienes-de-consumo",
      description: "Gestión para empresas de bienes de consumo."
    },
    {
      title: "Manufactura",
      href: "/industrias/manufactura",
      description: "Soluciones para el sector manufacturero."
    },
    // Recursos agrupados
    {
      title: "Recursos",
      href: "/recursos",
      description: "Accede a blog, casos de estudio y documentación."
    },
    // Otros
    {
      title: "Sobre Nosotros",
      href: "/sobre-nosotros",
      description: "Conoce más sobre nuestro equipo y misión."
    },
    {
      title: "Contacto",
      href: "/contacto",
      description: "Contáctanos para más información."
    },
    {
      title: "Demo",
      href: "/demo",
      description: "Solicita una demostración personalizada."
    },
  ],
  logo = <TarsLogo />,
  logoTitle = "TARS",
  logoDescription = "Soluciones de ecommerce para potenciar tu negocio, proveemos soluciones personalizadas para cada cliente, tanto para grandes empresas como para pequeños emprendedores.",
  logoHref = "https://www.launchuicomponents.com/",
  introItems = [
   {
      title: "Plataforma E-commerce",
      href: "/soluciones/plataforma-ecommerce",
      description: "Solución integral para crear y gestionar tu tienda online."
    },
     {
      title: "Contenido",
      href: "/soluciones/gestor-de-contenidos",
      description: "Administra el contenido de tu tienda de forma sencilla."
    },
    {
      title: "Analíticas",
      href: "/soluciones/analiticas",
      description: "Obtén reportes y métricas avanzadas de tu negocio."
    },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isLink ? (
              <Link href={item.href || ""} className={navigationMenuTriggerStyle()}>
                {item.title}
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.content === "default" ? (
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                            href={logoHref}
                          >
                            {logo}
                            <div className="mt-4 mb-2 text-lg font-medium">
                              {logoTitle}
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              {logoDescription}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {introItems.map((intro, i) => (
                        <ListItem key={i} href={intro.href} title={intro.title}>
                          {intro.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.content === "components" ? (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : (
                    item.content
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"a"> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          data-slot="list-item"
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
