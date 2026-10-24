export function GovMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-extrabold leading-none tracking-tight ${className}`} aria-label="gov.br">
      <span className="text-[#2864ae]">g</span>
      <span className="text-[#5c9a2e]">o</span>
      <span className="text-[#e8a317]">v</span>
      <span className="text-[#2864ae]">.</span>
      <span className="text-[#1351b4]">b</span>
      <span className="text-[#5c9a2e]">r</span>
    </span>
  );
}
