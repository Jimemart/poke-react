import React from "react"
import PropTypes from "prop-types"

import { InputStyled } from "UI"

const propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
}

const defaultProps = {
  value: "",
  placeholder: "Introduce el número",
}

export const Input = props => {
  const { onInputChange, value, placeholder } = props
  return (
    <InputStyled
      type="number"
      onChange={onInputChange}
      value={value}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps
