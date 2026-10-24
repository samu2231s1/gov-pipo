import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BottomNav } from "./BottomNav-DAdjKqkM.mjs";
import { S as Bell, _ as Contact, c as ShieldCheck, d as SearchCheck, f as QrCode, g as FileDown, h as FilePenLine, i as UserLock, m as Lock, n as Wallet, p as Mail, r as Users, u as Search, v as ClipboardList, x as CalendarDays, y as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CVtNNzM1.js
var import_jsx_runtime = require_jsx_runtime();
var servicos = [
	{
		icon: ShieldCheck,
		label: "Gerar código de acesso"
	},
	{
		icon: Users,
		label: "Procuração eletrônica",
		novo: true
	},
	{
		icon: Mail,
		label: "Caixa Postal",
		fill: true
	},
	{
		icon: Wallet,
		label: "Carteira de documentos",
		to: "/carteira",
		fill: true
	},
	{
		icon: FilePenLine,
		label: "Assinar documentos digitalmente"
	},
	{
		icon: CalendarDays,
		label: "Agenda gov.br"
	},
	{
		icon: SearchCheck,
		label: "Consultar serviços solicitados"
	},
	{
		icon: FileDown,
		label: "Baixar certidões"
	},
	{
		icon: QrCode,
		label: "Login sem senha (QR code)"
	},
	{
		icon: Contact,
		label: "Prova de vida"
	}
];
var conta = [
	{
		icon: ClipboardList,
		label: "Dados pessoais"
	},
	{
		icon: UserLock,
		label: "Segurança da conta"
	},
	{
		icon: Lock,
		label: "Privacidade"
	}
];
function Row({ icon: Icon, label, novo, to, fill }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "h-[18px] w-[18px] shrink-0 text-[#1351b4]",
			strokeWidth: 2.2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-3 flex-1 truncate text-[15px] font-bold leading-none text-[#1351b4]",
			children: label
		}),
		novo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mr-3 rounded-full bg-[#168821] px-[7px] py-[3px] text-[10px] font-bold tracking-wide text-white",
			children: "NOVO"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
			className: "h-4 w-4 shrink-0 text-[#1351b4]",
			strokeWidth: 2.4
		})
	] });
	const cls = "flex h-[61px] items-center border-t border-[#e6e6e6] pl-[18px] pr-3";
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cls,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cls,
		children: inner
	});
}
function Card({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-3 overflow-hidden rounded-[4px] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.18)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "px-5 pb-[18px] pt-[22px] text-[15px] font-medium text-[#666]",
			children: title
		}), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { ...item }, item.label))]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-screen max-w-[430px] bg-[#f8f8f8] font-gov text-[#111]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 flex items-center justify-between bg-white px-5 pb-3 pt-[calc(env(safe-area-inset-top)+22px)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo-gov.png",
					alt: "gov.br",
					className: "h-[34px] w-auto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-[22px] w-[22px] fill-[#8d8d8d] text-[#8d8d8d]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -right-[7px] -top-[9px] grid h-[18px] w-[18px] place-items-center rounded-full bg-[#168821] text-[11px] font-bold text-white",
							children: "1"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/avatar.png",
						alt: "",
						className: "h-10 w-10 rounded-full object-cover"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/banner-faixa.png",
				alt: "",
				className: "block w-full",
				style: { height: "auto" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-[14px] mt-[22px] flex h-[52px] items-center rounded-[8px] border border-[#9a9a9a] bg-white px-[18px] shadow-[0_1px_2px_rgba(0,0,0,0.12)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 truncate text-[14.5px] italic text-[#222]",
					children: "Encontre serviços públicos no gov.br"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "h-5 w-5 shrink-0 text-[#1351b4]",
					strokeWidth: 2.4
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-[22px] pb-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Serviços",
					items: servicos
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Minha conta",
					items: conta
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, { active: "inicio" })
		]
	});
}
//#endregion
export { Home as component };
