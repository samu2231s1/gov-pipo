import { Link } from "@tanstack/react-router";

export function BottomNav({ active, docked = false }: { active: "inicio" | "carteira"; docked?: boolean }) {
  const src = active === "inicio" ? "/nav-exact-inicio.png" : "/nav-exact-carteira.png";
  return (
    <nav
      className={
        docked
          ? "relative z-30 w-full bg-white pb-[env(safe-area-inset-bottom)]"
          : "pointer-events-auto fixed bottom-0 left-1/2 z-30 w-full max-w-[430px] -translate-x-1/2 bg-white pb-[env(safe-area-inset-bottom)]"
      }
    >
      <img src={src} alt="" draggable={false} className="block w-full select-none" />
      <div className="absolute inset-0 grid grid-cols-5">
        <Link to="/" aria-label="Início" className="pb-[env(safe-area-inset-bottom)]" />
        <span aria-label="Dados" />
        <span aria-label="QR Code" />
        <Link to="/carteira" aria-label="Carteira" className="pb-[env(safe-area-inset-bottom)]" />
        <span aria-label="Menu" />
      </div>
    </nav>
  );
}
