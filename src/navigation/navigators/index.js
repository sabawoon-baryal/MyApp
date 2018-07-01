import { StackNavigator } from "react-navigation";

import SignIn from "../../modules/signIn/containers/SignIn";
import { SignUpRoutesNavigator } from "./SignUpRoutes";
import { ForgotPasswordRoutesNavigator } from "./ForgotPasswordRoutes";

const routes = {
  SignInRoute: {
    screen: SignIn
  },
  SignUpRoutes: { screen: SignUpRoutesNavigator },
  ForgotPasswordRoutes: { screen: ForgotPasswordRoutesNavigator }
};
const routesConfiguration = {
  initialRouteName: "SignInRoute",
  headerMode: "none"
};

export const TopNavigator = StackNavigator(routes, routesConfiguration);
