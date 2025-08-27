"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import TarsLogo from "../logos/tarsLogo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
  category: string; // categoría para filtrar
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  category?: string; // categoría que se usará para filtrar
  content?: ReactNode | string;
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
    { title: "Introducción", content: "default" },
    { title: "Soluciones", category: "solutions" },
    { title: "Industrias", category: "industries" },
    { title: "Recursos", category: "resources" },
  ],
  components = [
    // Soluciones
    { title: "Plataforma E-commerce", href: "/solutions/platforma-ecommerce", description: "Solución integral para crear y gestionar tu tienda online.", category: "solutions" },
    { title: "Creación de Tiendas", href: "/solutions/creacion-de-tiendas", description: "Creamos el contenido de tu tienda de forma sencilla.", category: "solutions" },
    { title: "Analíticas", href: "/solutions/analiticas", description: "Obtén reportes y métricas avanzadas de tu negocio.", category: "solutions" },
    { title: "MVP de E-commerce", href: "/solutions/mvp-ecommerce", description: "Solución para crear un MVP de e-commerce en el menor tiempo posible.", category: "solutions" },
    { title: "AI Chatbots para E-commerce", href: "/solutions/ai-chatbot", description: "Solución para crear chatbots para e-commerce.", category: "solutions" },
    // Industrias
    { title: "Retail", href: "/industrias/retail", description: "Soluciones para el sector retail.", category: "industries" },
    { title: "Moda", href: "/industrias/moda", description: "E-commerce especializado en moda.", category: "industries" },
    { title: "Bienes de Consumo", href: "/industrias/bienes-de-consumo", description: "Gestión para empresas de bienes de consumo.", category: "industries" },
    { title: "Manufactura", href: "/industrias/manufactura", description: "Soluciones para el sector manufacturero.", category: "industries" },
    // Recursos
    { title: "Blog", href: "/resources/blog", description: "Artículos y novedades del sector.", category: "resources" },
    { title: "Casos de Estudio", href: "/resources/casos-de-estudio", description: "Historias de éxito y casos prácticos.", category: "resources" },
    { title: "Documentación", href: "/resources/documentacion", description: "Guías de uso y documentación técnica.", category: "resources" },
    { title: "Sobre Nosotros", href: "/resources/sobre-nosotros", description: "Conoce más sobre nosotros.", category: "resources" },
  ],
  logo = <TarsLogo />,
  logoTitle = "TARS",
  logoDescription = "Soluciones de ecommerce para potenciar tu negocio, proveemos soluciones personalizadas para cada cliente, tanto para grandes empresas como para pequeños emprendedores.",
  logoHref = "/",
  introItems = [
    { title: "Plataforma E-commerce", href: "/solutions/platforma-ecommerce", description: "Solución integral para crear y gestionar tu tienda online." },
    { title: "Creación de Tiendas", href: "/solutions/creacion-de-tiendas", description: "Creamos el contenido de tu tienda de forma sencilla." },
    { title: "Analíticas", href: "/solutions/analiticas", description: "Obtén reportes y métricas avanzadas de tu negocio." },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item, index) => {
          // Si el item es para la sección de "Introducción"
          if (item.content === "default") {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
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
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {introItems.map((intro, i) => (
                      <ListItem key={i} href={intro.href} title={intro.title}>
                        {intro.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          // Para otros elementos que tienen categoría, mostrar los items filtrados
          const filteredItems = components.filter(comp => comp.category === item.category);

          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {filteredItems.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href || "#"}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});