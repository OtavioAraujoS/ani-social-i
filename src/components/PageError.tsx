"use client";
import { ArrowRight, RefreshCcw } from "lucide-react";
import { ErrorContainer } from "@/components/ErrorPage/ErrorContainer";
import { ErrorPageHero } from "@/components/ErrorPage/ErrorPageHero";
import { SetupErrorCard } from "@/components/ErrorPage/SetupErrorCard";

interface PageErrorProps {
  error?: Error & { digest?: string };
  reset?: () => void;
  title?: string;
  message?: string;
}

export function PageError({ error, reset, message }: PageErrorProps) {
  return (
    <ErrorContainer>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center p-6 md:p-12 lg:p-16 gap-10 md:gap-16 lg:gap-24 w-full">
        <ErrorPageHero
          errorCode="500"
          titleLine1="SISTEMA"
          titleLine2="PARADO"
          description="Detectamos uma irregularidade técnica inesperada. Nossa equipe foi notificada e já está trabalhando para restaurar a estabilidade da plataforma o quanto antes."
          actions={[
            {
              label: "Retornar ao Início",
              onClick: () => (window.location.href = "/home"),
              icon: <ArrowRight className="w-4 h-4" />,
              primary: true,
            },
            {
              label: "Tentar Novamente",
              onClick: () => (reset ? reset() : window.location.reload()),
              icon: <RefreshCcw className="w-4 h-4" />,
            },
          ]}
        />

        <SetupErrorCard
          fragment={message || error?.message || "UNIDENTIFIED SYSTEM ANOMALY"}
        />
      </div>
    </ErrorContainer>
  );
}
