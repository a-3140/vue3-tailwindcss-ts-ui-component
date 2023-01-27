import { defineComponent as c, openBlock as r, createElementBlock as a, renderSlot as l } from "vue";
const p = c({
  name: "TheButton"
}), _ = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, s] of e)
    o[n] = s;
  return o;
}, d = { class: "text-red-500" };
function f(t, e, o, n, s, h) {
  return r(), a("button", d, [
    l(t.$slots, "default")
  ]);
}
const i = /* @__PURE__ */ _(p, [["render", f]]), u = { TheButton: i };
const m = u, x = {
  install(t) {
    Object.values(m).forEach((e) => {
      t.component(e.name, e);
    });
  }
};
export {
  x as default
};
