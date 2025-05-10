// ==UserScript==
// @name                Web CPU Tamer
// @namespace           http://tampermonkey.net/
// @version             2025.101.7
// @license             MIT License
// @author              CY Fung
// @match               https://*/*
// @match               http://*/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/7b34986ad9cdf3af8766e54b0aecb394b036e970/icons/web-cpu-tamer.svg
// @supportURL          https://github.com/cyfung1031/userscript-supports

// @run-at              document-start
// @inject-into         auto
// @grant               none
// @allFrames           true


// @downloadURL https://raw.githubusercontent.com/gnadgnaoh/Userscripts/release/release/Web20CPU20Tamer.user.js
// @updateURL https://raw.githubusercontent.com/gnadgnaoh/Userscripts/release/release/Web20CPU20Tamer.meta.js
// ==/UserScript==
(e=>{"use strict";const[t,n,o,i,r,c]=e,a=queueMicrotask,u="object"==typeof window.wrappedJSObject?window.wrappedJSObject:"object"==typeof unsafeWindow?unsafeWindow:this instanceof Window?this:window,m="nzsxclvflluv";if(u[m])throw new Error("Duplicated Userscript Calling");u[m]=!0;const s=(async()=>{})().constructor;let l,f=()=>{};const w=()=>l=new s((e=>{f=e}));w();const d=document.createComment("--WebCPUTamer--");let p,T=0,b=null;function y(){b!==l&&(b=l,T=1+(7&T),d.data=1&T?"++WebCPUTamer++":"--WebCPUTamer--")}if("function"==typeof DocumentTimeline)p=new DocumentTimeline;else if("function"==typeof Animation){let e=Animation,t=document.documentElement;t&&(t=t.animate(null),"object"==typeof(t||0)&&"_animation"in t&&t.constructor===Object&&(t=t._animation),"object"==typeof(t||0)&&"timeline"in t&&"function"==typeof t.constructor&&(e=t.constructor));p=(new e).timeline}p&&Number.isFinite(p.currentTime||null)||(p=new class{constructor(){this.startTime=performance.timeOrigin||performance.now()}get currentTime(){return performance.now()-this.startTime}});const h=p;new MutationObserver((()=>{f(),w()})).observe(d,{characterData:!0});const v=new Set,j=new Set,A=async e=>(v.add(e),b!==l&&a(y),await l,b!==l&&a(y),await l,v.delete(e)),F=e=>{a((()=>{throw e}))},I=2**-26;setTimeout=function(e,n=void 0,...o){let i;const r="function"==typeof e?(...t)=>{A(i).then((n=>{n&&e(...t)})).catch(F)}:e;return n>=1&&(n-=I),i=t(r,n,...o),i},setInterval=function(e,t=void 0,...o){let i;const r="function"==typeof e?(...t)=>{A(i).then((n=>{n&&e(...t)})).catch(F)}:e;return t>=1&&(t-=I),i=n(r,t,...o),i},clearTimeout=function(e){return v.delete(e),i(e)},clearInterval=function(e){return v.delete(e),r(e)},requestAnimationFrame=function(e){let t;const n=l;return b!==l&&a(y),t=o((o=>{const i=h.currentTime;(async(e,t)=>(j.add(e),await t,j.delete(e)))(t,n).then((t=>{t&&e(o+(h.currentTime-i))})).catch(F)})),t},cancelAnimationFrame=function(e){return j.delete(e),c(e)};if("object"==typeof window.wrappedJSObject&&"object"==typeof unsafeWindow&&"function"==typeof exportFunction||"object"==typeof GM&&"content"===((GM||0).info||0).injectInto){const e=(e,t)=>{"function"==typeof exportFunction?exportFunction(e,u,{defineAs:t,allowCrossOriginArguments:!0}):u[t]=e};e(setTimeout,"setTimeout"),e(setInterval,"setInterval"),e(requestAnimationFrame,"requestAnimationFrame"),e(clearTimeout,"clearTimeout"),e(clearInterval,"clearInterval"),e(cancelAnimationFrame,"cancelAnimationFrame"),e((()=>1),`webCPUTamer_${Math.floor(314159265359*Math.random()+314159265359).toString(36)}`)}})([setTimeout,setInterval,requestAnimationFrame,clearTimeout,clearInterval,cancelAnimationFrame]);