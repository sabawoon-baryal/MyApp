import { StackNavigator } from "react-navigation";

import SearchHome from "../../modules/searchTab/containers/SearchHome";

const routes = {
  SearchHomeRoute: { screen: SearchHome }
};
const routesConfiguration = {
  initialRouteName: "SearchHomeRoute"
};

export const SearchTabRoutesNavigator = StackNavigator(
  routes,
  routesConfiguration
);
