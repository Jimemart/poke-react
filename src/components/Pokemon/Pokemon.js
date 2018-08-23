import React, { Component } from "react"
import nanoid from "nanoid"
import { FlexContainer, Card } from "../../UI"
import { ImageHolder } from "./ImageHolder"

class Pokemon extends Component {
  componentDidMount() {
    const { onFetchPokemon } = this.props
    onFetchPokemon(1)
  }

  render() {
    const {
      pokemon,
      pokemon: { img },
    } = this.props
    return (
      <FlexContainer justify="center" align="center" height="100vh">
        <Card width="40%" height="80%">
          <FlexContainer justify="space-between">
            {img.map(elem => (
              <ImageHolder
                imgs={elem}
                key={`holder-${nanoid()}`}
                            />
            ))}
          </FlexContainer>
          <h1>{pokemon.name}</h1>
        </Card>
      </FlexContainer>
    )
  }
}

export default Pokemon
