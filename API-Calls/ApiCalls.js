fetchButton = document.getElementById("fetch-button");
input = document.getElementById("user-input");
errorMessage = document.getElementById("error-msg");

fetchButton.addEventListener("click", () => {
    inputValue = input.value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`) //fetch a pokemon based on provided name
    .then(response => { //log a response then turn it into json
        console.log(response); 
        if(errorMessage.textContent === "Error: Pick a real pokemon"){
            errorMessage.textContent = "";
        }
        return response.json();
    }) 
    .then(data => {
        console.log(data);
        const NormalSprite = data.sprites.front_default;
        const ShinySprite = data.sprites.front_shiny;
        const NormalDisplay = document.getElementById("normal");
        const ShinyDisplay = document.getElementById("shiny");
        NormalDisplay.src = NormalSprite;
        ShinyDisplay.src = ShinySprite;
    })
    .catch(error => 
        {console.error(error); //print error and turn icons to red x's
        const NormalDisplay = document.getElementById("normal");
        const ShinyDisplay = document.getElementById("shiny");
        NormalDisplay.src = "red-x.png";
        ShinyDisplay.src = "red-x.png";
        errorMessage.textContent = "Error: Pick a real pokemon"
    })
})
//when enter key is pressed while user is in input field submit button will be clicked
input.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){
        fetchButton.click();
    }
})


