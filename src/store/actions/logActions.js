import jwt_decode from "jwt-decode";

export function loggedUser(log) {
  return dispatch => {
    dispatch(logStart());
    console.log("logging start", log);
    var urlencoded = new URLSearchParams();
    urlencoded.append("name", log.name);
    urlencoded.append("createPass", log.createPass);

    // does not work for no reason
    // const body = JSON.stringify({ name: log.name, createPass: log.createPass });

    fetch("http://localhost:5000/login/LogIn", {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: urlencoded
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

        //
        const decodedToken = jwt_decode(res.token);
        console.log(decodedToken);
        dispatch(setCurrentUser(decodedToken));
        if (res.error) {
          console.log("loginUser error");
          console.log(res.error);
        }

        //

        console.log(res.token);
        if (res.error) {
          throw res.error;
        }
        dispatch(logSuccess(res));

        // wat dis ?
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

export const LOG_START = "LOG_START";
export const LOG_SUCCESS = "LOG_SUCCESS";
export const LOG_MEH = "LOG_MEH";

// copy pasted amy
export const setCurrentUser = decodedToken => ({
  type: SET_CURRENT_USER,
  payload: decodedToken
});

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setAuthentication = () => ({
  type: SET_AUTHENTICATION,
  payload: false
});

export const SET_AUTHENTICATION = "SET_AUTHENTICATION";

export function logoutuser() {
  return dispatch => {
    fetch("http://localhost:5000/login/LogOut")
      .then(res => {
        localStorage.removeItem("tokenName");
        dispatch(setCurrentUser({}));
        dispatch(setAuthentication);
        return res;
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export const LOGOUT_USER = "LOGOUT_USER";
