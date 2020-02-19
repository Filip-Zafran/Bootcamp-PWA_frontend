import {
  FETCH_CITIES_START,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_MEH
} from "../actions/cityActions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITIES_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.cities
      };

    case FETCH_CITIES_MEH:
      return {
        ...state,
        loading: false,
        error: action.payload.meh
      };

    default:
      return state;
  }
}
