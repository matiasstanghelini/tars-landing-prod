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
import LanguageSelector from "@/components/ui/language-selector";
import { useTranslation } from "@/hooks/useTranslation";

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
  showContactInMobile?: boolean;
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
  showContactInMobile = false,
}: NavbarProps) {
  const { t } = useTranslation();

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

  // Add contact link to mobile if enabled
  const mobileLinksWithContact = showContactInMobile
    ? [...finalMobileLinks, { text: t('navbar.contact'), href: "/contacto" }]
    : finalMobileLinks;

  return (
    <header className={cn("sticky top-0 z-50 -mb-4 px-4 pb-4", className)}>
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <Link href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
              <span className="flex items-center gap-2">
                {logo}
                <span className={outfit.className}>{name}</span>
              </span>
            </Link>
            {showNavigation && (
              <div className="ml-8 hidden md:block">
                {customNavigation || <Navigation />}
              </div>
            )}
          </NavbarLeft>

          <NavbarRight>
            <div className="hidden md:flex items-center gap-4">
              <LanguageSelector />
              <ThemeToggle />
              {finalActions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                >
                  <Button variant={action.variant || "default"}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0"
                  >
                    <Menu className="size-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="grid gap-6 text-lg font-medium">
                    <div className="flex items-center gap-2 text-xl font-bold">
                      <span>{name}</span>
                    </div>
                    {mobileLinksWithContact.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}