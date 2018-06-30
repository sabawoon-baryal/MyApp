import { createNavigationReducer } from "react-navigation-redux-helpers";
import topNavigator from "../navigators/index";

const appTopNavigatorReducer = createNavigationReducer(topNavigator);
export default appTopNavigatorReducer;
