import React from "react";
import { Pill } from "../../../UI";

export const Nature = props => {
  const { name, background } = props;

  return <Pill background={background}>{name}</Pill>;
};
