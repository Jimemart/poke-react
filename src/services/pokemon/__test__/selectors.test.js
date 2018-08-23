import { getPokemonInfo } from "../selectors"
import { state } from "./__mocks__/pokemon.mocks"

describe("getPokemonInfo selector", () => {
  it("should return the pokemon", () => {
    const result = {
      name: "foo",
      img: "bar",
      weight: 30,
      height: 20,
      nature: ["me"],
    }
    expect(getPokemonInfo(state)).toEqual(result)
  })
})
