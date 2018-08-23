import * as constants from "./constants"

const initialState = {
  data: null,
  error_code: null,
  error_msg: null,
  loading: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_POKEMON:
      return {
        ...state,
        loading: true,
      }
    case constants.FETCHED_POKEMON:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case constants.FETCH_POKEMON_FAILED:
      return {
        ...state,
        loading: false,
        ...action.payload,
      }
    default:
      return state
  }
}

export default reducer
