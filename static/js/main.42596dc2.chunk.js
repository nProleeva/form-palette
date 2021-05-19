(this["webpackJsonpform-palette"]=this["webpackJsonpform-palette"]||[]).push([[0],{26:function(e,t,r){},28:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var n,c,o=r(0),a=r.n(o),l=r(13),i=r.n(l),u=(r(26),r(8)),s=r(1),j=a.a.forwardRef((function(e,t){var r=Object(o.useState)(""),n=Object(u.a)(r,2),c=n[0],a=n[1];return Object(s.jsxs)("label",{children:[e.label,Object(s.jsx)("input",{type:"text",value:c,onChange:function(e){a(/[a-z]+/i.exec(e.target.value)||"")},ref:t})]})}));function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function d(e,t){var r=e.title,a=e.titleId,l=b(e,["title","titleId"]);return o.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":a},l),r?o.createElement("title",{id:a},r):null,n||(n=o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),c||(c=o.createElement("path",{d:"M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"})))}var O,p=o.forwardRef(d),v=(r.p,a.a.forwardRef((function(e,t){var r=Object(o.useRef)(null),n=Object(o.useState)(),c=Object(u.a)(n,2),a=c[0],l=c[1];function i(e){e.preventDefault(),e.stopPropagation()}return Object(o.useEffect)((function(){var e=["dragenter","dragover","dragleave","drop"];return r.current&&e.forEach((function(e){var t;null===(t=r.current)||void 0===t||t.addEventListener(e,i,!1)})),function(){r.current&&e.forEach((function(e){var t;null===(t=r.current)||void 0===t||t.removeEventListener(e,i,!1)}))}}),[r]),Object(s.jsxs)("div",{ref:r,className:"dropArea",onDrop:function(e){var r=e.dataTransfer.files;l(r[0].name),"object"===typeof t&&(null===t||void 0===t?void 0:t.current)&&(t.current.files=r)},children:["\u0424\u043e\u0442\u043e",Object(s.jsxs)("label",{children:[Object(s.jsx)("i",{className:"material-icons",children:Object(s.jsx)(p,{children:"photo_camera"})}),Object(s.jsx)("span",{className:"title",children:a||"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b"}),Object(s.jsx)("input",{type:"file",accept:"image/*",ref:t,onChange:function(){"object"===typeof t&&(null===t||void 0===t?void 0:t.current)&&l(t.current.files[0].name)},required:!0})]})]})}))),h=(r(28),[{id:"name",label:"\u0418\u043c\u044f"},{id:"surname",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"},{id:"patronymic",label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}]),x=function(){var e=Object(o.useRef)(null),t=[Object(o.useRef)(null),Object(o.useRef)(null),Object(o.useRef)(null)],r=Object(o.useState)(""),n=Object(u.a)(r,2),c=n[0],l=n[1];return Object(s.jsxs)(a.a.Fragment,{children:[Object(s.jsxs)("form",{onSubmit:function(r){var n,c=new FormData;c.append("action","send_data"),c.append("id","1");var o=(null===(n=e.current)||void 0===n?void 0:n.files)||[""];c.append("image",o[0]),c.append("contact","[".concat(t.map((function(e){var t;return null===(t=e.current)||void 0===t?void 0:t.value.toString()})),"]")),fetch("https://test-job.pixli.app/send.php",{method:"POST",body:c}).then((function(e){return e.ok?e.text():""})).then((function(e){return l(e)})),r.preventDefault()},children:[h.map((function(e,r){return Object(s.jsx)(j,{ref:t[r],label:e.label},r)})),Object(s.jsx)(v,{ref:e}),Object(s.jsx)("input",{type:"submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(s.jsxs)("label",{children:["Response",Object(s.jsx)("textarea",{value:c,readOnly:!0})]})]})},m=r(10),y=r(21),C=r(15),g=r(38),E="ADD_COLOR",w="UPDATE_COLOR",R="DELETE_COLOR",S=Object(g.a)((O={},Object(C.a)(O,E,(function(e,t){return{arrayColor:e.arrayColor.concat(t.color||"")}})),Object(C.a)(O,w,(function(e,t){return{arrayColor:e.arrayColor.map((function(e,r){return t.id===r?t.color:e}))}})),Object(C.a)(O,R,(function(e,t){return{arrayColor:e.arrayColor.filter((function(e,r){return t.id!==r}))}})),O),{arrayColor:[]});var k=Object(m.b)(null,{updateColor:function(e,t){return{type:w,id:e,color:t}},deleteColor:function(e){return{type:R,id:e}}})((function(e){var t=Object(o.useState)(e.color),r=Object(u.a)(t,2),n=r[0],c=r[1],a=Object(o.useState)(!1),l=Object(u.a)(a,2),i=l[0],j=l[1],f=Object(o.useRef)(null);function b(){var e,t;i&&(null===(e=f.current)||void 0===e||e.setAttribute("type","text"),null===(t=f.current)||void 0===t||t.setAttribute("type","color"),j(!1))}return Object(o.useEffect)((function(){return c(e.color),document.addEventListener("mouseup",b,!1),document.removeEventListener("mouseup",b,!1)}),[e]),Object(o.useEffect)((function(){var t;e.click&&(null===(t=f.current)||void 0===t||t.click(),j(!0))}),[e.click]),Object(s.jsxs)("div",{className:"containerColor",children:[Object(s.jsx)("input",{type:"color",value:n,onChange:function(t){c(t.target.value),j(!0),e.updateColor(e.id,t.target.value)},ref:f}),Object(s.jsx)("button",{className:"delete",onClick:function(){e.deleteColor(e.id)},children:"x"})]})}));r(32);var L=Object(m.b)((function(e){return{arrayColor:e.arrayColor}}),{addColor:function(e){return{type:E,color:e}}})((function(e){var t=Object(o.useState)(0),r=Object(u.a)(t,2),n=r[0],c=r[1];return Object(s.jsxs)("div",{className:"palette",children:[e.arrayColor&&e.arrayColor.map((function(e,t){return Object(s.jsx)(k,{color:e,id:t,click:t===n},t)})),Object(s.jsx)("button",{onClick:function(){c(e.arrayColor.length),e.addColor("#ffffff")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0446\u0432\u0435\u0442"})]})})),D=function(){return Object(s.jsx)(m.a,{store:Object(y.a)(S),children:Object(s.jsx)(L,{})})},P=(r(33),r(16)),N=r(3),A=function(){return Object(s.jsx)(P.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(P.b,{to:"/form",children:"Form"})}),Object(s.jsx)("li",{children:Object(s.jsx)(P.b,{to:"/palette",children:"Palette"})})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(N.c,{children:[Object(s.jsx)(N.a,{path:"/form",children:Object(s.jsx)(x,{})}),Object(s.jsx)(N.a,{path:"/palette",children:Object(s.jsx)(D,{})})]})]})})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.42596dc2.chunk.js.map