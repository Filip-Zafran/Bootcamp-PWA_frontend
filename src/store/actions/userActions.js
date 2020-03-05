export function createUser(user) {
  return dispatch => {
    console.log("TO SEE CREATE SUER");
    dispatch(createUserStart());

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", user.name);
    urlencoded.append("createPass", user.createPass);

    urlencoded.append("email", user.email);
    urlencoded.append("avatar", user.avatar);
    fetch("http://localhost:5000/user/SignUp", {
      method: "POST",
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
