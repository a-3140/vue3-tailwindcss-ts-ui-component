import { defineComponent as l, openBlock as c, createElementBlock as r, normalizeClass as s, unref as i, toDisplayString as u } from "vue";
const m = (...e) => e.filter(Boolean).join(" ");
l({
  name: "TheButton"
});
const d = /* @__PURE__ */ l({
  __name: "TheButton",
  props: {
    label: null,
    type: null,
    classes: null,
    clickHandler: null
  },
  setup(e) {
    const n = "text-white bg-lochinvar-700 hover:bg-lochinvar-800", o = "text-black bg-white hover:bg-gray-100 border-gray-300 border";
    return (f, t) => (c(), r("button", {
      onClick: t[0] || (t[0] = //@ts-ignore
      (...a) => e.clickHandler && e.clickHandler(...a)),
      class: s(
        i(m)(
          e.type === "secondary" ? o : n,
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
