export function fetchItineraries(key) {
  return dispatch => {
    dispatch(fetchItinerariesStart());
    fetch(`http://localhost:5000/itineraries/${key}`)
      .then(res => res.json())
      .then(res => {
        dispatch(fetchItinerariesSuccess(res));
      })
      .catch(error => dispatch(fetchItinerariesMeh(error)));
  };
}

export const fetchItinerariesStart = () => {
  return {
    type: FETCH_ITINERARIES_START
  };
};

export const fetchItinerariesSuccess = itineraries => ({
  type: FETCH_ITINERARIES_SUCCESS,
  payload: { itineraries, msg: "great_success" }
});

export const fetchItinerariesMeh = error => ({
  type: FETCH_ITINERARIES_MEH,
  payload: {
    error,
    msg: "meh"
  }
});

export const FETCH_ITINERARIES_START = "FETCH_ITINERARIES_START";
export const FETCH_ITINERARIES_SUCCESS = "FETCH_ITINERARIES_SUCCESS";
export const FETCH_ITINERARIES_MEH = "FETCH_ITINERARIES_MEH";
