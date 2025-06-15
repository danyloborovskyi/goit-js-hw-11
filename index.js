import{a as h,S as m,i as p}from"./assets/vendor-Bz4lgVUE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="50839747-8e280c8a680bf22042cf2c364";function g(i){const o={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return h.get("https://pixabay.com/api/",{params:o}).then(r=>r.data)}const u=document.querySelector(".loader");let l=null;function L(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:n,downloads:d})=>`
        <li>
            <a href="${r}">
                <img src="${o}" width="300" alt="${s}">
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
                        <p>${d}</p>
                    </li>
                </ul>
            </a>
        </li>
    `).join("")}function b(i){i.innerHTML=""}function f(){l?l.refresh():l=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function S(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}const v=document.querySelector(".form"),a=document.querySelector('[name="search-text"]'),c=document.querySelector(".gallery");v.addEventListener("submit",$);function $(i){i.preventDefault();const o=a.value.trim();o&&(b(c),S(),g(o).then(r=>{r.hits.length>0?(console.log(r),c.innerHTML=L(r.hits),f()):p.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>console.log(r)).finally(()=>{q(),a.value=""}))}f();
//# sourceMappingURL=index.js.map
