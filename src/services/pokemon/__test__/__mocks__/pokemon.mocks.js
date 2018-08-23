export const pokemon = {
  name: "foo",
  base_experience: 64,
  sprites: {
    front_default: "bar",
    back_default: "bar",
    front_shiny: "foo",
    back_shiny: "foo",
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
}

export const state = {
  pokemon: {
    data: {
      pokemon,
    },
  },
}
