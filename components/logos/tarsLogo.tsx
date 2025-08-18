"use client";

import { cn } from "@/lib/utils";

interface TarsLogoProps {
  className?: string;
  size?: number;
}

export default function TarsLogo({ className, size = 40 }: TarsLogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground"
      >
        <rect width="40" height="40" rx="8" fill="currentColor" />
        <path
          d="M8 12h24v4H20v12h-4V16H8v-4z"
          fill="white"
          className="dark:fill-white"
        />
      </svg>
    </div>
  );
}