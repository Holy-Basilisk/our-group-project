(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".open-menu-button"),c=document.querySelector(".close-menu-btn"),o=document.querySelector(".mob-menu"),s=document.querySelector("body");document.addEventListener("click",function(e){const t=o.contains(e.target),r=n.contains(e.target);!t&&!r&&o.classList.contains("open")&&(o.classList.remove("open"),headerContainer.classList.remove("no-scroll"))}),n.addEventListener("click",function(){o.classList.add("open"),s.classList.add("no-scroll")}),c.addEventListener("click",function(){o.classList.remove("open"),s.classList.remove("no-scroll")}),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".mob-item-link.first-item").addEventListener("click",function(){this.classList.toggle("active")})})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".header-item-link, .mob-item-link");n.forEach(c=>{c.addEventListener("click",function(o){n.forEach(s=>s.classList.remove("active")),this.classList.add("active")})})});document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("main-img");document.querySelectorAll(".thumbnail").forEach(o=>{o.addEventListener("click",function(){const s=n.src,e=n.srcset,t=this.src,r=this.srcset;n.src=t,n.srcset=r,this.src=s,this.srcset=e,n.style.transform="scale(1.05)",setTimeout(()=>{n.style.transform="scale(1)"},300)})})});
//# sourceMappingURL=commonHelpers.js.map
