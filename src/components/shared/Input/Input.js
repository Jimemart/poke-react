import React from "react"
import { InputStyled } from "../../../UI"

export const Input = props => {
  const { onInputChange, id } = props
  return (
    <InputStyled
      type="number"
      onChange={onInputChange}
      value={id}
      placeholder="Introduce el número de pokemon"
        />
  )
}
