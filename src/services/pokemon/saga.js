import { call, put, takeEvery } from "redux-saga/effects"
import * as actions from "./actions"
import { fetchPokemon } from "./api"
import * as constants from "./constants"

export function* fetchPokemonSaga({ payload: { pokemonId } }) {
  try {
    yield put(actions.fetchPokemon())
    const pokemon = yield call(fetchPokemon, pokemonId)
    yield put(actions.fetchedPokemon(pokemon))
  } catch (e) {
    console.log(e)
    yield put(actions.fetchPokemonFailed(e))
  }
}

export const pokemonSagas = [
  takeEvery(constants.FETCH_POKEMON_INIT, fetchPokemon),
]
