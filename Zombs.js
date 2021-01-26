# Zombs.io-Hack
// ==UserScript==
// @name         Zombs.io ULTIMATE HACK
// @namespace    -
// @version      8.3
// @description  The perfect hack for zombs.io !
// @author       My discord: Marco Diaz#0001
// @match        http://zombs.io/
// @grant        none
// ==/UserScript==

window.addEventListener("onkeydown", keyDown, true);
window.addEventListener("keydown", keyDown);

function keyDown(e) {
  switch (e.keyCode) {
    case 188:
      speedrun();
      speedrun2();
      break;
    case 189:
      spampartys();
      spampartys2();
      break;
    case 187:
      partyTags();
      break;
  }
}

// REMOVE ADS
document.querySelectorAll('.ad-unit').forEach(function(a) {
  a.remove();
});

// NEW DIV IN PARTY TAB
function partydiv() {
  var newNode = document.createElement('div');
  newNode.className = 'tagzspam';
  newNode.style = 'text-align:center';
  document.getElementsByClassName('hud-party-actions')[0].appendChild(newNode);
}

partydiv();

// DIV STYLE
var Style1 = document.querySelectorAll('.hud-map, .hud-resources, .hud-menu-shop, .hud-menu-party, .hud-menu-settings, .hud-shop-grid .hud-shop-item, .hud-party-link, .hud-party-members, .hud-party-grid, .hud-settings-grid, .hud-toolbar-item, .hud-toolbar-building, .hud-menu-icon, .hud-spell-icon, .hud-intro-form, .hud-intro-guide, .hud-intro-name, .hud-intro-server, .hud-party-tag, .hud-party-share, .hud-chat-input');
for (var i = 0; i < Style1.length; i++) {
  Style1[i].style.borderRadius = '1em'; // standard
  Style1[i].style.MozBorderRadius = '1em'; // Mozilla
  Style1[i].style.WebkitBorderRadius = '1em'; // WebKitww
  Style1[i].style.color = "#D35400";
  Style1[i].style.border = "2px solid #000000";
}
// INPUT AND SELECT STYLE
var Style2 = document.querySelectorAll('select, input');
for (var i = 0; i < Style2.length; i++) {
  Style2[i].style.borderRadius = '1em'; // standard
  Style2[i].style.MozBorderRadius = '1em'; // Mozilla
  Style2[i].style.WebkitBorderRadius = '1em'; // WebKitww
  Style2[i].style.color = "#D35400";
  Style2[i].style.border = "2px solid #000000";
  Style2[i].style.backgroundColor = "#000000";
}
setInterval(function () {
    if (document.querySelectorAll(".hud-chat .hud-chat-input:focus")[0]) {
        window.removeEventListener("keydown", keyDownF);
    } else {
        window.addEventListener("keydown", keyDownF);
    }
}, 0);

// NEW DIV IN PARTYS INNERHTML
var div1 = document.getElementsByClassName("tagzspam")[0];

div1.innerHTML += "<br><small>Party Spam</small><br>";
div1.innerHTML += "<small>Speed: </small><input type=\"number\" id=\"speeds1\" class=\"btn\" style=\"width: 20%;\" value=\"1000\">";
div1.innerHTML += "&nbsp;";
div1.innerHTML += "<input type=\"text\" id=\"names\" class=\"btn\" maxlength=\"35\" style=\"width: 30%;\" value=\"assssssssssssssssssssssssssssssssss\">";
div1.innerHTML += "&nbsp;";
div1.innerHTML += "<button id=\"pts\" class=\"btn btn-green\" style=\"width: 20%;\">ON & OFF</button>";
div1.innerHTML += "<br><br>";
div1.innerHTML += "<div class=\"newpartydiv\" style=\"text-align:center\"></div>";


const settingsHTML = `<div style="text-align:center"><br>
<hr />
<h3>• FT Advanced Settings 🔧</h3>
<hr />
<button class="btn btn-gold" style="width: 45%;" onclick="SellStash();">👑 Sell Gold Stash 🔫</button>
<button class="btn btn-goldw" style="width: 45%;" onclick="SellAll();">👑 Sell Base Items 🔨</button>

<button class="btn btn-goldw" style="width: 45%;" onclick="sellWalls();">👑 Sell Walls 🍁</button>

<button class="btn btn-gold" style="width: 45%;" onclick="sellDoors();">👑 Sell Doors 🌷</button>

<button class="btn btn-gold" style="width: 45%;" onclick="sellTraps();">👑 Sell Traps 🌿</button>

<button class="btn btn-goldw" style="width: 45%;" onclick="sellpets();">👑 Sell Pet🐾</button>

<button id="UPP" class="btn btn-goldw" style="width: 45%;">👑 Auto Upgrade 🔧</button>

<button id="AHRC" class="btn btn-gold" style="width: 45%;">👑 Enable AutoFarm🔒</button>

<button id="bow" class="btn btn-gold" style="width: 45%;">👑 AutoBow 🎲</button>

<button id="SSL" class="btn btn-goldw" style="width: 45%;">👑 Auto Accept Party Request </button>

<button id="SSL4" class="btn btn-goldw" style="width: 45%;">👑 Auto Power💪</button>

<button id="SSL9" class="btn btn-gold" style="width: 45%;"> KickAll 📝</button>
<hr />
<h3>• Klana Katıl 🌹</h3>
<hr />
<input type="text" maxlength="20" placeholder="Enter Key🔱" id="myKey">
<button onclick="join();">Join🔒</button>
<br><br>
<input type="text" class="TFkey3" placeholder="Enter Key🔱">
<button class="TFvalidKey3">Valid Key🔒</button>
<button class="TFbtn3">Enable Unlockable Mode🍁</button>
<hr />
<h3>• AutoBase 🔨</h3>
<hr />
<button onclick="BSB();"> FT ✓ X BASE Base🔱</button>
<button onclick="MB();"> FT ✓ R Base🔱</button>
<button onclick="XBase();">FT ✓ Record x10  Base🍁</button>
<button onclick="SmallCornerBase();">FT ✓ Small Cornee Base🍁</button>
<button onclick="TH();">Unstoppable Gold⛔️</button>

<br><br>
<input type="number" value="1000" class="F" placeholder="DB speed" style="width: 20%;">
<button class="N/A🔧</button>
<button id="SSL5">Defense Base Enabled🏆</button>
<br><br>
<input type="number" value="700" class="F2" placeholder="GG speed" style="width: 20%;">
<button class="Fe2">N/A🔨</button>
  <button id="SSL6">Gold Cheat Enabled🏆</button> &nbsp;
<hr />
<h3>• Leave Party 🚪</h3>
<hr />
<button onclick="leave();">Leave Party🔑</button>
<hr />
<h3>• Heal Base 💀</h3>
<hr />
<input type="number" value="500" class="TFkey2" placeholder="speed" style="width: 20%">
<button class="TFvalidKey2">N/A🔨</button>
<button class="TFbtn2">Base Healer 🔱</button>
<br><br>
<input type="number" value="500" class="F3" placeholder="speed" style="width: 20%;">
<button class="Fe3"> N/A🔧</button>
  <button id="SSL7">Base Controlled Tower Freeze Ability 🔱</button> &nbsp;
<br><br>
<input type="number" value="500" class="F4" placeholder="speed" style="width: 20%;">
<button class="Fe4">N/A🔫</button>
  <button id="SSL3">Base Controlled Tower Freeze Location Ability🔱</button> &nbsp;
<hr />
<h3>• Auto Delete Base 💀</h3>
<hr />
<input type="number" value="200" class="TFe" placeholder="speed" style="width: 20%;">
<input type="text" class="TFkey" placeholder="Valid Key🔐">
<button class="TFvalidKey">Key🔑</button>
<button class="TFbtn">Base Freezer ❄️</button>
<hr />
<h3>• Press the settings button for the hack shortcuts!
<hr />
<input type="search" placeholder="Message Globally💬" maxlength="140" id="myGlobalMessage">
<button onclick="globalMessage();">✨</button>
<hr />
`;

// STYLE CODES
function stylecodes() {
  var ael = document.querySelectorAll('input');
  for (var i2 = 0; i2 < ael.length; i2++) {
    ael[i2].addEventListener("keydown", keyDown, false);
  }
  document.getElementById('hud-menu-party').style.width = "610px";
  document.getElementById('hud-menu-party').style.height = "550px";
  document.getElementsByClassName('hud-intro-form')[0].style.width = "325px";
  document.getElementsByClassName('hud-party-tag')[0].setAttribute('maxlength', 49);
  document.getElementsByClassName('hud-intro-name')[0].setAttribute('maxlength', 29);
  document.getElementsByClassName("hud-intro-corner-bottom-right")[0].remove();
  document.getElementsByClassName("hud-intro-corner-bottom-left")[0].remove();
  document.getElementsByClassName("hud-day-night-overlay")[0].remove();
  document.getElementsByClassName("hud-party-joining")[0].remove();
  document.getElementsByClassName("hud-respawn-share")[0].remove();
  document.getElementsByClassName("hud-intro-footer")[0].remove();
}

stylecodes();

// INTRO STYLE CODES INNERHTML
var IntroGuide = '';

IntroGuide += "<center><h3>🔱 'ＧＲ,ＦＴ teams nick'</h3>";
IntroGuide += "<button class=\"btn btn-goldw\" style=\"width: 45%;\" onclick=\"name1();\">FT</button>";
IntroGuide += "&nbsp;";
IntroGuide += "<button class=\"btn btn-goldw\" style=\"width: 45%;\" onclick=\"name2();\">FT</button>";
IntroGuide += "<br><br>";
IntroGuide += "<button class=\"btn btn-gold\" style=\"width: 45%;\" onclick=\"name3();\">FT</button>";
IntroGuide += "&nbsp;";
IntroGuide += "<button class=\"btn btn-gold\" style=\"width: 45%;\" onclick=\"name4();\">GR</button>";
IntroGuide += "<br><br>";
IntroGuide += "<button class=\"btn btn-goldw\" style=\"width: 45%;\" onclick=\"name5();\">GR</button>";
IntroGuide += "&nbsp;";
IntroGuide += "<button class=\"btn btn-goldw\" style=\"width: 45%;\" onclick=\"name6();\">GR</button>";
IntroGuide += "<br>";
IntroGuide += "<center><h3>🔱 'selam verici'</h3>";
IntroGuide += "<button class=\"btn btn-purple\" style=\"width: 90%;\" id=\"cbc1\">hacker abiniz geldibutton>";

document.getElementsByClassName('hud-intro-guide')[0].innerHTML = IntroGuide;

// LONG NINKNAMES
window.name1 = function() {
  document.getElementsByClassName('hud-intro-name')[0].value = 'ＦＴ ԼƖ̇ƊЄƦ シ';
};
window.name2 = function() {
  document.getElementsByClassName('hud-intro-name')[0].value = '⦕ƑƬ⦖Aɱʌçƨıȥ★';
};
window.name3 = function() {
  document.getElementsByClassName('hud-intro-name')[0].value = 'ＦＴ ＹＡＫＡＲ ツ';
};
window.name4 = function() {
  document.getElementsByClassName('hud-intro-name')[0].value = 'ＧＲ ＫＡＯＳ ✠';
};
window.name5 = function() {
  document.getElementsByClassName('hud-intro-name')[0].value = 'ＧＲ　ＫＲＡＬ ♚';
};
window.name6 = function() {

  document.getElementsByClassName('hud-intro-name')[0].value = 'GЯ ЯΣİƧ ★';
};

document.getElementsByClassName("hud-settings-grid")[0].innerHTML = settingsHTML;
setTimeout(() => {

},2500)
window.join = function() {
  let partyKey = myKey.value
        Game.currentGame.network.sendRpc({
                name: "JoinPartyByShareKey",
                partyShareKey: partyKey
        })
}

window.globalMessage = function() {
  let globalMessage = myGlobalMessage.value
  Game.currentGame.network.sendRpc({
    name: "SendChatMessage",
    channel: "Global",
    message: globalMessage
  })
}


//Auto Build Script
function $(classname) {
    let element = document.getElementsByClassName(classname)
    if (element.length === 1) {
        return element[0]
    } else {
        return element
    }
}

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    let value = this.getItem(key);
    return value && JSON.parse(value);
}
let Auto = {}
let Auto2 = {}
let EXTREME = {}
Auto.GetGoldStash = function() {
    let entities = Game.currentGame.ui.buildings
    for (let uid in entities) {
        if (!entities.hasOwnProperty(uid)) {
            continue
        }
        let obj = entities[uid]
        if (obj.type == "GoldStash") {
            return obj
        }
    }
}
EXTREME.GetGoldStash = function() {
    let entities = Game.currentGame.ui.buildings
    for (let uid in entities) {
        if (!entities.hasOwnProperty(uid)) {
            continue
        }
        let obj = entities[uid]
        if (obj.type == "GoldStash") {
            return obj
        }
    }
}
Auto2.GetGoldStash = function() {
    let entities = Game.currentGame.ui.buildings
    for (let uid in entities) {
        if (!entities.hasOwnProperty(uid)) {
            continue
        }
        let obj = entities[uid]
        if (obj.type == "GoldStash") {
            return obj
        }
    }
}

// DIV STYLE
var Style1 = document.querySelectorAll('.hud-map, .hud-resources, .hud-menu-shop, .hud-menu-party, .hud-menu-settings, .hud-shop-grid .hud-shop-item, .hud-party-link, .hud-party-members, .hud-party-grid, .hud-settings-grid, .hud-toolbar-item, .hud-toolbar-building, .hud-menu-icon, .hud-spell-icon, .hud-intro-form, .hud-intro-guide, .hud-intro-name, .hud-intro-server, .hud-party-tag, .hud-party-share, .hud-chat-input');
for (var i = 0; i < Style1.length; i++) {
  Style1[i].style.borderRadius = '1em'; // standard
  Style1[i].style.MozBorderRadius = '1em'; // Mozilla
  Style1[i].style.WebkitBorderRadius = '1em'; // WebKitww
  Style1[i].style.color = "#D35400";
  Style1[i].style.border = "2px solid #000000";
}

Auto.PlaceBuilding = function(x, y, building, yaw) {
    Game.currentGame.network.sendRpc({
        name: "MakeBuilding",
        x: x,
        y: y,
        type: building,
        yaw: yaw
    })
}
Auto.PlaceBulding = function(x, y, building, yaw) {
    Game.currentGame.network.sendRpc({
        name: "MakeBuilding",
        x: x,
        y: y,
        type: building,
        yaw: yaw
    })
}
EXTREME.PlaceBuilding = function(x, y, building, yaw) {
    Game.currentGame.network.sendRpc({
        name: "MakeBuilding",
        x: x,
        y: y,
        type: building,
        yaw: yaw
    })
}
Auto2.PlaceBuilding = function(x, y, building, yaw) {
    Game.currentGame.network.sendRpc({
        name: "MakeBuilding",
        x: x,
        y: y,
        type: building,
        yaw: yaw
    })
sellBombs()
upgradeBombs()
}
Auto2.GoldGenerator = function() {
    let waitForGoldStash = setInterval(function() {
        if (document.querySelectorAll("[data-building]")[10].classList[1] == "is-disabled") {
            let stash = Auto2.GetGoldStash();
            if (stash == undefined) return
            let stashPosition = {
                x: stash.x,
                y: stash.y
            }
            clearInterval(waitForGoldStash);
            Auto2.PlaceBuilding(stashPosition.x + 0, stashPosition.y + 96, "BombTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 0, stashPosition.y + -96, "BombTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + -96, stashPosition.y + 0, "BombTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 96, stashPosition.y + 0, "BombTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 336, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 336, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 336, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 336, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 336, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 336, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 336, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 336, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 336, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 336, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 336, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 240, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 56778, "ArrowTower", 0)
            Auto2.PlaceBuilding(stashPosition.x + 336, stashPosition.y + 56778, "ArrowTower", 0)
        }
    }, 0)
    window.ee = function() {
        var waitForGoldStash2 = setInterval(function() {
                    clearInterval(waitForGoldStash2);
    upgradeBombs()
        }, 0)
    }
}
EXTREME.BuildMyBase = function() {
    var waitForGoldStash = setInterval(function() {
        if (document.querySelectorAll("[data-building]")[10].classList[1] == "is-disabled") {
            var stash = EXTREME.GetGoldStash();
            if (stash == undefined) return
            var stashPosition = {
                x: stash.x,
                y: stash.y
            }
            clearInterval(waitForGoldStash);
            EXTREME.PlaceBuilding(stashPosition.x + 0, stashPosition.y + 96, "BombTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + 0, stashPosition.y + -96, "BombTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + -96, stashPosition.y + 0, "BombTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + 96, stashPosition.y + 0, "BombTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 0, "GoldMine", 0)
            EXTREME.PlaceBuilding(stashPosition.x + 0, stashPosition.y + 192, "GoldMine", 0)
            EXTREME.PlaceBuilding(stashPosition.x + 0, stashPosition.y + -192, "GoldMine", 0)
            EXTREME.PlaceBuilding(stashPosition.x + -192, stashPosition.y + 0, "GoldMine", 0)
            EXTREME.PlaceBuilding(stashPosition.x + -96, stashPosition.y + 96, "GoldMine", 0)
            EXTREME.PlaceBuilding(stashPosition.x + 96, stashPosition.y + 96, "GoldMine", 0)
            EXTREME.PlaceBuilding(stashPosition.x + 96, stashPosition.y + -96, "GoldMine", 0)
            EXTREME.PlaceBuilding(stashPosition.x + -96, stashPosition.y + -96, "GoldMine", 0)
            EXTREME.PlaceBuilding(stashPosition.x + -96, stashPosition.y + 192, "ArrowTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + 96, stashPosition.y + 192, "ArrowTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + 96, stashPosition.y + -192, "ArrowTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + -96, stashPosition.y + -192, "ArrowTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + -192, stashPosition.y + 96, "ArrowTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 96, "ArrowTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + 192, stashPosition.y + -96, "ArrowTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + -192, stashPosition.y + -96, "ArrowTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + -192, stashPosition.y + 192, "ArrowTower", 0)
            EXTREME.PlaceBuilding(stashPosition.x + 192, stashPosition.y + 192, "ArrowTower", 0)
