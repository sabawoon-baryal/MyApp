import { combineReducers } from "redux";
import appTopNavigatorReducer from "../navigation/reducers/appTopNavigatorReducer";
import LoginReducer from "../modules/signIn/reducers/LoginReducer";
import SignUpReducer from "../modules/signUp/reducers/SignUpReducer";

const appReducer = combineReducers({
  // list the react navigation & other reducers here
  // this is the center for listing all the app reducer
  appTopNavigatorReducer,
  LoginReducer,
  SignUpReducer
});
export default appReducer;
