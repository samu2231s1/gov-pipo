import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/carteira")({
  component: Carteira,
});

function Carteira() {
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setWaiting(false), 700);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-[430px] flex-col bg-white font-gov" style={{ animation: "sheet-in 160ms ease-out" }}>
      <header className="sticky top-0 z-20 bg-white">
        <div className="flex items-center justify-between px-[18px] pb-3 pt-[calc(env(safe-area-inset-top)+18px)]">
          <img src="/logo-gov.png" alt="gov.br" className="h-[32px] w-auto" />
          <img src="/avatar.png" alt="" className="h-[46px] w-[46px] rounded-full object-cover" />
        </div>
        <div className="relative flex h-[52px] items-center justify-center bg-[#071d41] text-white">
          <Link to="/" aria-label="Voltar" className="absolute left-2 grid h-11 w-11 place-items-center">
            <ChevronLeft className="h-7 w-7" strokeWidth={2.2} />
          </Link>
          <h1 className="text-[17px] font-bold tracking-tight">Carteira de documentos</h1>
        </div>
      </header>

      <main className="flex-1 px-[14px] pt-[14px]">
        <Link to="/documento" aria-label="Abrir documento de identificação" className="block">
          <img src="/cartao-id.png" alt="Carteira de Identidade" className="block w-full" />
        </Link>
      </main>

      <div className="z-40 mt-auto bg-white pt-4">
        <div className="px-[16px] pb-4">
          <button
            type="button"
            className="h-[48px] w-full rounded-full bg-[#0e46a7] text-[16px] font-bold text-white shadow-[0_2px_3px_rgba(0,0,0,0.28)]"
          >
            Adicionar documento
          </button>
        </div>
        <BottomNav active="carteira" docked />
      </div>

      {waiting && (
        <div className="absolute inset-0 z-[60] flex min-h-dvh flex-col items-center justify-center bg-black/72">
          <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" style={{ animation: "spin-arc 0.65s linear infinite" }} aria-hidden>
            <path
              d="M12 3.2a8.8 8.8 0 0 1 7.6 4.4"
              fill="none"
              stroke="#5eb6ff"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-[18px] text-[17px] font-bold leading-none text-white">Aguarde...</p>
          <p className="mt-[14px] text-[16px] font-normal leading-none text-white/95">Carregando...</p>
        </div>
      )}
    </div>
  );
}