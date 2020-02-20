import {
  FETCH_ITINERARIES_START,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_MEH
} from "../actions/itineraryActions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function itineraryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITINERARIES_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_ITINERARIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.itineraries
      };

    case FETCH_ITINERARIES_MEH:
      return {
        ...state,
        loading: false,
        error: action.payload.meh
      };

    default:
      return state;
  }
}
