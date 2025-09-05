
"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function AIChatbotPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{t('solutions.ai_chatbot_title')}</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t('solutions.ai_chatbot_subtitle')}
        </p>
        <div className="prose max-w-none">
          <p>{t('solutions.ai_chatbot_description')}</p>
        </div>
      </div>
    </div>
  );
}
