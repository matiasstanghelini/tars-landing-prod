
"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Efecto para leer el tema guardado al montar el componente
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const savedDark = localStorage.getItem('darkMode') === 'true';
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = savedDark !== null ? savedDark : systemDark;
      
      setDark(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, []);

  // Efecto para guardar la preferencia y actualizar la clase
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('darkMode', dark.toString());
      document.documentElement.classList.toggle('dark', dark);
    }
  }, [dark, mounted]);

  const toggleTheme = useCallback(() => {
    setDark(prev => !prev);
  }, []);

  // Evitar hidratación hasta que el componente esté montado
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
      {dark ? (
        <Sun 
          className="w-5 h-5 text-yellow-400 cursor-pointer hover:scale-110 transition-transform" 
          onClick={toggleTheme}
        />
      ) : (
        <Moon 
          className="w-5 h-5 text-muted-foreground cursor-pointer hover:scale-110 transition-transform" 
          onClick={toggleTheme}
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
