import React from "react"
import PropTypes from "prop-types"
import { Pill } from "UI"

const propTypes = {
  name: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
}

export const Nature = props => {
  const { name, background } = props

  return (
    <Pill data-hook="nature" background={background}>
      {name}
    </Pill>
  )
}

Nature.propTypes = propTypes
