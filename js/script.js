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
    console.log(data)
}

searchHero('batman')