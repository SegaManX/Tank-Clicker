var game = {
  score: 0,
  totalScore: 0,
  totalClicks: 0,
  clickValue: 1,
  version: 0.000,
  nextSc: 1000000000,
  lvl: 1,

  addToScore: function(amount) {
    this.score += amount;
    this.totalScore += amount;
    display.updateScore();
  },

  getScorePS: function() {
    var scorePS = 0;
    for (i = 0; i < building.name.length; i++) {
      scorePS += building.income[i] * building.count[i];
    }
    return scorePS;
  }
};

var building = {
  name: ["Shell", "Mechanic", "Factory", "Pog", "Gunner", "Driver", "Radio Operator", "Loader", "Commander"],
  image: ["item1.png", "item2.png", "item3.png", "item4.png", "item5.png", "item6.png", "item7.png", "item8.png", "item9.png"],
  count: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  income: [1, 15, 70, 420, 10000, 36158, 915793, 428444421, 9999999999],
  cost: [15, 100, 1000, 42069, 169251, 4792399, 91453467, 551100138, 99999999999],

  purchase: function(index) {
    if (game.score >= this.cost[index]) {
      game.score -= this.cost[index]
      this.count[index]++;
      this.cost[index] = Math.ceil(this.cost[index] * 1.1);
      display.updateScore();
      display.updateShop();
      display.updateUpgrades();
    }
  }
};

var upgrade = {
  name: ["Heavier Shells", "Icy Shells", "Itchy Finger", "Reddit Moment", "Itchy Hand", "Golden Touch", "Spicy Fingers", "Green Thumb", "Bloody Hands", "Endertouch", "Icy Fingers", "Final Hand"],
  description: ["Shells are now 2x efficient", "Shells are now 2x efficient", "Clicks are now 2x efficient", "Pog is 70x more efficient", "Clicks are now 3x efficient", "Clicks are now 4x efficient", "Clicks are now 5x efficient", "Clicks are now 6x efficient", "Clicks are now 7x efficient", "Clicks are now 8x efficient", "Clicks are now 9x efficient", "Clicks are now 10x efficient"],
  image: ["item1_1.png", "item1_2.png", "click1.png", "item4_1.png", "click1-1.png", "click1-2.png", "click1-3.png", "click1-4.png", "click1-5.png", "click1-6.png", "click1-7.png", "click1-8.png"],
  type: ["building", "building", "click", "building", "click", "click", "click", "click", "click", "click", "click", "click"],
  cost: [300, 500, 300, 420000, 5000, 50000, 500000, 5000000, 50000000, 500000000, 5000000000, 50000000000],
  buildingIndex: [0, 0, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1],
  requrement: [1, 5, 1, 69, 500, 5000, 50000, 500000, 5000000, 50000000, 500000000, 5000000000],
  bonus: [2, 2, 2, 69, 3, 4, 5, 6, 7, 8, 9, 100],
  purchased: [false, false, false, false, false, false, false, false, false, false, false, false],

  purchase: function(index) {
    if (!this.purchased[index] && game.score >= this.cost[index]) {
      if (this.type[index] == "building" && building.count[this.buildingIndex[index]] >= this.requrement[index]) {
        game.score -= this.cost[index];
        building.income[this.buildingIndex[index]] *= this.bonus[index];
        this.purchased[index] = true;

        display.updateUpgrades();
        display.updateScore();
      } else if (this.type[index] == "click" && game.totalClicks >= this.requrement[index]) {
        game.score -= this.cost[index];
        game.clickValue *= this.bonus[index];
        this.purchased[index] = true;

        display.updateUpgrades();
        display.updateScore();
      }
    }
  }
};

var display = {
  updateScore: function() {
    document.getElementById("score").innerHTML = game.score;
    document.getElementById("scoreBot").innerHTML = game.score;
    document.getElementById("scorePS").innerHTML = game.getScorePS();
    document.getElementById("nextSc").innerHTML = game.nextSc;
    document.title = game.score + " $ - Tank Clicker™";
  },

  updateShop: function() {
    document.getElementById("shopContainer").innerHTML = "";
    for (i = 0; i < building.name.length; i++) {
      document.getElementById("shopContainer").innerHTML += '<table class="shopButton unselectable" onclick="building.purchase(' + i + ')"><tr><td id="image"><img src="images/' + building.image[i] + '"></td><td id="nameAndCost"><p>' + building.name[i] + '</p><p><span>' + building.cost[i] + '</span> $</p></td><td id="amount"><span>' + building.count[i] + '</span></td></tr></table>';
    }
  },

  updateUpgrades: function() {
    document.getElementById("upgradeContainer").innerHTML = " ";
    for (i = 0; i < upgrade.name.length; i++) {
      if (!upgrade.purchased[i]) {
        if (upgrade.type[i] == "building" && building.count[upgrade.buildingIndex[i]] >= upgrade.requrement[i]) {
          document.getElementById("upgradeContainer").innerHTML += '<img src="images/' + upgrade.image[i] + '" title="' + upgrade.name[i] + ' &#10; ' + upgrade.description[i] + ' &#10; (' + upgrade.cost[i] + ' $)" onclick="upgrade.purchase(' + i + ')">';
        }
        else if (upgrade.type[i] == "click" && game.totalClicks >= upgrade.requrement[i]) {
          document.getElementById("upgradeContainer").innerHTML += '<img src="images/' + upgrade.image[i] + '" title="' + upgrade.name[i] + ' &#10; ' + upgrade.description[i] + ' &#10; (' + upgrade.cost[i] + ' $)" onclick="upgrade.purchase(' + i + ')">';
        }
      }
    }
  }

};



function saveGame() {
  var gameSave = {
    score: game.score,
    totalScore: game.totalScore,
    totalClicks: game.totalClicks,
    clickValue: game.clickValue,
    version: game.version,
    buildingCount: building.count,
    buildingIncome: building.income,
    buildingCost: building.cost,
    upgradePurchased: upgrade.purchased,
    lvl: game.lvl
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
};

function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (localStorage.getItem("gameSave") !== null) {
    if (typeof savedGame.score !== "undefined") game.score = savedGame.score;
    if (typeof savedGame.totalScore !== "undefined") game.totalScore = savedGame.totalScore;
    if (typeof savedGame.totalClicks !== "undefined") game.totalClicks = savedGame.totalClicks;
    if (typeof savedGame.clickValue !== "undefined") game.clickValue = savedGame.clickValue;
    if (typeof savedGame.version !== "undefined") game.version = savedGame.version;
    if (typeof savedGame.lvl !== "undefined") game.lvl = savedGame.lvl;
    if (typeof savedGame.buildingCount !== "undefined") {
      for (i = 0; i < savedGame.buildingCount.length; i++)
        building.count[i] = savedGame.buildingCount[i];
    }
    if (typeof savedGame.buildingIncome !== "undefined") {
      for (i = 0; i < savedGame.buildingIncome.length; i++)
        building.income[i] = savedGame.buildingIncome[i];
    }
    if (typeof savedGame.buildingCost !== "undefined") {
      for (i = 0; i < savedGame.buildingCost.length; i++)
        building.cost[i] = savedGame.buildingCost[i];
    }
    if (typeof savedGame.upgradePurchased !== "undefined") {
      for (i = 0; i < savedGame.upgradePurchased.length; i++)
        upgrade.purchased[i] = savedGame.upgradePurchased[i];
    }
  }
  LoadLvl();
};

function resetGame() {
  if (confirm("Are you sure about that?")) {
    var gameSave = {};
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
    location.reload();
  }
};
function NextLevel() {
  if (game.score >= game.nextSc) {
    switch (game.lvl) {
      case 1:
        document.body.style.backgroundImage = "url('images/bg1.png')"
        game.nextSc = 100000000000
        document.getElementById("clicker").src = "images/tank1.png";
        game.lvl = 2
        break;
      case 2:
        document.body.style.backgroundImage = "url('images/bg2.png')"
        game.nextSc = 10000000000000
        game.lvl = 3
        break;
      case 3:
        document.body.style.backgroundImage = "url('images/bg3.png')"
        game.nextSc = 100000000000000
        game.lvl = 4
        break;
      case 4:
        document.body.style.backgroundImage = "url('images/bg4.png')"
        game.nextSc = 1000000000000000
        game.lvl = 5
        break;
    }
  }
};

function LoadLvl() {
  switch (game.lvl) {
    case 1:
      document.body.style.backgroundImage = "url('images/bg.png')"
      break;
    case 2:
      document.body.style.backgroundImage = "url('images/bg1.png')"
      game.nextSc = 100000000000
      document.getElementById("clicker").src = "images/tank1.png";
      break;
    case 3:
      document.body.style.backgroundImage = "url('images/bg2.png')"
      game.nextSc = 10000000000000
      document.getElementById("clicker").src = "images/tank2.png";
      break;
    case 4:
      document.body.style.backgroundImage = "url('images/bg3.png')"
      game.nextSc = 100000000000000
      document.getElementById("clicker").src = "images/tank3.png";
      break;
    case 5:
      document.body.style.backgroundImage = "url('images/bg4.png')"
      game.nextSc = 1000000000000000
      document.getElementById("nextSc").style.display = "none";
      document.getElementById("clicker").src = "images/tank4.png";
      break;
    default:
      document.body.style.backgroundImage = "url('images/bg0.png')"
      break;
  }
};

document.getElementById("clicker").addEventListener("click", function() {
  game.totalClicks++;
  game.addToScore(game.clickValue);
}, false);

window.onload = function() {
  loadGame();
  display.updateScore();
  display.updateUpgrades();
  display.updateShop();
};

setInterval(function() {
  game.score += game.getScorePS();
  game.totalScore += game.getScorePS();
  display.updateScore();
}, 1000);

setInterval(function() {
  display.updateScore();
  display.updateUpgrades();
}, 10000);

setInterval(function() {
  saveGame();
}, 30000);

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.which == 83) {
    event.preventDefault();
    saveGame();
  }
}, false);
