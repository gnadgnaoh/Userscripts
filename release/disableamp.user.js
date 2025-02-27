// ==UserScript==
// @name Disable AMP 
// @namespace    adguard
// @version      1.0.61
// @downloadURL https://raw.githubusercontent.com/gnadgnaoh/Userscripts/release/release/disableamp.user.js
// @updateURL https://raw.githubusercontent.com/gnadgnaoh/Userscripts/release/release/disableamp.meta.js
// @homepageURL  https://adguard.com/
// @author       AdGuard
// @include      https://www.google.*/*
// @include      https://news.google.*/*
// @include      https://yandex.*/*
// @include      https://*.turbopages.org/*
// @include      https://*/amp/*
// @include      https://*/*/amp/*
// @include      https://amp.*
// @include      https://*/*/amp
// @include      https://*/*.amp*
// @include      https://*/*-amp*
// @include      https://*/*_amp*
// @include      https://*/*=amp*
// @include      https://*/?amp*
// @include      https://*/*&amp*
// @include      https://*/*&amp=1*
// @include      https://*?amp=*
// @include      https://*/*?amp=1*
// @include      https://*/amp-*/*
// @include      https://*/ampNews/*
// @include      https://*/NewsViewAmp/*
// @include      https://*/*/amp_articleshow/*
// @include      https://*/*/?noamp=*
// @exclude      https://www.orfonline.org/*
// @exclude      https://tehnichka.pro/*
// @exclude      https://www.onmanorama.com/*
// @exclude      https://xn----7sbbeeptbfadjdvm5ab9bqj.xn--p1ai/*
// @exclude      https://yandex.ru/turbo/s/terrnews.com/*
// @exclude      https://amp.dev/*
// @run-at       document-end
// ==/UserScript==
!function(){"use strict";var t=/(amp\/|amp-|\.amp)/,e=["#amp-mobile-version-switcher > a",'head > link[rel="canonical"]'],r=function(t){new MutationObserver(t).observe(document,{childList:!0,subtree:!0})},n=function(){var t=e.reduce((function(t,e){return t||document.querySelector(e)}),null);if(!t)return null;if(!function(t){try{return new URL(t),!0}catch(t){return!1}}(t.href))return null;var r=new URL(t.href);return r.searchParams.has("amp")&&r.searchParams.delete("amp"),r.href},a=function(t){var e=t.querySelector('[aria-label="AMP logo"], [aria-label="Logo AMP"]');e&&(e.style.display="none")};function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var c,u,l,s="https://",f=["ping","data-ved","data-amp-cur","data-amp-title","data-amp","data-amp-vgi","jsaction"],d="google.";u=(c=document.location).href,l=c.origin,u.includes("https://yandex.ru/turbo")||u.includes("turbopages.org")?function(){var t=n();if(t)document.location.href=t;else{var e=document.querySelector('script[data-name="post-message"][data-message]');if(e&&t){var r=e.getAttribute("data-message"),a=JSON.parse(r);a&&a.originalUrl&&(document.location.href=a.originalUrl)}}}():(l.includes(d)&&u.includes("/search")&&r((function(){var t=document.querySelectorAll("a[data-ved]:has(> div[class] > span + svg)"),e=[];t.forEach((function(t){var r=t.previousElementSibling;r&&r.hasAttribute("data-ved")&&e.push(r)}));var r=document.querySelectorAll("a[data-amp]"),n=document.querySelectorAll("a[data-amp-vgi]");[].concat(o(r),o(n),o(t),e).forEach((function(t){f.forEach((function(e){t.removeAttribute(e)}))}))})),l.includes(d)||function(){if(document.querySelector('script[src^="https://cdn.ampproject.org/"]')){var t=n();t&&(document.location.href=t)}}(),l.includes("news.google.")?r((function(){window.self===window.top&&document.querySelectorAll("article > a[jslog]").forEach((function(e){var r=function(e){var r,n=e.substring(e.indexOf(":")+1,e.indexOf("; track:click,vis"));try{r=JSON.parse(atob(n))}catch(t){}if(!r)return null;var a=r.filter((function(t){return"string"==typeof t&&(t.startsWith("http")||t.startsWith("https"))}));return a.length<2?null:a.find((function(e){return!t.test(e)}))||null}(e.getAttribute("jslog"));r&&function(t,e){t.setAttribute("href",e),t.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),document.location.href=e}),!0),a(t)}(e,r)}))})):r((function(){document.querySelectorAll("a[data-amp-cdn]").forEach((function(t){var e=t.href;e.includes("cdn.ampproject.org")&&(e=s+e.substr(e.indexOf("cdn.ampproject.org/wp/s/")+24)),e.substr(8).startsWith("amp.")&&(e=s+e.substr(12)),(e=e.replace("?amp&","?&"))!==t.href&&(t.setAttribute("href",e),t.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),document.location.href=e}),!0),a(t))}))})))}();