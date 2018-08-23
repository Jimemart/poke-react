import React from "react"
import nanoid from "nanoid"
import { FlexContainer } from "../../../UI"

export const ImageHolder = props => {
  const { imgs } = props
  const border = "2px solid #ce0808"
  return (
    <FlexContainer width="40%" border={border}>
      {imgs.map((elem, i) => (
        <div
          key={`img-${nanoid()}`}
          style={{ borderRight: !i ? border : "none" }}
                >
          <img src={elem} alt={`img-${i}`} />
        </div>
      ))}
    </FlexContainer>
  )
}
