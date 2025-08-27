
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/hooks/useTranslation";
import { Check, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export default function LanguageSelector({ className }: { className?: string }) {
  const { locale, changeLanguage, isLoading } = useTranslation();

  const currentLanguage = useMemo(() => 
    languages.find(lang => lang.code === locale) || languages[0], 
    [locale]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn("gap-2", className)}
          aria-label="Select language"
          disabled={isLoading}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage.name}</span>
          <ChevronDown className={cn("h-3 w-3 transition-transform", isLoading && "animate-spin")} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="gap-2"
            disabled={isLoading}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
            {locale === language.code && (
              <Check className="h-4 w-4 ml-auto" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
