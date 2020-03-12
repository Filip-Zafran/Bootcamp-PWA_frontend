import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itineraryReducer";
import signReducer from "./signReducer";
import logReducer from "./logReducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itineraryReducer,
  user: signReducer,
  login: logReducer
});

export default rootReducer;

// I am here just to combine all reducers
