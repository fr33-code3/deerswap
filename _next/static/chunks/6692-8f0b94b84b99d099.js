"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6692],{74409:function(n,e,t){t.d(e,{Z:function(){return C}});var r=t(85893),o=(t(67294),t(80613)),i=t(14795),c=t(76108);function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var f=function(n){return(0,r.jsx)(c.Z,function(n){for(var e=arguments,t=function(t){var r=null!=e[t]?e[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),o.forEach((function(e){u(n,e,r[e])}))},r=1;r<arguments.length;r++)t(r);return n}({viewBox:"0 0 24 25"},n,{children:(0,r.jsx)("path",{d:"M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"})}))},l=t(57875),a=t(186),s=t(8821),b=t(684);function d(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function p(){var n=d(["\n  width: 16px;\n"]);return p=function(){return n},n}function h(){var n=d(["\n  margin-left: 4px;\n  text-align: right;\n  color: ",";\n  white-space: nowrap;\n"]);return h=function(){return n},n}function g(){var n=d(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  padding: 8px 16px;\n"]);return g=function(){return n},n}function O(){var n=d(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ",";\n  border: none;\n\n  ::placeholder {\n    color: ",";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"]);return O=function(){return n},n}var w=(0,a.ZP)(b.Z).withConfig({componentId:"sc-e3b8048d-0"}).withConfig({componentId:"sc-1e40f9fa-0"})(p()),v=(0,a.ZP)(l.Z).withConfig({componentId:"sc-e3b8048d-1"}).withConfig({componentId:"sc-1e40f9fa-1"})(h(),(function(n){return n.theme.colors.textSubtle})),y=(0,a.ZP)(i.Z).withConfig({componentId:"sc-e3b8048d-2"}).withConfig({componentId:"sc-1e40f9fa-2"})(g(),(function(n){return n.theme.colors.input}),(function(n){return n.theme.colors.inputSecondary}),(function(n){var e=n.theme,t=n.isWarning;return e.shadows[t?"warning":"inset"]})),j=(0,a.ZP)(s.Z).withConfig({componentId:"sc-e3b8048d-3"}).withConfig({componentId:"sc-1e40f9fa-3"})(O(),(function(n){var e=n.textAlign;return void 0===e?"right":e}),(function(n){return n.theme.colors.textSubtle}));function m(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function x(n){for(var e=arguments,t=function(t){var r=null!=e[t]?e[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),o.forEach((function(e){m(n,e,r[e])}))},r=1;r<arguments.length;r++)t(r);return n}function P(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var C=function(n){var e=n.value,t=n.placeholder,c=void 0===t?"0.0":t,u=n.onUserInput,a=n.currencyValue,s=n.inputProps,b=n.innerRef,d=n.isWarning,p=void 0!==d&&d,h=n.decimals,g=void 0===h?18:h,O=n.unit,m=n.switchEditingUnits,C=P(n,["value","placeholder","onUserInput","currencyValue","inputProps","innerRef","isWarning","decimals","unit","switchEditingUnits"]);return(0,r.jsx)(y,x({isWarning:p},C,{children:(0,r.jsxs)(o.Z,{justifyContent:"flex-end",children:[(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(o.Z,{alignItems:"center",children:[(0,r.jsx)(j,x({pattern:"^[0-9]*[.,]?[0-9]{0,".concat(g,"}$"),inputMode:"decimal",min:"0",value:e,onChange:function(n){n.currentTarget.validity.valid&&u(n.currentTarget.value.replace(/,/g,"."))},placeholder:c,ref:b},s)),O&&(0,r.jsx)(v,{children:O})]}),a&&(0,r.jsx)(l.Z,{fontSize:"12px",textAlign:"right",color:"textSubtle",children:a})]}),m&&(0,r.jsx)(o.Z,{alignItems:"center",pl:"12px",children:(0,r.jsx)(w,{scale:"sm",variant:"text",onClick:m,children:(0,r.jsx)(f,{color:"textSubtle"})})})]})}))}},19492:function(n,e,t){var r=t(85893),o=t(67294),i=t(186),c=t(67084),u=t(37462),f=t(33439);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function s(){var n,e,t=(n=["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return s=function(){return t},t}var b=i.ZP.img.withConfig({componentId:"sc-4306e9c2-0"}).withConfig({componentId:"sc-4e4fe910-0"})(s());e.Z=function(n){var e=n.src,t=n.alt,i=n.width,s=n.height,d=a(n,["src","alt","width","height"]),p=(0,o.useRef)(null),h=(0,o.useState)(!1),g=h[0],O=h[1];return(0,o.useEffect)((function(){var n,e=window.IntersectionObserver;return p.current&&e&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(O(!0),"function"===typeof(null===n||void 0===n?void 0:n.disconnect)&&n.disconnect())}))}),c.Z)).observe(p.current),function(){"function"===typeof(null===n||void 0===n?void 0:n.disconnect)&&n.disconnect()}}),[e]),(0,r.jsx)(u.Z,function(n){for(var e=arguments,t=function(t){var r=null!=e[t]?e[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),o.forEach((function(e){l(n,e,r[e])}))},r=1;r<arguments.length;r++)t(r);return n}({ref:p,height:s,width:i},d,{children:g?(0,r.jsx)(b,{src:e,alt:t}):(0,r.jsx)(f.Z,{})}))}},33439:function(n,e,t){function r(){var n,e,t=(n=["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return r=function(){return t},t}var o=t(186).ZP.div.withConfig({componentId:"sc-ba77ab76-0"}).withConfig({componentId:"sc-6a73ee98-0"})(r());e.Z=o},37462:function(n,e,t){var r=t(85893),o=t(67294),i=t(186),c=t(57247);function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function f(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function l(){var n,e,t=(n=["\n  max-height: ","px;\n  max-width: ",'px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: "";\n    display: block;\n    padding-top: ',"%;\n  }\n\n  ","\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return l=function(){return t},t}var a=i.ZP.div.withConfig({componentId:"sc-c1f44966-0"}).withConfig({componentId:"sc-9f62afae-0"})(l(),(function(n){return n.$height}),(function(n){return n.$width}),(function(n){var e=n.$width;return n.$height/e*100}),c.Dh),s=(0,o.forwardRef)((function(n,e){var t=n.width,o=n.height,i=f(n,["width","height"]);return(0,r.jsx)(a,function(n){for(var e=arguments,t=function(t){var r=null!=e[t]?e[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),o.forEach((function(e){u(n,e,r[e])}))},r=1;r<arguments.length;r++)t(r);return n}({ref:e,$width:t,$height:o},i))}));e.Z=s},67084:function(n,e){e.Z={root:null,rootMargin:"200px",threshold:0}},79780:function(n,e,t){var r=t(85893),o=(t(67294),t(76108));function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.Z=function(n){return(0,r.jsx)(o.Z,function(n){for(var e=arguments,t=function(t){var r=null!=e[t]?e[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),o.forEach((function(e){i(n,e,r[e])}))},r=1;r<arguments.length;r++)t(r);return n}({viewBox:"0 0 24 24"},n,{children:(0,r.jsx)("path",{d:"M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"})}))}}}]);
//# sourceMappingURL=6692-8f0b94b84b99d099.js.map