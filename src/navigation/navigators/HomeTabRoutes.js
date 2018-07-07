import { StackNavigator } from "react-navigation";

import LatestStories from "../../modules/homeTab/containers/LatestStories";

const routes = {
  LatestStoriesRoute: { screen: LatestStories }
};
const routesConfiguration = {
  initialRouteName: "LatestStoriesRoute"
};

export const HomeTabRoutesNavigator = StackNavigator(
  routes,
  routesConfiguration
);
