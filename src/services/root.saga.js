import { all } from "redux-saga/effects"

import { pokemonSagas } from "./pokemon/saga"

export function* rootSaga() {
  yield all([...pokemonSagas])
}
