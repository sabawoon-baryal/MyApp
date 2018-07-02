import { StackNavigator } from "react-navigation";

import ForgotPasswordRequest from "../../modules/forgotPassword/containers/ForgotPasswordRequest";
import EmailVerification from "../../modules/forgotPassword/containers/EmailVerification";
import ResetPassword from "../../modules/forgotPassword/containers/ResetPassword";

const routes = {
  ForgotPasswordRoute: { screen: ForgotPasswordRequest },
  ForgotPasswordEmailVerificationRoute: { screen: EmailVerification },
  ResetPasswordRoute: { screen: ResetPassword }
};
const routesConfiguration = {
  initialRouteName: "ForgotPasswordRoute",
  headerMode: "none"
};

export const ForgotPasswordRoutesNavigator = StackNavigator(
  routes,
  routesConfiguration
);
