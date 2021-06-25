import{S as t,i as n,s as e,b as i,c as s,t as a,v as o,a as r,g as c,j as u,k as p,w as d,d as m,f as l,x as f,l as h,y as g,z as b,A as v,B as x,C as w,r as y,D as C}from"./index-6ed75119.js"
import{x as F,u as $,w as k,$ as I,S as D,C as E,D as j,E as B,ay as q,p as A,aN as N,aE as S,h as _,j as T}from"./calfSystem-a2fd9017.js"
import{c as M}from"./createAnchor-1f8bf0c5.js"
import{i as R}from"./insertElementBefore-165ce171.js"
import{x as z}from"./xPath-ab263bb7.js"
function Q(t){return F({cmd:"inventing",subcmd:"doinvent",recipe_id:t})}function O(t){const n=k(t)
return n.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:n},s:!1}}function P(t){return $({cmd:"inventing",subcmd:"doinvent",recipe_id:t}).then(O)}function W(t){const n=t-1
return n*n*n+1}function G(t,{delay:n=0,duration:e=400,easing:i=W}={}){const s=getComputedStyle(t),a=+s.opacity,o=parseFloat(s.height),r=parseFloat(s.paddingTop),c=parseFloat(s.paddingBottom),u=parseFloat(s.marginTop),p=parseFloat(s.marginBottom),d=parseFloat(s.borderTopWidth),m=parseFloat(s.borderBottomWidth)
return{delay:n,duration:e,easing:i,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*a};height: ${t*o}px;padding-top: ${t*r}px;padding-bottom: ${t*c}px;margin-top: ${t*u}px;margin-bottom: ${t*p}px;border-top-width: ${t*d}px;border-bottom-width: ${t*m}px;`}}function Z(t){let n,e,l,f,h,g,b
return{c(){n=i("div"),e=i("div"),e.textContent="INFORMATION",l=s(),f=i("div"),h=a(t[4]),o(e,"background","#8E8668"),o(e,"color","#FFF"),o(e,"font-size","smaller"),o(n,"border","2px solid #FFF"),o(n,"margin","10px auto"),o(n,"width","80%"),o(n,"background","#D3CFC1")},m(t,i){r(t,n,i),c(n,e),c(n,l),c(n,f),c(f,h),b=!0},p(t,n){(!b||16&n)&&u(h,t[4])},i(t){b||(t&&p((()=>{g||(g=d(n,G,{},!0)),g.run(1)})),b=!0)},o(t){t&&(g||(g=d(n,G,{},!1)),g.run(0)),b=!1},d(t){t&&m(n),t&&g&&g.end()}}}function H(t){let n,e,p,d,F,$,k,I,D,E,j,B,q,A,N,S,_,T,M,R,z,Q,O,P,W,G,H,J,K,L=t[1]+t[2]+"",U=t[4]&&Z(t)
return{c(){n=i("form"),e=i("label"),e.textContent="Select how many to quick invent",p=s(),d=i("input"),F=s(),$=i("button"),$.textContent="(max)",k=s(),I=i("input"),D=s(),E=i("div"),U&&U.c(),j=s(),B=i("div"),q=i("div"),A=s(),N=i("p"),S=a(L),_=a(" / "),T=a(t[0]),M=s(),R=i("div"),z=i("div"),Q=a("Successes: "),O=a(t[1]),P=s(),W=i("div"),G=a("Failures: "),H=a(t[2]),l(e,"for","quick-invent-amount"),l(d,"type","number"),l(d,"id","quick-invent-amount"),l(d,"name","quick-invent-amount"),l(d,"min","0"),l(d,"step","1"),l(d,"class","custominput fshNumberInput"),d.required=!0,l($,"type","button"),l($,"class","fshBl"),l(I,"class","custombutton"),l(I,"type","submit"),I.value="Quick Invent",o(I,"margin-left","8px"),l(q,"class","composing-progress-bar"),o(q,"background-position","right top"),o(q,"width",t[3]+"%"),o(q,"transition","width 0.4s ease-out"),o(q,"position","absolute"),o(q,"top","0px"),o(N,"position","relative"),l(B,"class","composing-progress"),o(B,"margin","0px auto"),o(B,"font-weight","bold"),o(B,"color","#fff"),o(B,"left","0px"),o(z,"display","inline-block"),o(z,"width","250px"),l(z,"class","fshQs fshGreen"),o(W,"display","inline-block"),o(W,"width","250px"),l(W,"class","fshQs fshRed"),o(R,"margin-top","36px"),l(n,"class","fshCenter"),o(n,"margin-top","12px")},m(i,s){r(i,n,s),c(n,e),c(n,p),c(n,d),f(d,t[0]),c(n,F),c(n,$),c(n,k),c(n,I),c(n,D),c(n,E),U&&U.m(E,null),c(E,j),c(E,B),c(B,q),c(B,A),c(B,N),c(N,S),c(N,_),c(N,T),c(E,M),c(E,R),c(R,z),c(z,Q),c(z,O),c(R,P),c(R,W),c(W,G),c(W,H),J||(K=[h(d,"input",t[9]),h($,"click",t[5]),h(n,"submit",g(t[6]))],J=!0)},p(t,[n]){1&n&&b(d.value)!==t[0]&&f(d,t[0]),t[4]?U?(U.p(t,n),16&n&&v(U,1)):(U=Z(t),U.c(),v(U,1),U.m(E,j)):U&&(C(),x(U,1,1,(()=>{U=null})),w()),8&n&&o(q,"width",t[3]+"%"),6&n&&L!==(L=t[1]+t[2]+"")&&u(S,L),1&n&&u(T,t[0]),2&n&&u(O,t[1]),4&n&&u(H,t[2])},i(t){v(U)},o(t){x(U)},d(t){t&&m(n),U&&U.d(),J=!1,y(K)}}}function J(t,n,e){let{max:i}=n,{recipeID:s}=n,a=1,o=0,r=0,c=0,u=""
return t.$$set=t=>{"max"in t&&e(7,i=t.max),"recipeID"in t&&e(8,s=t.recipeID)},[a,o,r,c,u,function(){e(0,a=i),D("inventing","maxInventButton")},async function(){if(D("inventing","quickInvent"),!a)return
e(1,o=0),e(2,r=0),e(3,c=0),e(4,u=""),Array(a).fill(s).reduce((async(t,n)=>{const i=await t
if(!i||!0===i.s){const t=await function(t){return I(Q,P,t)}(n)
return!1===t.s?e(4,u=t.e.message):t.r.success_count>0?e(1,o+=1):e(2,r+=1),e(3,c=(o+r)/a*100),t}return i}),Promise.resolve())},i,s,function(){a=b(this.value),e(0,a)}]}class K extends t{constructor(t){super(),n(this,t,J,H,e,{max:7,recipeID:8})}}function L(t){const[n,e]=E(j("tr:nth-child(2) td",t)).split("/").map((t=>parseInt(t,10)))
return{have:n,need:e,id:j("img",t).src.match(/(\d+)\.[A-Za-z]+$/)[1]}}function U(){return B(`#pCC td[background^="${q}ui/inventory/"]`).map((t=>t.parentElement.parentElement)).map(L).reduce(((t,n)=>Math.min(t,Math.floor(n.have/n.need))),1/0)}function V(){const t=j('input[name="recipe_id"]')
if(!t)return
const n=U(),e=A.lastElementChild
var i,s
!function(t){const n=t.insertRow(-1).insertCell(-1)
n.className="header",n.setAttribute("height","1")}(e),i={max:n,recipeID:t.value},s=function(t){const n=t.insertRow(-1).insertCell(-1)
return n.className="fshCenter",n}(e),new K({props:i,target:s})}function X(t){return`${N}items${S}view&item_id=${t}`}function Y(t,n){const e=function(t){if(!t)return
const n=t.src.match(/\/items\/(\d+)\.gif/)
return n?n[1]:void 0}(n)
if(!e)return
const i=function(t){return M({href:X(t),target:"_blank"})}(e)
R(i,t),_(i,t)}function tt(t){Y(t,t)}function nt(){!function(){const t=z('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
Y(j("#pCC b"),t)}(),B('#pCC img[src*="/items/"]').forEach(tt)}function et(){T()&&(nt(),V())}export default et
//# sourceMappingURL=inventing-b6bf6799.js.map
