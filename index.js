console.log("index.js OK");
let pokeList = null;

async function getPokemonImage(pokeObject) {

}

async function populateList() {
    try {
        const ulElement = document.querySelector("#the-list");
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        pokeList = await response.json();
        console.log(pokeList.results);
        pokeList.results.forEach(async (object) => {
            const name = object.name;
            const objJson = await fetch(object.url);
            const objData = await objJson.json();
            console.log(objData);
            const imgUrl = objData.sprites.other.dream_world.front_default;
            const liElement = document.createElement("li");
            liElement.id = name;
            // liElement.innerHTML = `<h2>${name}</h2><img src="${imgUrl}" alt="${name}">`;
            liElement.innerHTML = `<h2>${name}</h2><div class="li-image"><img src="${imgUrl}" alt="${name}"></div>`;
            ulElement.appendChild(liElement);
        });
    }
    catch(error) {
        console.error("ERROR: ", error);
    }
}

populateList();