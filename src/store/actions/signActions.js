export function fetchSign() {
  return dispatch => {
    dispatch(fetchSignStart());
    fetch(`http://localhost:5000/SignUp/`)
      .then(res => res.json())
      .then(res => {
        dispatch(fetchSignSuccess(res));
      })
      .catch(error => dispatch(fetchSignMeh(error)));
  };
}

export const fetchSignStart = () => {
  return {
    type: FETCH_SIGN_START
  };
};

export const fetchSignSuccess = signup => ({
  type: FETCH_SIGN_SUCCESS,
  payload: { signup, msg: "great_success" }
});

export const fetchSignMeh = error => ({
  type: FETCH_SIGN_MEH,
  payload: {
    error,
    msg: "meh"
  }
});

export const FETCH_SIGN_START = "FETCH_SIGN_START";
export const FETCH_SIGN_SUCCESS = "FETCH_SIGN_SUCCESS";
export const FETCH_SIGN_MEH = "FETCH_SIGN_MEH";
