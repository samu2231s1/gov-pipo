import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BottomNav } from "./BottomNav-DAdjKqkM.mjs";
import { b as ChevronLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/carteira-C67lPM6i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Carteira() {
	const [waiting, setWaiting] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => setWaiting(false), 700);
		return () => window.clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto min-h-screen max-w-[430px] overflow-hidden bg-white font-gov",
		style: { animation: "sheet-in 160ms ease-out" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 bg-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-[18px] pb-3 pt-[calc(env(safe-area-inset-top)+18px)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo-gov.png",
						alt: "gov.br",
						className: "h-[32px] w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/avatar.png",
						alt: "",
						className: "h-[46px] w-[46px] rounded-full object-cover"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-[52px] items-center justify-center bg-[#071d41] text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						"aria-label": "Voltar",
						className: "absolute left-2 grid h-11 w-11 place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
							className: "h-7 w-7",
							strokeWidth: 2.2
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-[17px] font-bold tracking-tight",
						children: "Carteira de documentos"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "px-[14px] pt-[14px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/documento",
					"aria-label": "Abrir documento de identificação",
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/cartao-id.png",
						alt: "Carteira de Identidade",
						className: "block w-full"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-[86px] left-1/2 z-20 w-full max-w-[430px] -translate-x-1/2 px-[16px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-[48px] w-full rounded-full bg-[#0e46a7] text-[16px] font-bold text-white shadow-[0_2px_3px_rgba(0,0,0,0.28)]",
					children: "Adicionar documento"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, { active: "carteira" }),
			waiting && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-[60] flex min-h-dvh flex-col items-center justify-center bg-black/72",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 24 24",
						className: "h-[22px] w-[22px]",
						style: { animation: "spin-arc 0.65s linear infinite" },
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M12 3.2a8.8 8.8 0 0 1 7.6 4.4",
							fill: "none",
							stroke: "#5eb6ff",
							strokeWidth: "2.4",
							strokeLinecap: "round"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-[18px] text-[17px] font-bold leading-none text-white",
						children: "Aguarde..."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-[14px] text-[16px] font-normal leading-none text-white/95",
						children: "Carregando..."
					})
				]
			})
		]
	});
}
//#endregion
export { Carteira as component };
