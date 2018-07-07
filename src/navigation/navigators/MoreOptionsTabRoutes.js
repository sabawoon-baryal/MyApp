import { StackNavigator } from "react-navigation";

import MoreOptionsHome from "../../modules/moreOptionsTab/containers/MoreOptionsHome";
import UserProfile from "../../modules/moreOptionsTab/containers/UserProfile";
import ProfileStories from "../../modules/moreOptionsTab/containers/ProfileStories";
import ProfileSelectedStory from "../../modules/moreOptionsTab/containers/ProfileSelectedStory";

const routes = {
  MoreOptionsHomeRoute: { screen: MoreOptionsHome },
  UserProfileRoute: { screen: UserProfile },
  ProfileStoriesRoute: { screen: ProfileStories },
  SelectedStoryRoute: { screen: ProfileSelectedStory }
};
const routesConfiguration = {
  initialRouteName: "UserProfileRoute"
};

export const MoreOptionsTabRouteNavigator = StackNavigator(
  routes,
  routesConfiguration
);
