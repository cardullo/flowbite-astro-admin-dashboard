import"./hoisted.ni8MEt0k.js";import"./hoisted.xqqrB5Wh.js";import"./hoisted.YhUe32YV.js";const c={refetchCrudData:t=>t.update(),hardReloadPage:()=>location.reload()};document.querySelectorAll("[data-action]").forEach(t=>t.addEventListener("click",e=>document.querySelectorAll("entities-crud").forEach(a=>{const o=e.target.dataset.action;console.log("Action!",o,e.target),c[o](a)})));
