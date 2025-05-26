/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const libraryCard = {
    name: "Hennepin county library card",
    id: 1234, //not putting in a real id
    age: 1, //in years
    isActive: true,
    changeActivation:function(status){ //activate or deactivate library card
        this.isActive = status;
    }
};

const wallet = { //a simplified wallet object that holds a library card and various bills, minimal slots
    color : "black",
    availablePockets: 8,
    cashAmount: 10, //in USD
    libraryCard: libraryCard,
    insertCash:function(bill){ //update cash amount in the wallet
        switch(bill){
            case "one":
            case 1:
                if(this.availablePockets != 0){
                    this.availablePockets--; //change values and print results
                    this.cashAmount++;
                    console.log("Wallet now holds: ",this.cashAmount," dollars");
                    console.log("Available slots remaining: ",this.availablePockets);
                } else{
                    console.log("No space left!");
                }
                break; //avoid fallthrough
            
            case "five": //for sanity sake lets assume all other bills didn't exist
            case 5:
                if(this.availablePockets != 0){
                    this.availablePockets--; //change values and print results
                    this.cashAmount += 5;
                    console.log("Wallet now holds: ",this.cashAmount," dollars");
                    console.log("Available slots remaining: ",this.availablePockets);
                } else{
                    console.log("No space left!"); //print error message
                }
                break;
        }
    }
};
