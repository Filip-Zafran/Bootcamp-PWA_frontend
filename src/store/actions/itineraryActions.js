export function fetchData(key) {
  return dispatch => {
    dispatch(fetchCitiesStart());
    fetch(`http://localhost:5000/cities/${key}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchItinerariesSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchItinerariesMeh(error));
      });
  };
}

export const fetchItinerariesStart = () => {
  return {
    type: FETCH_ITINERARIES_START
  };
};

export const fetchCitiesSuccess = cities => ({
  type: FETCH_ITINERARIES_START,
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
