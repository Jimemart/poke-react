import React from "react";
import { Pill } from "../../../UI";

export const Nature = props => {
  const { name, background } = props;

  return <Pill data-hook="nature" background={background}>{name}</Pill>;
};
