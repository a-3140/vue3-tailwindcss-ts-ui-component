import { defineComponent as c, openBlock as r, createElementBlock as a, normalizeClass as s, unref as i, toDisplayString as u } from "vue";
const m = (...e) => e.filter(Boolean).join(" "), d = /* @__PURE__ */ c({
  __name: "TheButton",
  props: {
    label: null,
    type: null,
    classes: null,
    clickHandler: null
  },
  setup(e) {
    const n = "text-white bg-lochinvar-700 hover:bg-lochinvar-800", l = "text-black bg-white hover:bg-gray-100 border-gray-300 border";
    return (f, t) => (r(), a("button", {
      onClick: t[0] || (t[0] = //@ts-ignore
      (...o) => e.clickHandler && e.clickHandler(...o)),
      class: s(
        i(m)(
          e.type === "secondary" ? l : n,
          "font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none tracking-wide",
          e.classes
        )
      )
    }, u(e.label), 3));
  }
}), b = { TheButton: d };
const y = b, h = {
  install(e) {
    Object.values(y).forEach((n) => {
      e.component(n.name, n);
    });
  }
};
export {
  h as default
};
