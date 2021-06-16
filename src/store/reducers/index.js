import { combineReducers } from "redux";
import { userLogin } from "./users/index";

const loginReducers = combineReducers({
  userLogin,
});

export default combineReducers({
  auth: loginReducers,
});
