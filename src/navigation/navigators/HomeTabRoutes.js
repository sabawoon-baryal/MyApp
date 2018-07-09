import { StackNavigator } from "react-navigation";

import LatestStories from "../../modules/homeTab/containers/LatestStories";
import AddNewStory from "../../modules/moreOptionsTab/containers/AddNewStory";
import EmergencyRequest_PublicView from "../../modules/emergencyRequest/containers/EmergencyRequest_PublicView";

const routes = {
  LatestStoriesRoute: { screen: LatestStories },
  AddNewStory: { screen: AddNewStory },
  EmergencyRequestRoute: { screen: EmergencyRequest_PublicView }
};
const routesConfiguration = {
  initialRouteName: "LatestStoriesRoute"
};

export const HomeTabRoutesNavigator = StackNavigator(
  routes,
  routesConfiguration
);
