"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Efecto para leer el tema guardado al montar el componente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedDark = localStorage.getItem('darkMode') === 'true';
      setDark(savedDark);
      document.documentElement.classList.toggle('dark', savedDark);
    }
  }, []);

  // Efecto para guardar la preferencia y actualizar la clase
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', dark.toString());
      document.documentElement.classList.toggle('dark', dark);
    }
  }, [dark]);

  return (
    <div className="flex items-center gap-2">
      {dark ? (
        <Sun 
          className="w-5 h-5 text-yellow-400 cursor-pointer" 
          onClick={() => setDark(false)}
        />
      ) : (
        <Moon 
          className="w-5 h-5 text-muted-foreground cursor-pointer" 
          onClick={() => setDark(true)}
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
