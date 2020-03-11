export function loggedUser(log) {
  return dispatch => {
    dispatch(logStart());
    console.log("logging start", log);
    // var urlencoded = new URLSearchParams();
    // urlencoded.append("name", log.name);
    // urlencoded.append("password", log.password);

    fetch("http://localhost:5000/login/LogIn", {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      // body: urlencoded
      body: JSON.stringify({ name: log.name, createPass: log.createPass })
    })
      .then(res => {
        console.log("res", res);
        return res.json();
      })
      .then(res => {
        console.log(res);

        localStorage.setItem(
          "tokenName",
          JSON.stringify({
            token: res.token
          })
        );

        // docode

        console.log(res.token);
        if (res.error) {
          throw res.error;
        }
        dispatch(logSuccess(res));
      })
      .catch(error => {
        dispatch(logMeh(error));
      });
  };
}

export const logStart = () => {
  return {
    type: LOG_START
  };
};

export const logSuccess = login => ({
  type: LOG_SUCCESS,
  payload: { login, msg: "login_complete" }
});

export const logMeh = error => ({
  type: LOG_MEH,
  payload: {
    error,
    msg: "login_meh"
  }
});

// export const setCurrentUser = res.token => ({ //
//   type: SET_CURRENT_USER,
//   payload: res.token
// });

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const LOG_START = "LOG_START";
export const LOG_SUCCESS = "LOG_SUCCESS";
export const LOG_MEH = "LOG_MEH";
