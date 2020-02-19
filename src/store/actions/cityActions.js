export function fetchData() {
  return dispatch => {
    dispatch(fetchCitiesStart());
    fetch("http://localhost:5000/cities/all")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCitiesSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchCitiesMeh(error));
      });
  };
}

export const fetchCitiesStart = () => {
  return {
    type: FETCH_CITIES_START
  };
};

export const fetchCitiesSuccess = cities => ({
  type: FETCH_CITIES_SUCCESS,
  payload: { cities, msg: "great_success" }
});

export const fetchCitiesMeh = error => ({
  type: FETCH_CITIES_MEH,
  payload: {
    error,
    msg: "meh"
  }
});

export const FETCH_CITIES_START = "FETCH_CITIES_START";
export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";
export const FETCH_CITIES_MEH = "FETCH_CITIES_MEH";
