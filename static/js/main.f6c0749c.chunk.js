(this["webpackJsonpform-palette"]=this["webpackJsonpform-palette"]||[]).push([[0],{26:function(e,t,r){},28:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var n,c,a=r(0),o=r.n(a),l=r(13),i=r.n(l),u=(r(26),r(8)),s=r(1),j=o.a.forwardRef((function(e,t){var r=Object(a.useState)(""),n=Object(u.a)(r,2),c=n[0],o=n[1];return Object(s.jsxs)("label",{children:[e.label,Object(s.jsx)("input",{type:"text",value:c,onChange:function(e){o(/[a-z]+/i.exec(e.target.value)||"")},ref:t})]})}));function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function d(e,t){var r=e.title,o=e.titleId,l=b(e,["title","titleId"]);return a.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":o},l),r?a.createElement("title",{id:o},r):null,n||(n=a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),c||(c=a.createElement("path",{d:"M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"})))}var O,p=a.forwardRef(d),v=(r.p,o.a.forwardRef((function(e,t){var r=Object(a.useRef)(null),n=Object(a.useState)(),c=Object(u.a)(n,2),o=c[0],l=c[1];function i(e){e.preventDefault(),e.stopPropagation()}return Object(a.useEffect)((function(){var e=["dragenter","dragover","dragleave"];return r.current&&e.forEach((function(e){var t;null===(t=r.current)||void 0===t||t.addEventListener(e,i,!1)})),function(){r.current&&e.forEach((function(e){var t;null===(t=r.current)||void 0===t||t.removeEventListener(e,i,!1)}))}}),[r]),Object(s.jsxs)("div",{ref:r,className:"dropArea",onDrop:function(e){var r=e.dataTransfer.files;l(r[0].name),"object"===typeof t&&(null===t||void 0===t?void 0:t.current)&&(t.current.files=r),e.preventDefault(),e.stopPropagation()},children:["\u0424\u043e\u0442\u043e",Object(s.jsxs)("label",{children:[Object(s.jsx)("i",{className:"material-icons",children:Object(s.jsx)(p,{children:"photo_camera"})}),Object(s.jsx)("span",{className:"title",children:o||"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b"}),Object(s.jsx)("input",{type:"file",accept:"image/*",ref:t,onChange:function(){"object"===typeof t&&(null===t||void 0===t?void 0:t.current)&&l(t.current.files[0].name)},required:!0})]})]})}))),h=(r(28),[{id:"name",label:"\u0418\u043c\u044f"},{id:"surname",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"},{id:"patronymic",label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}]),m=function(){var e=Object(a.useRef)(null),t=[Object(a.useRef)(null),Object(a.useRef)(null),Object(a.useRef)(null)],r=Object(a.useState)(""),n=Object(u.a)(r,2),c=n[0],l=n[1];return Object(s.jsxs)(o.a.Fragment,{children:[Object(s.jsxs)("form",{onSubmit:function(r){var n,c=new FormData;c.append("action","send_data"),c.append("id","1");var a=(null===(n=e.current)||void 0===n?void 0:n.files)||[""];c.append("image",a[0]),c.append("contact","[".concat(t.map((function(e){var t;return null===(t=e.current)||void 0===t?void 0:t.value.toString()})),"]")),fetch("https://test-job.pixli.app/send.php",{method:"POST",body:c}).then((function(e){return e.ok?e.text():""})).then((function(e){return l(e)})),r.preventDefault()},children:[h.map((function(e,r){return Object(s.jsx)(j,{ref:t[r],label:e.label},r)})),Object(s.jsx)(v,{ref:e}),Object(s.jsx)("input",{type:"submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(s.jsxs)("label",{children:["Response",Object(s.jsx)("textarea",{value:c,readOnly:!0})]})]})},x=r(10),y=r(15),C=r(38),g="ADD_COLOR",E="UPDATE_COLOR",w="DELETE_COLOR",R=Object(C.a)((O={},Object(y.a)(O,g,(function(e,t){return{arrayColor:e.arrayColor.concat(t.color||"")}})),Object(y.a)(O,E,(function(e,t){return{arrayColor:e.arrayColor.map((function(e,r){return t.id===r?t.color:e}))}})),Object(y.a)(O,w,(function(e,t){return{arrayColor:e.arrayColor.filter((function(e,r){return t.id!==r}))}})),O),{arrayColor:[]});var S=Object(x.b)(null,{updateColor:function(e,t){return{type:E,id:e,color:t}},deleteColor:function(e){return{type:w,id:e}}})((function(e){var t=Object(a.useState)(e.color),r=Object(u.a)(t,2),n=r[0],c=r[1],o=Object(a.useState)(!1),l=Object(u.a)(o,2),i=l[0],j=l[1],f=Object(a.useRef)(null);function b(){var e,t;i&&(null===(e=f.current)||void 0===e||e.setAttribute("type","text"),null===(t=f.current)||void 0===t||t.setAttribute("type","color"),j(!1))}return Object(a.useEffect)((function(){return c(e.color),document.addEventListener("mouseup",b,!1),document.removeEventListener("mouseup",b,!1)}),[e]),Object(a.useEffect)((function(){var t;e.click&&(null===(t=f.current)||void 0===t||t.click(),j(!0))}),[e.click]),Object(s.jsxs)("div",{className:"containerColor",children:[Object(s.jsx)("input",{type:"color",value:n,onChange:function(t){c(t.target.value),j(!0),e.updateColor(e.id,t.target.value)},ref:f}),Object(s.jsx)("button",{className:"delete",onClick:function(){e.deleteColor(e.id)},children:"x"})]})}));r(32);var k=Object(x.b)((function(e){return{arrayColor:e.arrayColor}}),{addColor:function(e){return{type:g,color:e}}})((function(e){var t=Object(a.useState)(0),r=Object(u.a)(t,2),n=r[0],c=r[1];return Object(s.jsxs)("div",{className:"palette",children:[e.arrayColor&&e.arrayColor.map((function(e,t){return Object(s.jsx)(S,{color:e,id:t,click:t===n},t)})),Object(s.jsx)("button",{onClick:function(){c(e.arrayColor.length),e.addColor("#ffffff")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0446\u0432\u0435\u0442"})]})})),L=(r(33),r(16)),D=r(3),P=function(){return Object(s.jsx)(L.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(L.b,{to:"/form",children:"Form"})}),Object(s.jsx)("li",{children:Object(s.jsx)(L.b,{to:"/palette",children:"Palette"})})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(D.c,{children:[Object(s.jsx)(D.a,{path:"/form",children:Object(s.jsx)(m,{})}),Object(s.jsx)(D.a,{path:"/palette",children:Object(s.jsx)(k,{})})]})]})})},N=r(21);i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(x.a,{store:Object(N.a)(R),children:Object(s.jsx)(P,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f6c0749c.chunk.js.map