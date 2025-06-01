fetchButton = document.getElementById("fetch-button");

fetchButton.addEventListener("click", () => {
    input = document.getElementById("user-input");
    inputValue = input.value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
    .then(response => { //log a response then turn it into json
        console.log(response); 
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
    .catch(error => console.error(error))
})


