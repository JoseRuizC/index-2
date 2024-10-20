const fetchFirstGenPokemons = async () => {
    const pokemonGrid = document.getElementById('pokemon-grid');
    for (let i = 1; i <= 151; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemon = await response.json();
        createPokemonCard(pokemon);
    }
};
const createPokemonCard = (pokemon) => {
    const pokemonGrid = document.getElementById('pokemon-grid');
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const pokemonImage = pokemon.sprites.other['official-artwork'].front_default;
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    card.innerHTML = `
        <img src="${pokemonImage}" alt="${pokemonName}">
        <h3>${pokemonName}</h3>
        <p>#${pokemon.id}</p>
    `;

    pokemonGrid.appendChild(card);
};
fetchFirstGenPokemons();