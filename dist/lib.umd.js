(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,e["ui-lib"]=t(e.Vue))})(this,function(e){"use strict";const t=(...n)=>n.filter(Boolean).join(" "),i={name:"TheButton"},s={TheButton:e.defineComponent({...i,props:{label:null,type:null,classes:null,clickHandler:null},setup(n){const o="text-white bg-lochinvar-700 hover:bg-lochinvar-800",r="text-black bg-white hover:bg-gray-100 border-gray-300 border";return(m,l)=>(e.openBlock(),e.createElementBlock("button",{onClick:l[0]||(l[0]=(...a)=>n.clickHandler&&n.clickHandler(...a)),class:e.normalizeClass(e.unref(t)(n.type==="secondary"?r:o,"font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none tracking-wide",n.classes))},e.toDisplayString(n.label),3))}})},d="",c=s;return{install(n){Object.values(c).forEach(o=>{n.component(o.name,o)})}}});
