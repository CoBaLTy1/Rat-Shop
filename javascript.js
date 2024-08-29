
let money = 0;


function addvalue() {
    money += 10; 
    document.getElementById("money-display").textContent = "Money: " + money; 
}

function buying_shy_rat() {
    if (money >= 500) {
            money -= 500;
    document.getElementById("money-display").textContent = "Money: " + money
    } else {
        document.getElementById("money-display").textContent = "Money: " + money
        document.getElementById("notenoughmoney").textContent = "You dont have enough money"
    }
}


function buying_sigma_rat() {
    if (money >= 3500) {
    money -=3500;
    document.getElementById("money-display").textContent = "Money: " + money
    } else {
        document.getElementById("money-display").textContent = "Money: " + money + " You dont have enough money" 

    }

}

function buying_liam() {
    money -=5000;
    document.getElementById("money-display").textContent = "Money: " + money
}
