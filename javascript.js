
let money = 0;



function addvalue() {
    money += 10; 
    
    document.getElementById("money-display").textContent = "Money: " + money;
    document.getElementById("money-display").style.transformOrigin = "center"
    document.getElementById("money-display").style.transition = "transform 0.7s ease"
    document.getElementById("money-display").style.transform = "scale(1.8)";
    
    setTimeout(() => {
        document.getElementById("money-display").style.transform = "scale(1.0)"

    }, 10);
    document.getElementById("notenoughmoney").textContent = ""
}

function buying_shy_rat() {
    if (money >= 500) {
            money -= 500;
    document.getElementById("money-display").textContent = "Money: " + money
    document.getElementById("notenoughmoney").textContent = ""
    } else {
        document.getElementById("notenoughmoney").textContent = "You dont have enough money"
    }
}


function buying_sigma_rat() {
    if (money >= 3500) { 
    money -=3500;
    document.getElementById("money-display").textContent = "Money: " + money
    document.getElementById("notenoughmoney").textContent = ""

    } else {
        document.getElementById("notenoughmoney").textContent = " You dont have enough money" 

    }

}

function buying_liam() {
    if (money >=5000) {
            document.getElementById("money-display").textContent = "Money: " + money
            document.getElementById("notenoughmoney").textContent = ""
    } else {
        document.getElementById("notenoughmoney").textContent = " You dont have enough money"
    }
   


}
