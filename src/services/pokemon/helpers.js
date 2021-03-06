import { natureColors } from "../../utils/colors";

export const setColorForNature = nature =>
  nature.map(elem => ({ name: elem, color: natureColors[elem] || "white" }));

export const configurePokemon = pokemon => {
  if (!pokemon) return {};
  const {
    name,
    sprites: { front_default, back_default, front_shiny, back_shiny },
    types,
    height,
    weight
  } = pokemon;

  const nature = types.map(elem => elem.type.name);

  return {
    name,
    img: [[front_default, back_default], [front_shiny, back_shiny]],
    nature: setColorForNature(nature),
    height,
    weight
  };
};
