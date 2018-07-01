// import React, { Component } from "react";
// import { addNavigationHelpers } from "react-navigation";
// import { connect } from "react-redux";
// import {
//   createReactNavigationReduxMiddleware,
//   createReduxBoundAddListener
// } from "react-navigation-redux-helpers";

// import topNavigator from "../navigators/index";

// const mapStateToProps = state => {
//   return {
//     navigationState: state.topNavigator
//   };
// };

// const middleware = createReactNavigationReduxMiddleware(
//   "root",
//   state => navigationState
// );

// const addListener = createReduxBoundAddListener("root");

// class TopNavigation extends Component {
//   render() {
//     const { dispatch, navigationState } = this.props;
//     return (
//       <topNavigator
//         navigation={addNavigationHelpers({
//           dispatch: dispatch,
//           state: navigationState,
//           addListener
//         })}
//       />
//     );
//   }
// }

// export default connect(mapStateToProps)(TopNavigation);

// // import React, { Component } from "react";
// // import topNavigator from "../navigators/index";
// // import { connect } from "react-redux";
// // import {
// //   reduxifyNavigator,
// //   createNavigationReducer,
// //   createReactNavigationReduxMiddleware
// // } from "react-navigation-redux-helpers";

// // const middleware = createReactNavigationReduxMiddleware(
// //   "root",
// //   state => state.appTopNavigatorReducer
// // );
// // const appTopNavigator = reduxifyNavigator(topNavigator, "root");
// // const mapStateToProps = state => ({
// //   state: state.appTopNavigatorReducer
// // });

// // const AppNavigator = connect(mapStateToProps)(appTopNavigator);
// // export { AppNavigator, middleware };
