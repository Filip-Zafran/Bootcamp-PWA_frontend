import {
  FETCH_SIGN_START,
  FETCH_SIGN_SUCCESS,
  FETCH_SIGN_MEH
} from "../actions/signActions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function signReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SIGN_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_SIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.cities
      };

    case FETCH_SIGN_MEH:
      return {
        ...state,
        loading: false,
        error: action.payload.meh
      };

    default:
      return state;
  }
}
