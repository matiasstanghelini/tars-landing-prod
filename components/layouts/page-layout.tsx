
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export default function PageLayout({ 
  children, 
  className,
  maxWidth = "2xl" 
}: PageLayoutProps) {
  return (
    <div className={cn(
      "min-h-screen bg-background",
      className
    )}>
      <div className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8 py-8",
        {
          "max-w-sm": maxWidth === "sm",
          "max-w-md": maxWidth === "md", 
          "max-w-lg": maxWidth === "lg",
          "max-w-xl": maxWidth === "xl",
          "max-w-2xl": maxWidth === "2xl",
          "max-w-none": maxWidth === "full",
        }
      )}>
        {children}
      </div>
    </div>
  );
}
