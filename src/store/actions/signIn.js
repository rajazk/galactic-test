import * as Constants from "../constants/constants";

function requestLogin() {
  return {
    type: Constants.LOGIN_REQUEST,
  };
}

function receiveLogin() {
  return {
    type: Constants.LOGIN_SUCCESS,
  };
}

function loginError() {
  return {
    type: Constants.LOGIN_FAILURE,
  };
}

export const loginUser = (creds) => async (dispatch) => {
  dispatch(requestLogin());
  return new Promise(async (resolve, reject) => {
    const { email, password } = creds;

    try {
      if (email === "test@biorelate.tech" && password === "testPassword123") {
        dispatch(receiveLogin());
        resolve("true");
      } else {
        dispatch(loginError("user name and passowrd are not matched"));
      }
    } catch (err) {
      dispatch(loginError("user name and passowrd are not matched"));
      reject("false");
    }
  });
};


export const logoutUser = () => {
  return {
    type: Constants.LOGOUT_REQUEST,
  };
}