import { getPokemonInfo } from "../selectors"
import { state } from "./__mocks__/pokemon.mocks"

describe("getPokemonInfo selector", () => {
  it("should return the pokemon", () => {
    const result = {
      name: "foo",
      img: [["bar", "bar"], ["foo", "foo"]],
      weight: 30,
      height: 20,
      nature: [{ name: "me", color: "white" }],
    }
    expect(getPokemonInfo(state)).toEqual(result)
  })
})
