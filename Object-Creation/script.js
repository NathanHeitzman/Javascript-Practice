/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const DollarDisplay = document.getElementById("dollars-displayed");
const CardActivation = document.getElementById("activation-displayed");

const libraryCard = {
    name: "Hennepin county library card",
    id: 1234, //not putting in a real id
    age: 1, //in years
    isActive: true,
    changeActivation:function(status){ //activate or deactivate library card
        this.isActive = status;
        if(status){
            CardActivation.textContent = "Library Card: Active";
        } else{
            CardActivation.textContent = "Library Card: Deactivated";
        }
    }
};

const wallet = { //a simplified wallet object that holds a library card and various bills, minimal slots
    color : "black",
    cashAmount: 0, //in USD
    libraryCard: libraryCard,
    insertCash:function(bill){ //update cash amount in the wallet
        switch(bill){
            case "one":
            case 1:
                this.cashAmount++;
                DollarDisplay.textContent = "Wallet Amount: $" + this.cashAmount.toString() + ".00";
                console.log("Wallet now holds: ",this.cashAmount," dollars");
                console.log("Available slots remaining: ",this.availablePockets);
                break; //avoid fallthrough
            
            case "five": //for sanity sake lets assume all other bills didn't exist
            case 5:
                this.availablePockets
                this.cashAmount += 5;
                console.log("Wallet now holds: ",this.cashAmount," dollars");
                console.log("Available slots remaining: ",this.availablePockets);
                break;
        }
    },
    decDollar:function(){
        this.cashAmount--;
        DollarDisplay.textContent = "Wallet Amount: $" + this.cashAmount.toString() + ".00";
        console.log("decremented cash amount");
    }
};


//Declare variables for buttons to asign them to object methods
const AddDollarButton = document.getElementById("add-dol");
const SubDollarButton = document.getElementById("sub-dol");
const ActivateCardButton = document.getElementById("cardAct");
const DeactivateCardButton = document.getElementById("cardDeac");

//function calls when the button is clicked, use anonymous functions to make sure it only runs the function when button is clicked
AddDollarButton.addEventListener('click', () => {wallet.insertCash("one")});
SubDollarButton.addEventListener('click',() => {wallet.decDollar()});
ActivateCardButton.addEventListener('click',() => {libraryCard.changeActivation(true)});
DeactivateCardButton.addEventListener('click',() => {libraryCard.changeActivation(false)});

/**
 * This function will run through all buttons on the page and update their
 * values with +/- when the width of the page gets too small to ensure a good design
 * if the page grows back the original names will return.
 * console logs available for debugging
 */
function UpdateButtonNames(){
    const buttons = document.querySelectorAll("button");
    const updates = ["+","-","+","-"];
    const returns = ["Add a dollar","Take a dollar","Activate Card","Deactivate Card"]
    if (window.innerWidth < 770){
        for(let index = 0; index < updates.length; index++){
            const cur_button = buttons[index];
            cur_button.textContent = updates[index];
            //console.log("updating button: ",index);
        }
    } else{
        for(let index = 0; index < returns.length; index++){
            const cur_button = buttons[index];
            cur_button.textContent = returns[index];
            //console.log("reverting button: ",index);
        }
    }
}
//every time the window is resized this function will run
window.addEventListener("resize",UpdateButtonNames);
window.addEventListener("DOMContentLoaded",UpdateButtonNames);