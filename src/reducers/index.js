import { combineReducers } from "redux";
import { TopNavigator } from "../navigation/navigators/index";
import LoginReducer from "../modules/signIn/reducers/LoginReducer";
import SignUpReducer from "../modules/signUp/reducers/SignUpReducer";
import ForgotPasswordRequestReducer from "../modules/forgotPassword/reducers/ForgotPasswordRequestReducer";
import ResetPasswordReducer from "../modules/forgotPassword/reducers/ResetPasswordReducer";
import FBLoginReducer from "../modules/signIn/reducers/FBLoginReducer";
import storiesReducer from "../modules/homeTab/reducers/storiesReducer";
import EditStoryReducer from "../modules/homeTab/reducers/EditStoryReducer";
import ProfileChangeReducer from "../modules/moreOptionsTab/reducers/ProfileChangeReducer";
import AddStoryButtonReducer from "../sharedComponents/AddStoryButtonReducer";

const appReducer = combineReducers({
  // list the react navigation & other reducers here
  // this is the center for listing all the app reducer
  // appTopNavigatorReducer,

  LoginReducer,
  FBLoginReducer,
  SignUpReducer,
  ForgotPasswordRequestReducer,
  ResetPasswordReducer,
  storiesReducer,
  EditStoryReducer,
  ProfileChangeReducer,
  AddStoryButtonReducer
});
export default appReducer;
