import React, { Component } from "react"
import nanoid from "nanoid"
import { debounce } from "lodash"
import PropTypes from "prop-types"

import { FlexContainer, Card, Title } from "UI"
import { Input } from "components/shared"
import { ImageHolder } from "./ImageHolder"
import { Nature } from "./Nature"

const propTypes = {
  onFetchPokemon: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  pokemon: PropTypes.object.isRequired,
}

class Pokemon extends Component {
  state = {
    id: 1,
  };

  componentDidMount() {
    const { onFetchPokemon } = this.props
    const { id } = this.state
    onFetchPokemon(id)
  }

  onSearchNewPokemon = val => {
    this.setState({ id: val })
    if (!val) return
    this.onSearch(val)
  };

  onSearch = debounce(val => {
    const { onFetchPokemon } = this.props
    onFetchPokemon(val)
  }, 600);

  render() {
    const {
      pokemon: { img, name, weight, height, nature },
      isLoading,
    } = this.props

    const { id } = this.state

    const search = (
      <FlexContainer justify="center">
        <Input
          value={id}
          onInputChange={({ target: { value } }) => this.onSearchNewPokemon(value)
          }
          placeholder="Introduce el número de pokemon"
        />
      </FlexContainer>
    )

    const images = (
      <FlexContainer justify="space-between">
        {img.map(elem => (
          <ImageHolder imgs={elem} key={`holder-${nanoid()}`} />
        ))}
      </FlexContainer>
    )

    const natures = (
      <FlexContainer justify="center" direction="column" align="center">
        {nature.map(elem => (
          <Nature
            key={`nature-${nanoid()}`}
            background={elem.color}
            name={elem.name}
          />
        ))}
      </FlexContainer>
    )

    const pokemonCard = (
      <React.Fragment>
        {images}
        <div>
          <Title>{name.toUpperCase()}</Title>
        </div>
        <FlexContainer justify="space-around">
          <div>
            <h3>
              Height:
              {height}
            </h3>
          </div>
          <div>
            <h3>
              Weight:
              {weight}
            </h3>
          </div>
        </FlexContainer>
        {natures}
        {search}
      </React.Fragment>
    )

    return (
      <FlexContainer justify="center" align="center" height="100vh">
        <Card width="40%" height="80%">
          {isLoading ? "Cargando..." : pokemonCard}
        </Card>
      </FlexContainer>
    )
  }
}

export default Pokemon

Pokemon.propTypes = propTypes
