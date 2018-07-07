import { StackNavigator } from "react-navigation";

import AlertsHome from "../../modules/alertsTab/containers/AlertsHome";

const routes = {
  AlertsHomeRoute: { screen: AlertsHome }
};
const routesConfiguration = {
  initialRouteName: "AlertsHomeRoute"
};

export const AlertsTabRoutesNavigator = StackNavigator(
  routes,
  routesConfiguration
);
