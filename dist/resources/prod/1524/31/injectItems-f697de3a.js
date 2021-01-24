import{c as a}from"./createAnchor-48441df8.js"
import{c as n}from"./createLi-d50677c3.js"
import{y as e,aa as i,o as t,t as s,h as o,U as r,V as c,bZ as l,b_ as f,b$ as d,c0 as u,D as v,c1 as g,a0 as h,bE as m,an as p,H as L,c2 as k,W as y,X as b,c3 as $,bU as j,a6 as N}from"./calfSystem-7aee5245.js"
import{i as B}from"./insertElementAfter-c928b354.js"
import{i as G}from"./insertHtmlAfterEnd-ac29d90e.js"
import{c as M}from"./currentGuildId-2e15c82d.js"
import{i as w}from"./insertHtmlBeforeBegin-20c824ca.js"
import"./insertElementBefore-43970b1f.js"
function x(a,n,t){const s=e(a)
if(s instanceof Node){n(s.parentNode,t)}else i(`#${a} is not a Node`,!1)}function A(a,n){r("accordion",a),c(n)}function E(a,n){B(n,a)}function H(e,i,r,c){const l=n({className:`nav-level-${e}`}),f=a({className:"nav-link fshPoint",textContent:i})
t(f,s(A,i,r)),o(l,f),x(c,E,l)}function I(a){!function(a){a.recipeManagerLink&&H("1","Recipe Manager",g,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&x("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${h}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&x("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${m}${p}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&L("keepBuffLog")&&H("1","Buff Log",k,"nav-character-log")}(a),function(a){a.combatLogLink&&L("keepLogs")&&H("1","Combat Logs",y,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&L("showMonsterLog")&&H("1","Creature Logs",b,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&H("1","Quick Links",$,"nav-character-notepad")}(a)}function P(a,n,e){I(e),function(a){a.auctionSearchLink&&H("2","AH Quick Search",l,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&H("2","Online Players",f,"nav-actions-interaction-findplayer"),a.findOtherLink&&H("2","Find Other",d,"nav-actions-interaction-findplayer"),a.findBuffsLink&&H("2","Find Buffs",u,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&M()&&x("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${h}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&M()&&!L("useNewGuildLog")&&x("nav-guild-ledger-guildlog",w,`<li class="nav-level-2"><a class="nav-link" href="${j}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&x("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${N}toprated${p}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=v("#nav > li").map((a=>22*v("li",a).length||null)),-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export default P
//# sourceMappingURL=injectItems-f697de3a.js.map