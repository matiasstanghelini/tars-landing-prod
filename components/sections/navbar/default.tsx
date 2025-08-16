"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";
import TarsLogo from "../../logos/tarsLogo";
import { Button, type ButtonProps } from "../../ui/button";
import Navigation from "../../ui/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import LanguageSelector from "@/components/language-selector/LanguageSelector"; // Assuming LanguageSelector is in this path

import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "900",
});

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
  logo = <TarsLogo />,
  name = "TARS",
  homeUrl = "/",
  mobileLinks,
  actions,
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  const { t } = useTranslation(); // Assuming useTranslation is imported and available

  // Use translations for mobile links if not provided
  const defaultMobileLinks = [
    { text: t('navbar.solutions'), href: "/solutions" },
    { text: t('navbar.industries'), href: "/industrias" },
    { text: t('navbar.resources'), href: "/resources" },
    { text: t('navbar.blog'), href: "/resources/blog" },
    { text: t('navbar.case_studies'), href: "/resources/casos-de-estudio" },
    { text: t('navbar.about_us'), href: "/resources/sobre-nosotros" },
  ];

  const defaultActions = [
    {
      text: t('navbar.contact'),
      href: "/contacto",
      isButton: true,
      variant: "default" as const,
    },
  ];

  const finalMobileLinks = mobileLinks || defaultMobileLinks;
  const finalActions = actions || defaultActions;

  return (
    <header className={cn("sticky top-0 z-50 -mb-4 px-4 pb-4", className)}>
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            {homeUrl.startsWith("/") ? (
              <Link href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
                {logo}
                <span className={outfit.className}>{name}</span>
              </Link>
            ) : (
              <a href={homeUrl} className="flex items-center gap-1 text-xl">
                {logo}
                <span className={outfit.className}>{name}</span>
              </a>
            )}
            {showNavigation && (
              <div className="ml-8">
                {customNavigation || <Navigation />}
              </div>
            )}
          </NavbarLeft>
          <NavbarRight>
            <Navigation />
            <LanguageSelector />
            <ThemeToggle />
            <div className="flex items-center gap-2">
              {finalActions.map((action, index) => {
                if (action.isButton) {
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Button
                        variant={action.variant || "default"}
                        asChild
                      >
                        {action.href.startsWith("/") ? (
                          <Link href={action.href}>
                            {action.icon}
                            {action.text}
                            {action.iconRight}
                          </Link>
                        ) : (
                          <a href={action.href}>
                            {action.icon}
                            {action.text}
                            {action.iconRight}
                          </a>
                        )}
                      </Button>
                    </div>
                  );
                } else {
                  return action.href.startsWith("/") ? (
                    <Link
                      key={index}
                      href={action.href}
                      className="hidden text-sm md:block"
                    >
                      {action.text}
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={action.href}
                      className="hidden text-sm md:block"
                    >
                      {action.text}
                    </a>
                  );
                }
              })}
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  {homeUrl.startsWith("/") ? (
                    <Link href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
                      <span>{name}</span>
                    </Link>
                  ) : (
                    <a href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
                      <span>{name}</span>
                    </a>
                  )}
                  {finalMobileLinks.map((link, index) => (
                    link.href.startsWith("/") ? (
                      <Link
                        key={index}
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {link.text}
                      </Link>
                    ) : (
                      <a
                        key={index}
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {link.text}
                      </a>
                    )
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}