import axios from "axios";
import { CONFIG } from "./environments";

const pokemonAPIUrl = `${CONFIG.api.pokemon}`;

const maptoFetchPokemon = pokemonId => ({
  method: "GET",
  url: `${pokemonAPIUrl}pokemon/${pokemonId}/`
});

export const fetchPokemonApi = pokemonId =>
  axios(maptoFetchPokemon(pokemonId)).then(resp => resp.data);
