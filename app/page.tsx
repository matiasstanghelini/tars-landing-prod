"use client";

import { useTranslation } from "@/hooks/useTranslation";
import TextType from "@/components/ui/TextType";
import Orb from "@/components/Orb";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Orb Background */}
      <div className="absolute inset-0 w-full h-full">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Text Content - Centered and on top of the Orb */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-4 sm:mb-6">
          <TextType
            text={[t("home.title"), t("home.subtitle")]}
            typingSpeed={85}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
        <p className="text-lg sm:text-xl mt-2 sm:mt-4">{t("home.subtitle")}</p>
      </div>
    </div>
  );
}
