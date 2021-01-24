import{c as a}from"./createAnchor-33fc6750.js"
import{c as n}from"./createLi-582e821e.js"
import{y as e,aa as i,o as t,t as s,h as o,U as r,V as c,c0 as l,c1 as f,c2 as u,c3 as d,D as v,c4 as g,a0 as h,bH as m,ap as p,H as L,c5 as k,W as y,X as $,c6 as b,bX as j,a6 as N}from"./calfSystem-47fc08ae.js"
import{i as B}from"./insertElementAfter-0a3fba9c.js"
import{i as G}from"./insertHtmlAfterEnd-5cf43170.js"
import{c as M}from"./currentGuildId-72bd2a1a.js"
import{i as w}from"./insertHtmlBeforeBegin-330f485a.js"
import"./insertElementBefore-43970b1f.js"
function H(a,n,t){const s=e(a)
if(s instanceof Node){n(s.parentNode,t)}else i(`#${a} is not a Node`,!1)}function x(a,n){r("accordion",a),c(n)}function A(a,n){B(n,a)}function I(e,i,r,c){const l=n({className:`nav-level-${e}`}),f=a({className:"nav-link fshPoint",textContent:i})
t(f,s(x,i,r)),o(l,f),H(c,A,l)}function P(a){!function(a){a.recipeManagerLink&&I("1","Recipe Manager",g,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&H("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${h}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&H("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${m}${p}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&L("keepBuffLog")&&I("1","Buff Log",k,"nav-character-log")}(a),function(a){a.combatLogLink&&L("keepLogs")&&I("1","Combat Logs",y,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&L("showMonsterLog")&&I("1","Creature Logs",$,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&I("1","Quick Links",b,"nav-character-notepad")}(a)}function C(a,n,e){P(e),function(a){a.auctionSearchLink&&I("2","AH Quick Search",l,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&I("2","Online Players",f,"nav-actions-interaction-findplayer"),a.findOtherLink&&I("2","Find Other",u,"nav-actions-interaction-findplayer"),a.findBuffsLink&&I("2","Find Buffs",d,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&M()&&H("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${h}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&M()&&!L("useNewGuildLog")&&H("nav-guild-ledger-guildlog",w,`<li class="nav-level-2"><a class="nav-link" href="${j}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&H("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${N}toprated${p}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=v("#nav > li").map((a=>22*v("li",a).length||null)),-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export default C
//# sourceMappingURL=injectItems-a4816b36.js.map