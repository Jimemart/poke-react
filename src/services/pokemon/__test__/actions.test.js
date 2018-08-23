import * as constants from "../constants"
import * as actions from "../actions"

describe("Pokemon actions", () => {
  it("Inits pokemon fetch", () => {
    const action = actions.fetchPokemonInit(1)
    expect(action).toEqual({
      type: constants.FETCH_POKEMON_INIT,
      payload: {
        pokemonId: 1,
      },
    })
  })

  it("Fetches the pokemon", () => {
    const action = actions.fetchPokemon()
    expect(action).toEqual({
      type: constants.FETCH_POKEMON,
    })
  })

  it("Saves the pokemon when the request is succesful", () => {
    const action = actions.fetchedPokemon({ name: "foo" })
    expect(action).toEqual({
      type: constants.FETCHED_POKEMON,
      payload: {
        pokemon: {
          name: "foo",
        },
      },
    })
  })

  it("Saves an error when the request is unsuccessful", () => {
    const action = actions.fetchPokemonFailed({ code: 400 })
    expect(action).toEqual({
      type: constants.FETCH_POKEMON_FAILED,
      payload: {
        error: {
          code: 400,
        },
      },
    })
  })
})
