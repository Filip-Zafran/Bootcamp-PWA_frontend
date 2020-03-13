import {
  LOG_START,
  LOG_SUCCESS,
  LOG_MEH,
  SET_CURRENT_USER,
  SET_AUTHENTICATION,
  LOGOUT_USER
} from "../actions/logActions";

const empty = require("is-empty");

//what is in redux / store
const initialState = {
  currentUser: {},
  isAuthenticated: false,
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

    // copy pasted
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !empty(action.payload),
        // action.payload = decoded token
        currentUser: action.payload
      };

    case SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: action.payload
      };

    default:
      return state;
  }
}
