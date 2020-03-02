import { LOG_START, LOG_SUCCESS, LOG_MEH } from "../actions/logActions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function logReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case LOG_SUCCESS:
      console.log("log initialised", action.payload);
      return {
        ...state,
        loading: false,
        items: action.payload.signup
      };

    case LOG_MEH:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
