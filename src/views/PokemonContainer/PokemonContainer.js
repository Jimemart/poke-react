import { connect } from "react-redux"
import { Pokemon } from "components"
import * as pokemon from "services/pokemon/actions"
import { getPokemonInfo, getPokemonLoading } from "services/pokemon/selectors"

const mapStateToProps = state => ({
  pokemon: getPokemonInfo(state),
  isLoading: getPokemonLoading(state),
})

const mapDispatchToProps = dispatch => ({
  onFetchPokemon: pokemonId => dispatch(pokemon.fetchPokemonInit(pokemonId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pokemon)
