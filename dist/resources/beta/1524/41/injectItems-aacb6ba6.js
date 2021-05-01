import{c as a}from"./createAnchor-339a68ff.js"
import{c as n}from"./createLi-5a392c53.js"
import{z as e,ad as i,o as t,t as s,h as o,W as r,X as c,c2 as l,c3 as f,c4 as d,c5 as u,E as v,c6 as g,a3 as h,bK as m,aB as p,I as L,c7 as k,Y as y,Z as $,c8 as j,b_ as B,a9 as N}from"./calfSystem-587dd8d3.js"
import{i as b}from"./insertElementAfter-0677ffc1.js"
import{i as G}from"./insertHtmlAfterEnd-1470722f.js"
import{c as M}from"./currentGuildId-f1814c84.js"
import{i as w}from"./insertHtmlBeforeBegin-791898ec.js"
import"./insertElementBefore-2bf2da7f.js"
function I(a,n,t){const s=e(a)
if(s instanceof Node){n(s.parentNode,t)}else i(`#${a} is not a Node`,!1)}function x(a,n){r("accordion",a),c(n)}function A(a,n){b(n,a)}function E(e,i,r,c){const l=n({className:`nav-level-${e}`}),f=a({className:"nav-link fshPoint",textContent:i})
t(f,s(x,i,r)),o(l,f),I(c,A,l)}function P(a){!function(a){a.recipeManagerLink&&E("1","Recipe Manager",g,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&I("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${h}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&I("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${m}${p}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&L("keepBuffLog")&&E("1","Buff Log",k,"nav-character-log")}(a),function(a){a.combatLogLink&&L("keepLogs")&&E("1","Combat Logs",y,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&L("showMonsterLog")&&E("1","Creature Logs",$,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&E("1","Quick Links",j,"nav-character-notepad")}(a)}function C(a,n,e){P(e),function(a){a.auctionSearchLink&&E("2","AH Quick Search",l,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&E("2","Online Players",f,"nav-actions-interaction-findplayer"),a.findOtherLink&&E("2","Find Other",d,"nav-actions-interaction-findplayer"),a.findBuffsLink&&E("2","Find Buffs",u,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&M()&&I("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${h}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&M()&&!L("useNewGuildLog")&&I("nav-guild-ledger-guildlog",w,`<li class="nav-level-2"><a class="nav-link" href="${B}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&I("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${N}toprated${p}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=v("#nav > li").map((a=>22*v("li",a).length||null)),-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export default C
//# sourceMappingURL=injectItems-aacb6ba6.js.map
