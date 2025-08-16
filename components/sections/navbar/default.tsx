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
  mobileLinks = [
    { text: "Getting Started",
      href: "https://www.launchuicomponents.com/"
    },
    { text: "Components",
      href: "https://www.launchuicomponents.com/"
    },
    { text: "Documentation",
      href: "https://www.launchuicomponents.com/"
    },
  ],
  actions = [
    // { text: "Sign in",
    //   href: "https://www.launchuicomponents.com/",
    //   isButton: false,
    //   variant: "secondary"
    // },
    {
      text: "Contactanos",
      href: "https://tarsdevs.tech/",
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  // Dark mode state is now managed by ThemeToggle component

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
              <a href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
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
            {actions.map((action, index) => {
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
            <ThemeToggle />
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
                  {mobileLinks.map((link, index) => (
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
