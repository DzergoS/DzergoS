import{S as g,P as h,W as b,a as v,A as S,O as L,M as x,C as q,b as E,B as P,c as M,d as O}from"./vendor.eaa433c2.js";const A=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};A();const a=new g,d=new h(45,window.innerWidth/window.innerHeight,1,1e3),c=new b({canvas:document.querySelector("#bg")});c.setPixelRatio(window.devicePixelRatio);c.setSize(window.innerWidth,window.innerHeight);d.position.setZ(30);c.render(a,d);const f=new v(16777215);f.position.set(20,20,20);const C=new S(16777215);a.add(f,C);const k=new L(d,c.domElement);let p,r,l,w,u,z=document.querySelector(".menu");function F(){if(p=document.querySelector("select").value,r=document.querySelector("input").value,!document.querySelector("input").value)return alert("no size");switch(w=new x({color:16776960}),p){case"\u041A\u0443\u0431":l=new P(r,r,r);break;case"\u0421\u0444\u0435\u0440\u0430":l=new E(r,r,r);break;case"\u041F\u0438\u0440\u0430\u043C\u0438\u0434\u0430":l=new q(r,r,4);break}u=new M(l,w);const[o,n,i]=Array(3).fill().map(()=>O.randFloatSpread(100));u.position.set(o,n,i),a.add(u),G(u)}function G(o){let n=document.createElement("p"),i=document.createElement("button"),s=document.createElement("img");const e=document.createTextNode(o.uuid);i.onclick=()=>{a.remove(o),n.remove()},s.src="./close.png",i.appendChild(s),n.append(e,i),z.append(n)}const N=document.querySelector("form");N.addEventListener("submit",o=>{o.preventDefault(),F()});function y(){requestAnimationFrame(y),k.update(),c.render(a,d)}y();
