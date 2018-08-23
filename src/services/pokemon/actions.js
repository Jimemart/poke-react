import * as constants from "./constants"

export const fetchPokemonInit = pokemonId => ({
  type: constants.FETCH_POKEMON_INIT,
  payload: {
    pokemonId,
  },
})

export const fetchPokemon = () => ({
  type: constants.FETCH_POKEMON,
})

export const fetchedPokemon = pokemon => ({
  type: constants.FETCHED_POKEMON,
  payload: {
    pokemon,
  },
})

export const fetchPokemonFailed = error => ({
  type: constants.FETCH_POKEMON_FAILED,
  payload: {
    error,
  },
})
