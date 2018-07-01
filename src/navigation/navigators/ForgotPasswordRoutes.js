import { StackNavigator } from "react-navigation";

import ForgotPasswordRequest from "../../modules/forgotPassword/containers/ForgotPasswordRequest";

const routes = {
  ForgotPasswordRoute: { screen: ForgotPasswordRequest }
};
const routesConfiguration = {
  initialRouteName: "ForgotPasswordRoute",
  headerMode: "none"
};

export const ForgotPasswordRoutesNavigator = StackNavigator(
  routes,
  routesConfiguration
);
