import{M as e,N as t}from"./calfSystem-47fc08ae.js"
function o(o){const c=e(o.elements).filter((e=>!["button","submit"].includes(e.type))).filter((e=>"checkbox"!==e.type||e.checked)).map((e=>`${e.name}=${e.value}`)).join("&")
window.location=`${t}?${c}`}export{o as f}
//# sourceMappingURL=formToUrl-e4e5b8f2.js.map