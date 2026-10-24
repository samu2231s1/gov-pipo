import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Trash2, Share2, Star } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/documento")({
  component: Documento,
});

const pages = ["/doc-1.jpg", "/doc-2.jpg", "/doc-3.jpg"] as const;
const zooms = ["/zoom-1.jpg", "/zoom-2.jpg", "/zoom-3.jpg"] as const;

function ZoomView({ src, onClose }: { src: string; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef({ scale: 1, x: 0, y: 0, dist: 0, px: 0, py: 0 });

  const pairDist = () => {
    const pts = [...pointers.current.values()];
    if (pts.length < 2) return 0;
    return Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
  };

  const snapshot = () => {
    gesture.current = { scale, x: pos.x, y: pos.y, dist: pairDist() || 1, px: 0, py: 0 };
    const pts = [...pointers.current.values()];
    if (pts[0]) {
      gesture.current.px = pts[0].x;
      gesture.current.py = pts[0].y;
    }
  };

  return (
    <div className="fixed inset-0 z-[80] bg-black" style={{ touchAction: "none" }}>
      <button
        type="button"
        aria-label="Fechar zoom"
        onClick={onClose}
        className="absolute right-3 top-[calc(env(safe-area-inset-top)+10px)] z-10 grid h-12 w-12 place-items-center"
      >
        <X className="h-8 w-8 text-white" strokeWidth={2.2} />
      </button>
      <div
        className="absolute inset-0"
        onPointerDown={(e) => {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
          snapshot();
        }}
        onPointerMove={(e) => {
          if (!pointers.current.has(e.pointerId)) return;
          pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
          const pts = [...pointers.current.values()];
          if (pts.length >= 2) {
            const d = pairDist();
            const next = Math.min(4, Math.max(1, gesture.current.scale * (d / gesture.current.dist)));
            setScale(next);
            if (next <= 1.01) setPos({ x: 0, y: 0 });
            return;
          }
          if (gesture.current.scale <= 1) return;
          setPos({
            x: gesture.current.x + (e.clientX - gesture.current.px),
            y: gesture.current.y + (e.clientY - gesture.current.py),
          });
        }}
        onPointerUp={(e) => {
          pointers.current.delete(e.pointerId);
          if (pointers.current.size === 1) snapshot();
        }}
        onPointerCancel={(e) => {
          pointers.current.delete(e.pointerId);
        }}
        onDoubleClick={() => {
          if (scale > 1) {
            setScale(1);
            setPos({ x: 0, y: 0 });
          } else {
            setScale(2.4);
          }
        }}
      >
        <img
          src={src}
          alt=""
          draggable={false}
          className="pointer-events-none absolute left-1/2 top-1/2 w-[94%] max-w-[460px] object-contain"
          style={{
            transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            maxHeight: "82%",
          }}
        />
      </div>
    </div>
  );
}

function Documento() {
  const [i, setI] = useState(0);
  const [dx, setDx] = useState(0);
  const [menu, setMenu] = useState(false);
  const [zoom, setZoom] = useState(false);
  const start = useRef<number | null>(null);
  const last = 3;

  const go = (n: number) => setI(Math.max(0, Math.min(last, n)));

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, []);

  return (
    <div className="relative mx-auto flex h-dvh max-w-[430px] touch-none flex-col overflow-hidden overscroll-none bg-white font-gov">
      <div className="flex shrink-0 items-center justify-between px-[14px] pb-0.5 pt-[calc(env(safe-area-inset-top)+16px)]">
        <img src="/logo-gov.png" alt="gov.br" className="h-[30px] w-auto" />
        <Link to="/carteira" aria-label="Fechar" className="grid h-9 w-9 place-items-center">
          <X className="h-[26px] w-[26px] text-[#2670e8]" strokeWidth={2.4} />
        </Link>
      </div>

      <div className="flex shrink-0 justify-center pt-1">
        <span className="bg-[#ffe14a] px-[7px] py-[5px] text-[12px] font-extrabold leading-none tracking-tight text-[#168821]">
          DOCUMENTO DE IDENTIFICAÇÃO
        </span>
      </div>

      <div
        className="relative mt-1.5 min-h-0 flex-1 touch-none"
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).closest("button, a")) return;
          start.current = e.clientX;
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        }}
        onPointerUp={(e) => {
          if (start.current === null) return;
          const delta = e.clientX - start.current;
          if (delta < -36) go(i + 1);
          else if (delta > 36) go(i - 1);
          start.current = null;
          setDx(0);
        }}
        onPointerCancel={() => {
          start.current = null;
          setDx(0);
        }}
        onPointerMove={(e) => {
          if (start.current !== null) setDx(e.clientX - start.current);
        }}
      >
        <div
          className="flex h-full"
          style={{
            transform: `translateX(calc(${-i * 100}% + ${dx}px))`,
            transition: start.current === null ? "transform 260ms ease" : "none",
          }}
        >
          {pages.map((src) => (
            <div key={src} className="relative h-full w-full shrink-0">
              <img
                src={src}
                alt=""
                draggable={false}
                className="absolute inset-0 h-full w-full object-contain object-top px-[6.5%] pt-1"
              />
            </div>
          ))}
          <div className="flex h-full w-full shrink-0 flex-col items-center overflow-hidden px-5 pt-3 text-center">
            <p className="max-w-[340px] text-[15px] font-semibold leading-[1.32] text-[#111]">
              Este documento digital pode ser utilizado para sua identificação, não sendo necessária a apresentação de documento complementar, conforme Decreto nº 10.977, de 23 de fevereiro de 2022.
            </p>
            <img
              src="/doc-qr.png"
              alt="QR code"
              draggable={false}
              className="mt-5 w-[70%] max-w-[320px] flex-1 object-contain"
            />
            <p className="mb-2 mt-4 max-w-[300px] text-[15px] font-semibold leading-[1.32] text-[#111]">
              Verifique a autenticidade da Carteira de Identidade Nacional lendo o QR code com o aplicativo Vio.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-40 grid shrink-0 grid-cols-[78px_26px_1fr_26px_78px] items-center px-[10px] pb-0 pt-0">
        <button
          type="button"
          aria-label="Ampliar"
          onPointerUp={(e) => {
            e.stopPropagation();
            e.preventDefault();
            if (i < zooms.length) setZoom(true);
          }}
          className="relative z-50 grid h-[78px] w-[78px] place-items-center bg-transparent p-0"
        >
          <img src="/btn-zoom-ref.png" alt="" draggable={false} className="pointer-events-none h-[78px] w-[76px] select-none object-contain" />
        </button>
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => go(i - 1)}
          className={`grid h-8 w-7 place-items-center ${i === 0 ? "pointer-events-none invisible" : ""}`}
        >
          <ChevronLeft className="h-[26px] w-[26px] text-[#2670e8]" strokeWidth={2.2} />
        </button>
        <div className="flex items-center justify-center gap-[10px]">
          {[0, 1, 2, 3].map((idx) => (
            <span key={idx} className={`h-[9px] w-[9px] rounded-full ${idx === i ? "bg-[#1351b4]" : "bg-[#b7c6df]"}`} />
          ))}
        </div>
        <button
          type="button"
          aria-label="Próximo"
          onClick={() => go(i + 1)}
          className={`grid h-8 w-7 place-items-center ${i === last ? "pointer-events-none invisible" : ""}`}
        >
          <ChevronRight className="h-[26px] w-[26px] text-[#2670e8]" strokeWidth={2.2} />
        </button>
        <button
          type="button"
          aria-label="Mais opções"
          onClick={() => setMenu((v) => !v)}
          className="relative z-50 grid h-[78px] w-[78px] place-items-center bg-transparent p-0"
        >
          <img src="/btn-more-ref.png" alt="" draggable={false} className="pointer-events-none h-[78px] w-[76px] select-none object-contain" />
        </button>
      </div>

      <div className="h-[calc(78px+env(safe-area-inset-bottom,0px))] shrink-0" />

      {menu && (
        <button
          type="button"
          aria-label="Fechar menu"
          className="absolute inset-x-0 top-0 bottom-[78px] z-40 bg-black/45"
          onClick={() => setMenu(false)}
        />
      )}
      {menu && (
        <div className="absolute bottom-[154px] right-[18px] z-50 flex flex-col items-end gap-[12px]">
          {[
            { icon: Trash2, label: "Remover documento" },
            { icon: Share2, label: "Compartilhar documento" },
            { icon: Star, label: "Favoritar documento" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              className="flex h-[48px] items-center gap-[12px] rounded-full bg-[#f3f4f6]/90 px-[16px] shadow-[0_2px_10px_rgba(0,0,0,0.22)]"
            >
              <Icon className="h-[20px] w-[20px] text-[#4b4b4b]" strokeWidth={1.8} />
              <span className="text-[16px] font-medium text-[#2a2a2a]">{label}</span>
            </button>
          ))}
        </div>
      )}

      <BottomNav active="carteira" />
      {zoom && i < zooms.length && <ZoomView src={zooms[i]} onClose={() => setZoom(false)} />}
    </div>
  );
}
