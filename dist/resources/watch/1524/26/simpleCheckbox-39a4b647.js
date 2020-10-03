import { G as getValue, a3 as fallback } from './calfSystem-c851a12c.js';
import { i as isChecked } from './isChecked-4820f42a.js';

function isValueChecked(pref) {
  return isChecked(getValue(pref));
}

var moveGuildList={helpTitle:"Move Guild Info List",helpText:"This will Move the Guild Info List higher on the bar on the right"};var moveOnlineAlliesList={helpTitle:"Move Online Allies List",helpText:"This will Move the Online Allies List higher on the bar on the right"};var enableOnlineAlliesWidgets={helpTitle:"Enable Online Allies Widgets",helpText:"Enabling this option will enable the Allies List Widgets (coloring on the Allies List panel)"};var moveFSBox={helpTitle:"Move FS box",helpText:"This will move the FS box to the left, under the menu, for better visibility (unless it is already hidden.)"};var moveDailyQuest={helpTitle:"Move Daily Quest",helpText:"This will move the Daily Quest to the left, under the menu, for better visibility (unless it is already hidden.)"};var gameHelpLink={helpTitle:"&quot;Game Help&quot; Settings Link",helpText:"This turns the Game Help text in the lower right box into a link to this settings page."};var enableTempleAlert={helpTitle:"Enable Temple Alert",helpText:"Puts an alert on the LHS if you have not prayed at the temple today.",network:true};var enableUpgradeAlert={helpTitle:"Enable Gold Upgrade Alert",helpText:"Puts an alert on the LHS if you have not upgraded your stamina with gold today.",network:true};var enableComposingAlert={helpTitle:"Enable Composing Alert",helpText:"Puts an alert on the LHS if you have composing slots available.",network:true};var enhanceOnlineDots={helpTitle:"Enhance Online Dots",helpText:"Enhances the green/grey dots by player names to show online/offline status."};var hideBuffSelected={helpTitle:"Hide Buff Selected",helpText:"Hides the buff selected functionality in the online allies and guild info section."};var fixBuffSelected={helpTitle:"Fix Buff Selected",helpText:"Fixes the buff selected functionality in the online allies and guild info section."};var hideHelperMenu={helpTitle:"Hide Helper Menu",helpText:"Hides the helper menu from top left."};var keepHelperMenuOnScreen={helpTitle:"Keep Helper Menu On Screen",helpText:"Keeps helper menu on screen as you scroll (helper menu must be enabled to work). Also works with quick links."};var showAdmin={helpTitle:"Show rank controls",helpText:"Show ranking controls for guild management in member profile page - this works for guild founders only"};var ajaxifyRankControls={helpTitle:"AJAXify rank controls",helpText:"Enables guild founders with ranking rights to change rank positions without a screen refresh."};var detailedConflictInfo={helpTitle:"Show Conflict Details",helpText:"Inserts detailed conflict information onto your guild's manage page. Currently displays the target guild as well as the current score.",network:true};var showCombatLog={helpTitle:"Show Combat Log",helpText:"This will show the combat log for each automatic battle below the monster list."};var enableCreatureColoring={helpTitle:"Color Special Creatures",helpText:"Creatures will be colored according to their rarity. Champions will be colored green, Elites yellow and Super Elites red."};var showCreatureInfo={helpTitle:"Show Creature Info",helpText:"This will show the information from the view creature link when you mouseover the link.",network:true};var fsboxlog={helpTitle:"Enable FS Box Log",helpText:"This enables the functionality to keep a log of recent seen FS Box message."};var keepBuffLog={helpTitle:"Enable Buff Log",helpText:"This enables the functionality to keep a log of recently casted buffs"};var huntingMode={helpTitle:"Enable Hunting Mode",helpText:"This disable menu and some visual features to speed up the calf."};var hideNonPlayerGuildLogMessages={helpTitle:"Cleanup Guild Log",helpText:"Any log messages not related to the current player will be dimmed (e.g. recall messages from guild store)"};var useNewGuildLog={helpTitle:"Use New Guild Log",helpText:"This will replace the standard guild log with the helper version of the guild log."};var enableLogColoring={helpTitle:"Enable Log Coloring",helpText:"Three logs will be colored if this is enabled, Guild Chat, Guild Log and Player Log. It will show any new messages in yellow and anything 20 minutes old ones in brown."};var enableChatParsing={helpTitle:"Enable Chat Parsing",helpText:"If this is checked, your character log will be parsed for chat messages and show the chat message on the screen if you reply to that message."};var addAttackLinkToLog={helpTitle:"Add attack link to log",helpText:"If checked, this will add an Attack link to each message in your log.",network:true};var enhanceChatTextEntry={helpTitle:"Enhance Chat Text Entry",helpText:"If checked, this will enhance the entry field for entering chat text on the guild chat page."};var showExtraLinks={helpTitle:"Show Extra Links",helpText:"If checked, this will add AH and UFSG links to equipment screens.",network:true};var showQuickDropLinks={helpTitle:"Show Quick Drop Item",helpText:"This will show a link beside each item which gives the option to drop the item. WARNING: NO REFUNDS ON ERROR",network:true};var storeLastQuestPage={helpTitle:"Store Last Quest Page",helpText:"This will store the page and sort order of each of the three quest selection pages for next time you visit. If you need to reset the links, turn this option off, click on the link you wish to reset and then turn this option back on again."};var showNextQuestSteps={helpTitle:"Show Next Quest Steps",helpText:"Shows all quest steps in the UFSG."};var renderSelfBio={helpTitle:"Render self bio (SLOW)",helpText:"This determines if your own bio will render the FSH special bio tags.",title:"Render self bio"};var renderOtherBios={helpTitle:"Render other players&apos; bios (SLOW)",helpText:"This determines if other players bios will render the FSH special bio tags.",title:"Render other players&apos; bios"};var enableBioCompressor={helpTitle:"Enable Bio Compressor",helpText:"This will compress long bios and provide a link to expand the compressed section."};var showStatBonusTotal={helpTitle:"Show Stat Bonus Total",helpText:"This will show a total of the item stats when you mouseover an item on the profile screen."};var enableQuickDrink={helpTitle:"Enable Quick Drink/Wear",helpText:"This enables the quick drink/wear functionality on the profile page."};var disableDeactivatePrompts={helpTitle:"Disable Deactivate Prompts",helpText:"This disables the prompts for deactivating buffs on the profile page."};var enableAttackHelper={helpTitle:"Show Attack Helper",helpText:"This will show extra information on the attack player screen about stats and buffs on you and your target",network:true};var showPvPSummaryInLog={helpTitle:"Show PvP Summary in Log",helpText:"This will show a summary of the PvP results in the log.",network:true};var autoFillMinBidPrice={helpTitle:"Auto Fill Min Bid Price",helpText:"This enables the functionality to automatically fill in the min bid price so you just have to hit bid and your bid will be placed."};var hideRelicOffline={helpTitle:"Hide Relic Offline",helpText:"This hides the relic offline defenders checker."};var enterForSendMessage={helpTitle:"Enter Sends Message",helpText:"If enabled, will send a message from the Send Message screen if you press enter. You can still insert a new line by holding down shift when you press enter."};var moveComposingButtons={helpTitle:"Move Composing Buttons",helpText:"If enabled, will move composing buttons to the top of the composing screen."};var draggableHelperMenu={helpTitle:"Draggable Helper Menu",helpText:"If enabled, allows the helper menu to be dragged around the screen."};var draggableQuickLinks={helpTitle:"Draggable Quick Links",helpText:"If enabled, allows the quick link box to be dragged around the screen."};var expandMenuOnKeyPress={helpTitle:"Expand Menu on Key Press",helpText:"If enabled, expands the left hand menu when you use hotkeys."};var disableBreakdownPrompts={helpTitle:"Disable Breakdown Prompts",helpText:"If enabled, will disable prompts when you breakdown items.<br>NO REFUNDS OR DO-OVERS! Use at own risk."};var collapseNewsArchive={helpTitle:"Collapse News Archive",helpText:"If enabled, will collapse news archives."};var collapseHallPosts={helpTitle:"Collapse Hall Posts",helpText:"If enabled, will collapse hall posts."};var hideSubLvlCreature={helpTitle:"Hide Sub Level Creatures",helpText:"If enabled, will hide creatures that are lower than the current realm level."};var hidePlayerActions={helpTitle:"Hide Player Actions",helpText:"If enabled, will hide player actions."};var disableQuickWearPrompts={helpTitle:"Disable Use/Ext Prompts",helpText:"If enabled, will disable prompts when you Use/Ext items.<br>NO REFUNDS OR DO-OVERS! Use at own risk.",title:"Disable Use/Ext<br>Prompts"};var enableGuildActivityTracker={helpTitle:"Enable Guild Activity Tracker",helpText:"If enabled, will track guild member activity over time.",network:true,title:"Enable Tracker"};var enableSeTracker={helpTitle:"Enable SE Tracker",helpText:"If enabled, will track the last time each SE was killed.<br>This is DIFFERENT from the usual FSH network activity.<br>When this is enabled, if you have ANY game page open in a<br>browser tab it will scan the SE Log every 10 minutes.<br>You do not need auto-refresh for this to work.",network:true};var showMonsterLog={helpTitle:"Keep Creature Log",helpText:"This will show the creature log for each creature you see when you travel.",network:true};var showTitanInfo={helpTitle:"Show Titan Info",helpText:"This will show titan info in the action list.",network:true};var wantedGuildMembers={helpTitle:"Show Guild Members",helpText:"If enabled, will show guild members in the wanted bounty list."};var highlightPvpProtection={helpTitle:"Highlight Pvp Protection",helpText:"If enabled, will put a red box around PvP Protection."};var showBuffInfo={helpTitle:"Show Buff Info",helpText:"This will show buff info in the action list."};var enableHistoryCompressor={helpTitle:"Guild History Compressor",helpText:"This will compress long guild histories and provide a link to expand the compressed section."};var enableStamBars={helpTitle:"Stamina Bars",helpText:"This shows stamina as a coloured bar."};var ajaxifyDestroy={helpTitle:"Ajaxify Destroy",helpText:"Destroy items without page redirect.<br>This also allows you to drop more than 100 items",network:true};var statBarLinks={helpTitle:"Statbar links",helpText:"This changes the statbar links to allow middle button clicks."};var staminaCalculator={helpTitle:"Stamina Calculator",helpText:"This displays when you will reach max stamina thru stamina gain."};var levelUpCalculator={helpTitle:"Level Up Calculator",helpText:"This displays when you will reach your next level thru XP gain."};var resizeQuickBuff={helpTitle:"Resize Quick Buff Window",helpText:"This makes the quick buff window a bit bigger."};var joinAllLink={helpTitle:"Join All Groups Link",helpText:"This makes a notification with a join all groups link in it when there are new groups."};var pageTwoLinks={helpTitle:"Archive Page 2 Links",helpText:"This makes links to page 2 of each archive on the news page."};var trackLadderReset={helpTitle:"Track Ladder Reset",helpText:"This tracks ladder resets from logs and news articles."};var addUfsgLinks={helpTitle:"Add UFSG Links to News",helpText:"This adds UFSG links to news articles."};var addServerNode={helpTitle:"Add Server Node to Top Stats",helpText:"This adds clickable online players and server node to top stats<br>if you have the options 'Show Game Stats At Top' enabled,<br>'Hide Games Stats' disabled and<br>'Game Stats Summary Only' disabled.<br>It also hides the Game Stats box."};var addScoutTowerLink={helpTitle:"Add Scout Tower Link",helpText:"This adds a Scout Tower link to the Spoils of War info box."};var storeLastScavPage={helpTitle:"Store Last Scavenging Page",helpText:"This will remember last used scavenging settings."};var recipeManagerLink={helpTitle:"Recipe Manager",helpText:"Recipe Manager Link (Helper Menu)"};var medalGuideLink={helpTitle:"Medal Guide",helpText:"Medal Guide Link (Profile Page)"};var inventoryManagerLink={helpTitle:"Inventory Manager",helpText:"Inventory Manager Link (Helper Menu)"};var buffLogLink={helpTitle:"Buff Log",helpText:"Buff Log Link (Helper Menu)"};var combatLogLink={helpTitle:"Combat Log",helpText:"Combat Log Link (Helper Menu)"};var creatureLogLink={helpTitle:"Creature Log",helpText:"Creature Log Link (Helper Menu)"};var quickLinksLink={helpTitle:"Quick Links",helpText:"Quick Links Link (Helper Menu)"};var auctionSearchLink={helpTitle:"AH Quick Search",helpText:"AH Quick Search Link (Helper Menu)"};var onlinePlayersLink={helpTitle:"Online Players",helpText:"Online Players Link (Helper Menu)"};var findOtherLink={helpTitle:"Find Other",helpText:"Find Other Link (Helper Menu)"};var findBuffsLink={helpTitle:"Find Buffs",helpText:"Find Buffs Link (Helper Menu)"};var guildInventoryLink={helpTitle:"Guild Inventory",helpText:"Guild Inventory Link (Helper Menu)"};var newGuildLogLink={helpTitle:"New Guild Log",helpText:"New Guild Log Link (Helper Menu)<br>When you are not using new guild log by default"};var topRatedLink={helpTitle:"Top 250 Players",helpText:"Top 250 Players Link (Top 100 Players)"};var enableMessageTemplates={helpTitle:"Enable Message Templates",helpText:"This add templates to the message dialog."};var wrapGuildChat={helpTitle:"Wrap Guild Chat",helpText:"This forces word wrap in guild chat."};var colorPlayerNames={helpTitle:"Color Player Names",helpText:"This colors players' names in the log. Green for guild mates, Blue for allies, red for enemies.",network:true};var addIgnoreLink={helpTitle:"Add Ignore Link",helpText:"This adds an ignore link to chat messages."};var changeButtonLabels={helpTitle:"Change Button Labels",helpText:"This changes Send button to be Trade and Trade button to be ST."};var fastDebuff={helpTitle:"Fast Debuff",helpText:"This allows debuffing without a page reload."};var countAllyEnemy={helpTitle:"Count Ally Enemy",helpText:"This shows a count of the number of allies and enemies."};var fixFolderImages={helpTitle:"Fix Folder Images",helpText:"This fixes the backpack folder images."};var componentWidgets={helpTitle:"Component Widgets",helpText:"This adds buttons to the components section. Quick delete, counts and quick extract."};var quickWearLink={helpTitle:"Quick Wear Link",helpText:"This adds a quick wear link to the inventory section header."};var selectAllLink={helpTitle:"Select All Link",helpText:"This adds a select all link to the backpack section header."};var nekidButton={helpTitle:"Nekid Button",helpText:"This adds Nekid button below worn items."};var ajaxifyProfileSections={helpTitle:"Ajaxify Profile Sections",helpText:"This collapses and expands profile sections without a page reload."};var injectBuffGuide={helpTitle:"Inject Buff Guide",helpText:"This attempts to calculate stat movement for barricade, entrench and nightmare visage. These calculations are NOT cumulative and are intended only as a guide."};var statisticsWrap={helpTitle:"Statistics Wrap",helpText:"This fixes the wrapping of the statistics section."};var showGuildRelationship={helpTitle:"Show Guild Relationship",helpText:"This show the guild relationship in players&apos; profiles."};var showQuickButtons={helpTitle:"Show Quick Buttons",helpText:"This shows quick access buttons under the avatar in players&apos; profiles."};var showBuffLevel={helpTitle:"Show Buff Level",helpText:"This shows level underneath buffs in players&apos; profiles."};var enableItemColoring={helpTitle:"Enable Item Coloring",helpText:"This colors the item text based on the rarity of the item.",network:true};var checkAllOfType={helpTitle:"Check All of Type",helpText:"This adds a button to select all of the same items.",network:true};var enableFolderFilter={helpTitle:"Enable Folder Filter",helpText:"This adds folder filtering to the Store Items page.",network:true};var mySimpleCheckboxes = {moveGuildList:moveGuildList,moveOnlineAlliesList:moveOnlineAlliesList,enableOnlineAlliesWidgets:enableOnlineAlliesWidgets,moveFSBox:moveFSBox,moveDailyQuest:moveDailyQuest,gameHelpLink:gameHelpLink,enableTempleAlert:enableTempleAlert,enableUpgradeAlert:enableUpgradeAlert,enableComposingAlert:enableComposingAlert,enhanceOnlineDots:enhanceOnlineDots,hideBuffSelected:hideBuffSelected,fixBuffSelected:fixBuffSelected,hideHelperMenu:hideHelperMenu,keepHelperMenuOnScreen:keepHelperMenuOnScreen,showAdmin:showAdmin,ajaxifyRankControls:ajaxifyRankControls,detailedConflictInfo:detailedConflictInfo,showCombatLog:showCombatLog,enableCreatureColoring:enableCreatureColoring,showCreatureInfo:showCreatureInfo,fsboxlog:fsboxlog,keepBuffLog:keepBuffLog,huntingMode:huntingMode,hideNonPlayerGuildLogMessages:hideNonPlayerGuildLogMessages,useNewGuildLog:useNewGuildLog,enableLogColoring:enableLogColoring,enableChatParsing:enableChatParsing,addAttackLinkToLog:addAttackLinkToLog,enhanceChatTextEntry:enhanceChatTextEntry,showExtraLinks:showExtraLinks,showQuickDropLinks:showQuickDropLinks,storeLastQuestPage:storeLastQuestPage,showNextQuestSteps:showNextQuestSteps,renderSelfBio:renderSelfBio,renderOtherBios:renderOtherBios,enableBioCompressor:enableBioCompressor,showStatBonusTotal:showStatBonusTotal,enableQuickDrink:enableQuickDrink,disableDeactivatePrompts:disableDeactivatePrompts,enableAttackHelper:enableAttackHelper,showPvPSummaryInLog:showPvPSummaryInLog,autoFillMinBidPrice:autoFillMinBidPrice,hideRelicOffline:hideRelicOffline,enterForSendMessage:enterForSendMessage,moveComposingButtons:moveComposingButtons,draggableHelperMenu:draggableHelperMenu,draggableQuickLinks:draggableQuickLinks,expandMenuOnKeyPress:expandMenuOnKeyPress,disableBreakdownPrompts:disableBreakdownPrompts,collapseNewsArchive:collapseNewsArchive,collapseHallPosts:collapseHallPosts,hideSubLvlCreature:hideSubLvlCreature,hidePlayerActions:hidePlayerActions,disableQuickWearPrompts:disableQuickWearPrompts,enableGuildActivityTracker:enableGuildActivityTracker,enableSeTracker:enableSeTracker,showMonsterLog:showMonsterLog,showTitanInfo:showTitanInfo,wantedGuildMembers:wantedGuildMembers,highlightPvpProtection:highlightPvpProtection,showBuffInfo:showBuffInfo,enableHistoryCompressor:enableHistoryCompressor,enableStamBars:enableStamBars,ajaxifyDestroy:ajaxifyDestroy,statBarLinks:statBarLinks,staminaCalculator:staminaCalculator,levelUpCalculator:levelUpCalculator,resizeQuickBuff:resizeQuickBuff,joinAllLink:joinAllLink,pageTwoLinks:pageTwoLinks,trackLadderReset:trackLadderReset,addUfsgLinks:addUfsgLinks,addServerNode:addServerNode,addScoutTowerLink:addScoutTowerLink,storeLastScavPage:storeLastScavPage,recipeManagerLink:recipeManagerLink,medalGuideLink:medalGuideLink,inventoryManagerLink:inventoryManagerLink,buffLogLink:buffLogLink,combatLogLink:combatLogLink,creatureLogLink:creatureLogLink,quickLinksLink:quickLinksLink,auctionSearchLink:auctionSearchLink,onlinePlayersLink:onlinePlayersLink,findOtherLink:findOtherLink,findBuffsLink:findBuffsLink,guildInventoryLink:guildInventoryLink,newGuildLogLink:newGuildLogLink,topRatedLink:topRatedLink,enableMessageTemplates:enableMessageTemplates,wrapGuildChat:wrapGuildChat,colorPlayerNames:colorPlayerNames,addIgnoreLink:addIgnoreLink,changeButtonLabels:changeButtonLabels,fastDebuff:fastDebuff,countAllyEnemy:countAllyEnemy,fixFolderImages:fixFolderImages,componentWidgets:componentWidgets,quickWearLink:quickWearLink,selectAllLink:selectAllLink,nekidButton:nekidButton,ajaxifyProfileSections:ajaxifyProfileSections,injectBuffGuide:injectBuffGuide,statisticsWrap:statisticsWrap,showGuildRelationship:showGuildRelationship,showQuickButtons:showQuickButtons,showBuffLevel:showBuffLevel,enableItemColoring:enableItemColoring,checkAllOfType:checkAllOfType,enableFolderFilter:enableFolderFilter};

const networkIcon = '<img class="networkIcon tip-static" '
  + 'data-tipped="This function retrieves data from the network. '
  + 'Disable this to increase speed" src="data:image/png;base64,'
  + 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA'
  + 'B3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+'
  + '/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQn'
  + 'HdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQ'
  + 'EqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV'
  + '7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltr'
  + 'r+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdY'
  + 'SvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMF'
  + 'egAAAABJRU5ErkJggg==" width="16" height="16" />';

function helpLink(title, text) {
  return '&nbsp;[&nbsp;<span class="fshLink tip-static" data-tipped="'
    + `<span class='fshHelpTitle'>${title}</span><br><br>${
      text}">?</span>&nbsp;]`;
}

function hasNetwork(o) {
  if (o.network) { return networkIcon; }
  return '';
}

function justLabel(name) {
  const o = mySimpleCheckboxes[name];
  return `${hasNetwork(o)
  }<label for="${name}">${fallback(o.title, o.helpTitle)
  }${helpLink(o.helpTitle, o.helpText)
  }:</label>`;
}

function justCheckbox(name) {
  return `<input id="${name}" name="${name
  }" class="fshVMid" type="checkbox" value="on"${isValueChecked(name)}>`;
}

function simpleCheckboxHtml(name) {
  return justLabel(name) + justCheckbox(name);
}

function simpleCheckbox(name) {
  return `<tr><td align="right">${justLabel(name)
  }</td><td>${justCheckbox(name)}</td></tr>`;
}

export { justCheckbox as a, simpleCheckboxHtml as b, helpLink as h, isValueChecked as i, justLabel as j, networkIcon as n, simpleCheckbox as s };
//# sourceMappingURL=simpleCheckbox-39a4b647.js.map
