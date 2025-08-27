
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5" />
        <span className="sr-only">Loading theme toggle</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {theme === "dark" ? (
        <Sun 
          className="w-5 h-5 text-yellow-400 cursor-pointer hover:scale-110 transition-transform" 
          onClick={() => setTheme("light")}
        />
      ) : (
        <Moon 
          className="w-5 h-5 text-muted-foreground cursor-pointer hover:scale-110 transition-transform" 
          onClick={() => setTheme("dark")}
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
