import{a as c,i as l}from"./assets/vendor-BhRdrVWz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="50839747-8e280c8a680bf22042cf2c364",f=document.querySelector(".form"),m=document.querySelector('[name="search-text"]'),p=document.querySelector(".gallery");function d(i){c("https://pixabay.com/api/",{params:{key:u,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{r.data.hits.length>0?(console.log(r),p.innerHTML=y(r.data.hits)):l.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>console.log(r))}f.addEventListener("submit",h);function h(i){i.preventDefault();const o=m.value.trim();d(o)}function y(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:n,downloads:a})=>`
        <li>
            <img src="${o}" width="300" data-largeimg="${r}" alt="${s}">
            <ul>
                <li>
                    <h2>Likes</h2>
                    <p>${e}</p>
                </li>
                <li>
                    <h2>Views</h2>
                    <p>${t}</p>
                </li>
                <li>
                    <h2>Comments</h2>
                    <p>${n}</p>
                </li>
                <li>
                    <h2>Downloads</h2>
                    <p>${a}</p>
                </li>
            </ul>
        </li>
    `).join("")}
//# sourceMappingURL=index.js.map
