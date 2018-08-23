import { pokemon, nature } from "./__mocks__/pokemon.mocks"
import { configurePokemon, setColorForNature } from "../helpers.js"

describe("configurePokemon helper", () => {
  it("formats the pokemon object", () => {
    const result = {
      name: "foo",
      img: [["bar", "bar"], ["foo", "foo"]],
      weight: 30,
      height: 20,
      nature: [{ name: "me", color: "white" }],
    }

    expect(configurePokemon(pokemon)).toEqual(result)
  })

  it("formats the nature array", () => {
    const result = [{ name: "grass", color: "green" }]
    expect(setColorForNature(nature)).toEqual(result)
  })
})
