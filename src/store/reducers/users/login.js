import * as Constants from "../../constants/constants";

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  errorMessage: null,
  email: "",
  userName: "",
};

function userLogin(state = initialState, action) {
  switch (action.type) {
    case Constants.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        errorMessage: "",
      });
    case Constants.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: "",
      });
    case Constants.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: "Invalid Email/Password",
      });

    case Constants.LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: "",
      });

    default:
      return state;
  }
}

export default userLogin;
