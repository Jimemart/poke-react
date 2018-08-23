import React, { Component } from "react"
import nanoid from "nanoid"
import { debounce } from "lodash"
import { FlexContainer, Card, Title } from "../../UI"
import { ImageHolder } from "./ImageHolder"
import { Input } from "../shared"

class Pokemon extends Component {
    state = {
      id: 1,
    };

    componentDidMount() {
      const { onFetchPokemon } = this.props
      const { id } = this.state
      onFetchPokemon(id)
    }

    onSearchNewPokemon = debounce(val => {
      const { onFetchPokemon } = this.props
      this.setState({ id: val })
      onFetchPokemon(val)
    }, 300);

    render() {
      const {
        pokemon,
        pokemon: { img },
      } = this.props
      const { id } = this.state
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
            <div>
              <Title>{pokemon.name.toUpperCase()}</Title>
            </div>
            <FlexContainer justify="space-around">
              <div>
                <h3>
                                Height:
                  {pokemon.height}
                </h3>
              </div>
              <div>
                <h3>
                                Weight:
                  {pokemon.weight}
                </h3>
              </div>
            </FlexContainer>
            <FlexContainer justify="center">
              <Input
                value={id}
                onInputChange={({ target: { value } }) => this.onSearchNewPokemon(value)
                            }
                        />
            </FlexContainer>
          </Card>
        </FlexContainer>
      )
    }
}

export default Pokemon
