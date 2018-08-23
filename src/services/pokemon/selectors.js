import { get } from "lodash"
import { configurePokemon } from "./helpers"

export const getPokemonInfo = state => {
  const pokemon = get(state.pokemon.data, "pokemon")
  return configurePokemon(pokemon)
}

export const getPokemonLoading = state => get(state, "pokemon.loading")
