const api_pokemons = 'https://api-pokemon-teste-mandarin.herokuapp.com/pokemons';

async function getPokemons() {
    const response = await fetch(api_pokemons);
    const data = await response.json();
    const pokemons_section = document.querySelector('section#pokemons_section')
    console.log(data)

    for (x = 0; x < data.length; x++) {
        let card = document.createElement('div');
        let div = document.createElement('div');
        let img = document.createElement('img');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        card.setAttribute("id", `${data[x].name}`)
        card.classList.add("pokemon-card");
        img.src = data[x].image_url
        div.style.backgroundImage = `url(${data[x].background_image_url})`;
        div.classList.add("pokemon-image")
        img.classList.add("pokemon-photo")
        h2.innerHTML = `${data[x].name}`;
        p.innerHTML = `${data[x].category}`;
        div.append(img);
        card.append(div);
        card.append(h2);
        card.append(p);
        pokemons_section.append(card);
    }
}

getPokemons()

async function searchPokemon() {
    document.querySelectorAll('.pokemon-card').forEach(function(el) {
        el.style.display = 'none';
     });
    let searchValue = document.getElementById('search-text').value;  
    const response = await fetch(`${api_pokemons}?name=${searchValue}`);
    const pokemon = await response.json();

    let card = document.createElement('div');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    card.setAttribute("id", `${pokemon[0].name}`);
    card.classList.add("pokemon-card");
    img.src = pokemon[0].image_url;
    div.style.backgroundImage = `url(${pokemon[0].background_image_url})`;
    div.classList.add("pokemon-image");
    img.classList.add("pokemon-photo");
    h2.innerHTML = `${pokemon[0].name}`;
    p.innerHTML = `${pokemon[0].category}`;
    div.append(img);
    card.append(div);
    card.append(h2);
    card.append(p);
    pokemons_section.append(card);
}