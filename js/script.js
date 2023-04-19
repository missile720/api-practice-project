//adds event listener to the button
document.getElementById("inputButton").addEventListener('click', input)

//function that stores input field, clears field and sends input to searchHero function
function input(){
    let name = document.getElementById("inputField").value;
    document.getElementById("inputField").value = "";
    searchHero(name);
}

//function that searches for super hero
function searchHero(name){
    //fetch request was blocked by CORS policy, it means that the API server is not configured to allow cross-origin requests from your domain.
    //Solution was to use a library to make the request for me on my behalf. I used cors-anywhere since I just need to add it to the beginning of the url
    fetch(`http://cors-anywhere.herokuapp.com/https://superheroapi.com/api/9142168772521446/search/${name}`)
        .then((response) => response.json())
        .then((data) => displayHero(data.results))
        .catch(error => console.log(error));
}

//function that displays super hero onto html
function displayHero(data){
    //DOM for the container
    let container = document.getElementById('container');
    //makes sure it is empty
    container.innerHTML = "";
    
    //loop though array of characters
    data.forEach(element => {
        container.innerHTML += `
        <div class="card">
            <div class="row">
                <div class="column">
                    <h2>${element.name}</h2>
                    <div>
                        <img class='img' src="${element.image.url}" alt="">
                    </div>
                </div>
                <div class="column">
                    <h4 class="listTitle">PowerStats:</h4>
                    <ul class="list">
                        <li>Combat: ${element.powerstats.combat}</li>
                        <li>Durability: ${element.powerstats.durability}</li>
                        <li>Intelligence: ${element.powerstats.intelligence}</li>
                        <li>Power: ${element.powerstats.power}</li>
                        <li>Speed: ${element.powerstats.speed}</li>
                        <li>Strength: ${element.powerstats.strength}</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <h4 class="listTitle">Biography:</h4>
                <ul class="list">
                    <li>Alignment: ${element.biography.alignment}</li>
                    <li>Alter Egos: ${element.biography["alter-egos"]}</li>
                    <li>First Appearance: ${element.biography["first-appearance"]}</li>
                    <li>Full Name: ${element.biography["full-name"]}</li>
                    <li>Place of Birth: ${element.biography["place-of-birth"]}</li>
                    <li>Publisher: ${element.biography.publisher}</li>
                </ul>
            </div>
        </div>`;
    });
    
}