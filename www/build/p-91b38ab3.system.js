System.register(["./p-5a07688c.system.js"],(function(t,e){"use strict";var r,n,c,o,s,i;return{setters:[function(t){r=t.p;n=t.w;c=t.d;o=t.N;s=t.a;i=t.b}],execute:function(){var t=function(t){return"__sc_import_".concat(t.replace(/\s|-/g,"_"))};var a=function(){{r.$cssShim$=n.__cssshim}var t=Array.from(c.querySelectorAll("script")).find((function(t){return new RegExp("/".concat(o,"(\\.esm)?\\.js($|\\?|#)")).test(t.src)||t.getAttribute("data-stencil-namespace")===o}));var i=t["data-opts"]||{};if("onbeforeload"in t&&!history.scrollRestoration){return{then:function(){}}}{i.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,n.location.href)).href;{u(i.resourcesUrl,t)}if(!n.customElements){return e.import("./p-b212814c.system.js").then((function(){return i}))}}return s(i)};var u=function(e,r){var s=t(o);try{n[s]=new Function("w","return import(w);//".concat(Math.random()))}catch(a){var i=new Map;n[s]=function(t){var o=new URL(t,e).href;var a=i.get(o);if(!a){var u=c.createElement("script");u.type="module";u.crossOrigin=r.crossOrigin;u.src=URL.createObjectURL(new Blob(["import * as m from '".concat(o,"'; window.").concat(s,".m = m;")],{type:"application/javascript"}));a=new Promise((function(t){u.onload=function(){t(n[s].m);u.remove()}}));i.set(o,a);c.head.appendChild(u)}return a}}};a().then((function(t){return i([["p-136e8631.system",[[1,"my-component",{first:[1],middle:[1],last:[1]}]]]],t)}))}}}));