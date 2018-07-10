import { StackNavigator } from "react-navigation";

import MoreOptionsHome from "../../modules/moreOptionsTab/containers/MoreOptionsHome";
import UserProfile from "../../modules/moreOptionsTab/containers/UserProfile";
import ProfileStories from "../../modules/moreOptionsTab/containers/ProfileStories";
import ProfileSelectedStory from "../../modules/moreOptionsTab/containers/ProfileSelectedStory";
import AddNewStory from "../../modules/moreOptionsTab/containers/AddNewStory";
import AddStoryHeaderButton from "../../modules/moreOptionsTab/containers/AddStoryHeaderButton";
import EmergencyRequests from "../../modules/emergencyRequest/containers/EmergencyRequests";
import EmergencyRequest_PublicView from "../../modules/emergencyRequest/containers/EmergencyRequest_PublicView";

const routes = {
  MoreOptionsHomeRoute: { screen: MoreOptionsHome },
  UserProfileRoute: { screen: UserProfile },
  ProfileStoriesRoute: { screen: ProfileStories },
  SelectedStoryRoute: { screen: ProfileSelectedStory },
  AddNewStoryRoute: { screen: AddNewStory },
  AddStoryHeaderButtonRoute: { screen: AddStoryHeaderButton },
  EmergencyRequestsRoute: { screen: EmergencyRequests },
  EmergencyRequest_PublicViewRoute: { screen: EmergencyRequest_PublicView }
};
const routesConfiguration = {
  initialRouteName: "MoreOptionsHomeRoute"
};

export const MoreOptionsTabRouteNavigator = StackNavigator(
  routes,
  routesConfiguration
);
