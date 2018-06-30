import { StackNavigator } from "react-navigation";

import SignIn from "../../modules/signIn/containers/SignIn";
import SignUpWelcome from "../../modules/signUp/containers/SignUpWelcome";
import ForgotPassword from "../../modules/forgotPassword/containers/ForgotPassword";
import signUpRoutesNavigator from "./SignUpRoutes";

const routes = {
  SignInRoute: {
    screen: SignIn
  },
  SignUpRoutes: { screen: signUpRoutesNavigator },
  ForgotPasswordRoute: { screen: ForgotPassword }
};
const routesConfiguration = {
  initialRouteName: "SignInRoute",
  headerMode: "none"
};

export default (topNavigator = StackNavigator(routes, routesConfiguration));
