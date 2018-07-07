import { StackNavigator } from "react-navigation";

import LocationMap from "../../modules/locationTab/containers/LocationMap";

const routes = {
  LocationMapRoute: { screen: LocationMap }
};
const routesConfiguration = {
  initialRouteName: "LocationMapRoute"
};

export const LocationTabRoutesNavigator = StackNavigator(
  routes,
  routesConfiguration
);
