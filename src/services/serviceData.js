const API_URL = "https://unpkg.com/pokemons@1.1.0/pokemons.json";
const PAGE_SIZE = 4;

const getList = async (page) => {
  const response = await fetch(API_URL);

  if (!response.ok) throw new Error("Error loading data...");

  const data = await response.json();

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const seenPokemon = new Set();

  // Eliminamos los elementos repetidos
  const filteredPokemons = data.results
    .slice(startIndex, endIndex)
    .filter((pokemon) => {
      const isDuplicate = seenPokemon.has(pokemon.name);
      if (!isDuplicate) {
        // No es duplicado, mantener en la lista
        seenPokemon.add(pokemon.name);
        return true;
      }
      // Es duplicado, lo filtramos
      return false;
    });

  const pokemons = filteredPokemons.map((pokemon) => ({
    id: pokemon.national_number,
    name: pokemon.name,
    image: pokemon.sprites.large,
    type: pokemon.type,
    hp: pokemon.hp,
    attack: pokemon.attack,
    defense: pokemon.defense,
    speed: pokemon.speed,
    sp_atk: pokemon.sp_atk,
    sp_def: pokemon.sp_def,
  }));

  return pokemons;
};

export { getList };
