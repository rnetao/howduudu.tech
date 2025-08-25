import{r as d}from"./index.RH_Wq4ov.js";var f={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function R(){if(x)return a;x=1;var n=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function u(t,e,r){var s=null;if(r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),"key"in e){r={};for(var o in e)o!=="key"&&(r[o]=e[o])}else r=e;return e=r.ref,{$$typeof:n,type:t,key:s,ref:e!==void 0?e:null,props:r}}return a.Fragment=l,a.jsx=u,a.jsxs=u,a}var v;function h(){return v||(v=1,f.exports=R()),f.exports}var E=h();const m="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";function T(){return m[Math.floor(Math.random()*m.length)]}function C({text:n="",className:l=""}){const u=d.useRef(null);return d.useEffect(()=>{const t=u.current;if(!t)return;const e=Math.round(500/n.length),r=t.querySelectorAll("span"),s=()=>{let o=0;const p=setInterval(()=>{r.forEach((i,c)=>{n[c]===" "?i.textContent=" ":i.textContent=T()}),o++,o>=r.length&&(clearInterval(p),r.forEach((i,c)=>{i.textContent=n[c]}))},e)};return t.addEventListener("mouseenter",s),()=>{t.removeEventListener("mouseenter",s)}},[n]),E.jsx("span",{ref:u,className:l,children:n.split("").map((t,e)=>E.jsx("span",{className:"font-mono",children:t},e))})}export{C as default};
