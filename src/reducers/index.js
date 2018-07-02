import { combineReducers } from "redux";
import { TopNavigator } from "../navigation/navigators/index";
import LoginReducer from "../modules/signIn/reducers/LoginReducer";
import SignUpReducer from "../modules/signUp/reducers/SignUpReducer";
import ForgotPasswordRequestReducer from "../modules/forgotPassword/reducers/ForgotPasswordRequestReducer";
import ResetPasswordReducer from "../modules/forgotPassword/reducers/ResetPasswordReducer";

const appReducer = combineReducers({
  // list the react navigation & other reducers here
  // this is the center for listing all the app reducer
  // appTopNavigatorReducer,

  LoginReducer,
  SignUpReducer,
  ForgotPasswordRequestReducer,
  ResetPasswordReducer
});
export default appReducer;
