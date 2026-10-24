import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BottomNav-DAdjKqkM.js
var import_jsx_runtime = require_jsx_runtime();
function BottomNav({ active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "pointer-events-auto fixed bottom-0 left-1/2 z-30 w-full max-w-[430px] -translate-x-1/2 bg-white pb-[env(safe-area-inset-bottom)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: active === "inicio" ? "/nav-exact-inicio.png" : "/nav-exact-carteira.png",
			alt: "",
			draggable: false,
			className: "block w-full select-none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 grid grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Início",
					className: "pb-[env(safe-area-inset-bottom)]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-label": "Dados" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-label": "QR Code" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/carteira",
					"aria-label": "Carteira",
					className: "pb-[env(safe-area-inset-bottom)]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-label": "Menu" })
			]
		})]
	});
}
//#endregion
export { BottomNav as t };
