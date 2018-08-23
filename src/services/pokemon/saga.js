import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";
import { fetchPokemonApi } from "./api";
import * as constants from "./constants";

export function* fetchPokemonSaga({ payload: { pokemonId } }) {
    try {
        yield put(actions.fetchPokemon());
        const pokemon = yield call(fetchPokemonApi, pokemonId);
        yield put(actions.fetchedPokemon(pokemon));
    } catch (error) {
        // console.error(error)
        yield put(actions.fetchPokemonFailed(error));
    }
}

export const pokemonSagas = [
    takeEvery(constants.FETCH_POKEMON_INIT, fetchPokemonSaga)
];
