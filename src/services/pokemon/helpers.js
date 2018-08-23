export const configurePokemon = pokemon => {
  if (!pokemon) return {}
  const {
    name,
    sprites: { front_default },
    types,
    height,
    weight,
  } = pokemon
  const nature = types.map(elem => elem.type.name)
  return {
    name,
    img: front_default,
    nature,
    height,
    weight,
  }
}
