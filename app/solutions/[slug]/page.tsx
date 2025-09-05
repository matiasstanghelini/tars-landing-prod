"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { notFound } from 'next/navigation';

type SolutionSlug = 'platform-ecommerce' | 'soluciones-para-comercios-digitales';

export function generateStaticParams(): { slug: SolutionSlug }[] {
  return [
    { slug: "platform-ecommerce" },
    { slug: "soluciones-para-comercios-digitales" },
  ];
}

type PageProps = {
  params: { slug: SolutionSlug };
};

export default function SolutionPage({ params }: PageProps) {
  const { t } = useTranslation();
  const { slug } = params;

  // Mapeo de slugs a claves de traducción
  const solutionTranslations: Record<string, { title: string; description: string }> = {
    'platform-ecommerce': {
      title: 'solutions.platform',
      description: 'solutions.platform_description'
    },
    'soluciones-para-comercios-digitales': {
      title: 'solutions.digital_commerce_solutions',
      description: 'solutions.digital_commerce_solutions_description'
    }
  };

  const translationKeys = solutionTranslations[slug];
  
  if (!translationKeys) {
    notFound();
  }

  // Obtener las traducciones
  const title = t(translationKeys.title);
  const description = t(translationKeys.description);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}