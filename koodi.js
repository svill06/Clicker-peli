let gold = 0;
let goldPerClick = 1;
let upgradeCost = 10;
let goldPerSecond = 0;   
let autoMineCost = 50;    

const goldDisplay = document.getElementById("gold-display");
const mineButton = document.getElementById("mine-button");
const upgradeButton = document.getElementById("upgrade-button");
const autoMineButton = document.getElementById("auto-mine-button");

function updateDisplay() {
    goldDisplay.innerText = `Kulta: ${gold}`;
}

mineButton.addEventListener("click", () => {
    gold += goldPerClick;
    updateDisplay();
});

upgradeButton.addEventListener("click", () => {
    if (gold >= upgradeCost) {
        gold -= upgradeCost;
        goldPerClick += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        upgradeButton.innerText = `Päivitä hakku (Hinta: ${upgradeCost} Kultaa)`;
        updateDisplay();
    } else {
        alert("Ei tarpeeksi kultaa!");
    }
});

autoMineButton.addEventListener("click", () => {
    if (gold >= autoMineCost) {
        gold -= autoMineCost;
        goldPerSecond += 1;
        autoMineCost = Math.floor(autoMineCost * 1.5);
        autoMineButton.innerText = `Osta Automaatti (Hinta: ${autoMineCost} Kultaa)`;
        updateDisplay();
    } else {
        alert("Ei tarpeeksi kultaa!");
    }
});

function automateGold() {
    gold += goldPerSecond;
    updateDisplay();
}

setInterval(automateGold, 1000);

updateDisplay();
