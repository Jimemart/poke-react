import { expectSaga } from "redux-saga-test-plan"
import { throwError } from "redux-saga-test-plan/providers"
import { call as mockCall } from "redux-saga-test-plan/matchers"

import { fetchPokemonApi } from "../api"
import { reducer } from "../reducers"
import * as actions from "../actions"
import * as constants from "../constants"
import { fetchPokemonSaga } from "../saga"

describe("fetchPokemon Saga", () => {
  const state = {
    data: null,
    error_code: null,
    error_msg: null,
    loading: null,
  }

  it("handles errors", () => {
    const error = "test-error"
    const expectedErrorAction = actions.fetchPokemonFailed(error)

    return expectSaga(fetchPokemonSaga, actions.fetchPokemonInit(123))
      .withState(state)
      .provide([[mockCall.fn(fetchPokemonApi), throwError(error)]])
      .put({ type: constants.FETCH_POKEMON })
      .put(expectedErrorAction)
      .run()
  })

  it("should set the store state", () => {
    const response = { foo: "bar" }
    const expectedFinalState = {
      loading: false,
      data: {
        pokemon: {
          foo: "bar",
        },
      },
      error_code: null,
      error_msg: null,
    }

    return expectSaga(fetchPokemonSaga, actions.fetchPokemonInit(1))
      .withReducer(reducer)
      .withState(state)
      .provide([[mockCall.fn(fetchPokemonApi), response]])
      .hasFinalState(expectedFinalState)
      .run()
  })
})
