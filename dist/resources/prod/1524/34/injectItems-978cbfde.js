import{c as a}from"./createAnchor-e48d6052.js"
import{c as n}from"./createLi-b0b9466b.js"
import{y as e,ab as i,o as t,t as s,h as o,V as r,W as c,b_ as l,b$ as d,c0 as f,c1 as u,D as v,c2 as g,a1 as h,bF as m,ao as p,H as L,c3 as k,X as b,Y as y,c4 as $,bV as j,a7 as N}from"./calfSystem-793da633.js"
import{i as B}from"./insertElementAfter-cbb9f3a9.js"
import{i as G}from"./insertHtmlAfterEnd-7508c2c1.js"
import{c as M}from"./currentGuildId-1aba3c9c.js"
import{i as w}from"./insertHtmlBeforeBegin-b4245dd6.js"
import"./insertElementBefore-9e5d02cd.js"
function x(a,n,t){const s=e(a)
if(s instanceof Node){n(s.parentNode,t)}else i(`#${a} is not a Node`,!1)}function A(a,n){r("accordion",a),c(n)}function H(a,n){B(n,a)}function I(e,i,r,c){const l=n({className:`nav-level-${e}`}),d=a({className:"nav-link fshPoint",textContent:i})
t(d,s(A,i,r)),o(l,d),x(c,H,l)}function P(a){!function(a){a.recipeManagerLink&&I("1","Recipe Manager",g,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&x("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${h}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&x("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${m}${p}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&L("keepBuffLog")&&I("1","Buff Log",k,"nav-character-log")}(a),function(a){a.combatLogLink&&L("keepLogs")&&I("1","Combat Logs",b,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&L("showMonsterLog")&&I("1","Creature Logs",y,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&I("1","Quick Links",$,"nav-character-notepad")}(a)}function C(a,n,e){P(e),function(a){a.auctionSearchLink&&I("2","AH Quick Search",l,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&I("2","Online Players",d,"nav-actions-interaction-findplayer"),a.findOtherLink&&I("2","Find Other",f,"nav-actions-interaction-findplayer"),a.findBuffsLink&&I("2","Find Buffs",u,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&M()&&x("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${h}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&M()&&!L("useNewGuildLog")&&x("nav-guild-ledger-guildlog",w,`<li class="nav-level-2"><a class="nav-link" href="${j}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&x("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${N}toprated${p}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=v("#nav > li").map((a=>22*v("li",a).length||null)),-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export default C
//# sourceMappingURL=injectItems-978cbfde.js.map