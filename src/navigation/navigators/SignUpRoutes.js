import { StackNavigator } from "react-navigation";

import SignUpWelcome from "../../modules/signUp/containers/SignUpWelcome";
import SignUpContact from "../../modules/signUp/containers/SignUpContact";
import SignUpFullName from "../../modules/signUp/containers/SignUpFullName";
import SignUpPassword from "../../modules/signUp/containers/SignUpPassword";
import SignUpFinal from "../../modules/signUp/containers/SignUpFinal";

const routes = {
  SignUpWelcomeRoute: { screen: SignUpWelcome },
  SignUpContactRoute: { screen: SignUpContact },
  SignUpFullNameRoute: { screen: SignUpFullName },
  SignUpPasswordRoute: { screen: SignUpPassword },
  SignUpFinalRoute: { screen: SignUpFinal }
};
const routesConfiguration = {
  initialRouteName: "SignUpFinalRoute",
  headerMode: "none"
};

export default (signUpRoutesNavigator = StackNavigator(
  routes,
  routesConfiguration
));
