import { StackNavigator } from "react-navigation";

import SignIn from "../../modules/signIn/containers/SignIn";
import { SignUpRoutesNavigator } from "./SignUpRoutes";
import { ForgotPasswordRoutesNavigator } from "./ForgotPasswordRoutes";
import { TabRoutesNavigator } from "./TabRoutes";

const routes = {
  SignInRoute: {
    screen: SignIn
  },
  SignUpRoutes: { screen: SignUpRoutesNavigator },
  ForgotPasswordRoutes: { screen: ForgotPasswordRoutesNavigator },
  TabRoutes: { screen: TabRoutesNavigator }
};
const routesConfiguration = {
  initialRouteName: "TabRoutes",
  headerMode: "none"
};

export const TopNavigator = StackNavigator(routes, routesConfiguration);
