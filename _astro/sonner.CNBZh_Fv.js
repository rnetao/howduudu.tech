import{j as a}from"./jsx-runtime.D_zvdyIk.js";import{r as m}from"./index.CGj_12n1.js";import{c as d,T as z,C as N}from"./index.CMmnwFkn.js";import"./index.DpOiFsFP.js";import"./index.BYTYdgnZ.js";/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],_=d("info",b);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],M=d("loader-circle",j);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],S=d("octagon-x",A);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],w=d("triangle-alert",T);var C=(t,s,p,c,n,r,h,u)=>{let o=document.documentElement,y=["light","dark"];function i(e){(Array.isArray(t)?t:[t]).forEach(l=>{let g=l==="class",k=g&&r?n.map(f=>r[f]||f):n;g?(o.classList.remove(...k),o.classList.add(r&&r[e]?r[e]:e)):o.setAttribute(l,e)}),v(e)}function v(e){u&&y.includes(e)&&(o.style.colorScheme=e)}function x(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(c)i(c);else try{let e=localStorage.getItem(s)||p,l=h&&e==="system"?x():e;i(l)}catch{}},$=m.createContext(void 0),E={setTheme:t=>{},themes:[]},L=()=>{var t;return(t=m.useContext($))!=null?t:E};m.memo(({forcedTheme:t,storageKey:s,attribute:p,enableSystem:c,enableColorScheme:n,defaultTheme:r,value:h,themes:u,nonce:o,scriptProps:y})=>{let i=JSON.stringify([p,s,r,t,u,h,c,n]).slice(1,-1);return m.createElement("script",{...y,suppressHydrationWarning:!0,nonce:typeof window>"u"?o:"",dangerouslySetInnerHTML:{__html:`(${C.toString()})(${i})`}})});const J=({...t})=>{const{theme:s="system"}=L();return a.jsx(z,{theme:s,className:"toaster group",icons:{success:a.jsx(N,{className:"size-4"}),info:a.jsx(_,{className:"size-4"}),warning:a.jsx(w,{className:"size-4"}),error:a.jsx(S,{className:"size-4"}),loading:a.jsx(M,{className:"size-4 animate-spin"})},style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)","--border-radius":"var(--radius)"},...t})};export{J as Toaster};
