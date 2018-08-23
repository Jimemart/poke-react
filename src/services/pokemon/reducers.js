import * as constants from "./constants"

const initialState = {
  data: {
    pokemon: {
      name: "bulbasaur",
      base_experience: 64,
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        back_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      },
      height: 20,
      weight: 30,
      order: 1,
      abilities: [],
      types: [
        {
          type: { name: "me" },
        },
      ],
    },
  },
  error_code: null,
  error_msg: null,
  loading: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_POKEMON:
      return {
        ...state,
        loading: true,
      }
    case constants.FETCHED_POKEMON:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case constants.FETCH_POKEMON_FAILED:
      return {
        ...state,
        loading: false,
        ...action.payload,
      }
    default:
      return state
  }
}

export default reducer
