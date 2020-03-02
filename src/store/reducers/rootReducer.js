import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itineraryReducer";
import signReducer from "./signReducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itineraryReducer,
  user: signReducer
});

export default rootReducer;
