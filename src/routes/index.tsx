import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bell,
  ShieldCheck,
  Users,
  Mail,
  Wallet,
  FileSignature,
  CalendarDays,
  SearchCheck,
  FileDown,
  QrCode,
  Contact,
  ClipboardList,
  UserLock,
  Lock,
  ChevronRight,
  Search,
} from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/")({
  component: Home,
});

const servicos: { icon: typeof Mail; label: string; novo?: boolean; to?: "/carteira"; fill?: boolean }[] = [
  { icon: ShieldCheck, label: "Gerar código de acesso" },
  { icon: Users, label: "Procuração eletrônica", novo: true },
  { icon: Mail, label: "Caixa Postal", fill: true },
  { icon: Wallet, label: "Carteira de documentos", to: "/carteira", fill: true },
  { icon: FileSignature, label: "Assinar documentos digitalmente" },
  { icon: CalendarDays, label: "Agenda gov.br" },
  { icon: SearchCheck, label: "Consultar serviços solicitados" },
  { icon: FileDown, label: "Baixar certidões" },
  { icon: QrCode, label: "Login sem senha (QR code)" },
  { icon: Contact, label: "Prova de vida" },
];

const conta: { icon: typeof Mail; label: string }[] = [
  { icon: ClipboardList, label: "Dados pessoais" },
  { icon: UserLock, label: "Segurança da conta" },
  { icon: Lock, label: "Privacidade" },
];

function Row({
  icon: Icon,
  label,
  novo,
  to,
  fill,
}: {
  icon: typeof Mail;
  label: string;
  novo?: boolean;
  to?: "/carteira";
  fill?: boolean;
}) {
  const inner = (
    <>
      <Icon className="h-[18px] w-[18px] shrink-0 text-[#1351b4]" strokeWidth={2.2} />
      <span className="ml-3 flex-1 truncate text-[15px] font-bold leading-none text-[#1351b4]">{label}</span>
      {novo && (
        <span className="mr-3 rounded-full bg-[#168821] px-[7px] py-[3px] text-[10px] font-bold tracking-wide text-white">
          NOVO
        </span>
      )}
      <ChevronRight className="h-4 w-4 shrink-0 text-[#1351b4]" strokeWidth={2.4} />
    </>
  );
  const cls = "flex h-[61px] items-center border-t border-[#e6e6e6] pl-[18px] pr-3";
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  return <div className={cls}>{inner}</div>;
}

function Card({ title, items }: { title: string; items: { icon: typeof Mail; label: string; novo?: boolean; to?: "/carteira"; fill?: boolean }[] }) {
  return (
    <section className="mx-3 overflow-hidden rounded-[4px] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.18)]">
      <h2 className="px-5 pb-[18px] pt-[22px] text-[15px] font-medium text-[#666]">{title}</h2>
      {items.map((item) => (
        <Row key={item.label} {...item} />
      ))}
    </section>
  );
}

function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-[430px] bg-[#f8f8f8] font-gov text-[#111]">
      <header className="sticky top-0 z-20 flex items-center justify-between bg-white px-5 pb-3 pt-[calc(env(safe-area-inset-top)+22px)]">
        <img src="/logo-gov.png" alt="gov.br" className="h-[34px] w-auto" />
        <div className="flex items-center gap-5">
          <span className="relative">
            <Bell className="h-[22px] w-[22px] fill-[#8d8d8d] text-[#8d8d8d]" />
            <span className="absolute -right-[7px] -top-[9px] grid h-[18px] w-[18px] place-items-center rounded-full bg-[#168821] text-[11px] font-bold text-white">
              1
            </span>
          </span>
          <img src="/avatar.png" alt="" className="h-10 w-10 rounded-full object-cover" />
        </div>
      </header>

      <img src="/banner-faixa.png" alt="" className="block w-full" style={{ height: "auto" }} />

      <div className="mx-[14px] mt-[22px] flex h-[52px] items-center rounded-[8px] border border-[#9a9a9a] bg-white px-[18px] shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
        <span className="flex-1 truncate text-[14.5px] italic text-[#222]">Encontre serviços públicos no gov.br</span>
        <Search className="h-5 w-5 shrink-0 text-[#1351b4]" strokeWidth={2.4} />
      </div>

      <div className="mt-6 space-y-[22px] pb-28">
        <Card title="Serviços" items={servicos} />
        <Card title="Minha conta" items={conta} />
      </div>

      <BottomNav active="inicio" />
    </div>
  );
}
