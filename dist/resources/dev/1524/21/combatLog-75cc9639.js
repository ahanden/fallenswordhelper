import{x as t,A as o,y as e,o as a,p as n}from"./calfSystem-9c7241dc.js"
import{g as r,s}from"./idb-5f8a9591.js"
import{j as l}from"./jConfirm-08e79955.js"
let i,c,u=[]
function p(){c.focus(),c.select()}function g(){u=[],c.value="[]",s("fsh_combatLog",u)}function d(){l("Clear Combat Log","Are you sure you want to clear your log?",g)}function m(t){t&&(u=t),o(`<h1>Combat Logs</h1><br /><form action="http://evolutions.yvong.com/fshlogparser.php" method="post" target="_blank"><div align="center"><textarea align="center" cols="80" rows="25" readonly style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="combatLog" name="logs">${JSON.stringify(u)}</textarea></div><br /><br /><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr><tr><td align="center" colspan="4"><b>Log Parser</b></td></tr><tr><td colspan="4" align="center">WARNING: this links to an external site not related to HCS.<br />If you wish to visit site directly URL is: http://evolutions.yvong.com/fshlogparser.php<br /><tr><td colspan=4 align="center"><input type="hidden" value="true" name="submit"><input type="submit" value="Analyze!"></td></tr></table></div></form>`,i),c=e("combatLog"),a(e("copyLog"),p),a(e("clearLog"),d)}export default function(o){t()||(i=o||n,r("fsh_combatLog").then(m))}
//# sourceMappingURL=combatLog-75cc9639.js.map
