import { combineReducers } from "redux";
import ReducerWeather from "./reducerWeather";

const rootReducer = combineReducers({
  weather: ReducerWeather
});

export default rootReducer;
