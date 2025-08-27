
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Página no encontrada</h2>
        <p className="text-muted-foreground mt-2 mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Button asChild>
          <Link href="/">
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
}
