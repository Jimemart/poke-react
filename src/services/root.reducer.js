import { combineReducers } from "redux";
import pokemon from "./pokemon/reducers";

const rootReducer = combineReducers({
  pokemon
});

export default rootReducer;
