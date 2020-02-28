// export function fetchSign(user) {
//   return dispatch => {
//     console.log(user);
//     dispatch(fetchSignStart());
//     fetch(`http://localhost:5000/SignUp/`)
//       .then(res => res.json())
//       .then(res => {
//         dispatch(fetchSignSuccess(res));
//       })
//       .catch(error => dispatch(fetchSignMeh(error)));
//   };
// }

// export const fetchSignStart = () => {
//   return {
//     type: FETCH_SIGN_START
//   };
// };

// export const fetchSignSuccess = signup => ({
//   type: FETCH_SIGN_SUCCESS,
//   payload: { signup, msg: "great_success" }
// });

// export const fetchSignMeh = error => ({
//   type: FETCH_SIGN_MEH,
//   payload: {
//     error,
//     msg: "meh"
//   }
// });

// export const FETCH_SIGN_START = "FETCH_SIGN_START";
// export const FETCH_SIGN_SUCCESS = "FETCH_SIGN_SUCCESS";
// export const FETCH_SIGN_MEH = "FETCH_SIGN_MEH";

// write add POST

export function createUser(user) {
  return dispatch => {
    dispatch(createUserStart());
    console.log("user in user action", user);
    var urlencoded = new URLSearchParams();
    urlencoded.append("name", user.name);
    urlencoded.append("createPass", user.createPass);

    urlencoded.append("email", user.email);
    urlencoded.append("avatar", user.avatar);
    fetch("http://localhost:5000/user/SignUp", {
      method: "POST",
      // mode: "no-cors",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: urlencoded
    })
      .then(res => {
        console.log("res", res);
        return res.json();
      })
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(createUserSuccess(res));
        // return res;
      })
      .catch(error => {
        dispatch(createUserMeh(error));
      });
  };
}

export const createUserStart = () => {
  return {
    type: CREATE_USER_START
  };
};

export const createUserSuccess = signup => ({
  type: CREATE_USER_SUCCESS,
  payload: { signup, msg: "great_success" }
});

export const createUserMeh = error => ({
  type: CREATE_USER_MEH,
  payload: {
    error,
    msg: "meh"
  }
});

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_MEH = "CREATE_USER_MEH";
