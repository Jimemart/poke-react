import { pokemon } from "./__mocks__/pokemon.mocks"
import { configurePokemon } from "../helpers.js"

describe("configurePokemon helper", () => {
  it("formats the pokemon object", () => {
    const result = {
      name: "foo",
      img: [["bar", "bar"], ["foo", "foo"]],
      weight: 30,
      height: 20,
      nature: ["me"],
    }

    expect(configurePokemon(pokemon)).toEqual(result)
  })
})
