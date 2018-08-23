import React, { Component } from "react"

class Pokemon extends Component {
  componentDidMount() {
    const { onFetchPokemon } = this.props
    onFetchPokemon(1)
  }

  render() {
    const { pokemon } = this.props
    return <h1>{pokemon.name}</h1>
  }
}

export default Pokemon
