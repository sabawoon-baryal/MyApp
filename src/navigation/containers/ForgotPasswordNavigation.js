// import React, { Component } from "react";
// import { addNavigationHelpers } from "react-navigation";
// import { connect } from "react-redux";
// import {
//   createReactNavigationReduxMiddleware,
//   createReduxBoundAddListener
// } from "react-navigation-redux-helpers";

// import { forgotPasswordRoutesNavigator } from "../navigators/ForgotPasswordRoutes";

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

// class ForgotPasswordNavigation extends Component {
//   render() {
//     const { dispatch, navigationState } = this.props;
//     return (
//       <forgotPasswordRoutesNavigator
//         navigation={addNavigationHelpers({
//           dispatch: dispatch,
//           state: navigationState,
//           addListener
//         })}
//       />
//     );
//   }
// }

// export default connect(mapStateToProps)(ForgotPasswordNavigation);

// // import React, { Component } from "react";
// // import { forgotPasswordRoutesNavigator } from "../navigators/ForgotPasswordRoutes";
// // import { connect } from "react-redux";
// // import {
// //   reduxifyNavigator,
// //   createNavigationReducer,
// //   createReactNavigationReduxMiddleware
// // } from "react-navigation-redux-helpers";

// // const appForgotPasswordNavigator = reduxifyNavigator(
// //   forgotPasswordRoutesNavigator
// // );
// // const mapStateToProps = state => ({
// //   state: state.appTopNavigatorReducer
// // });

// // const ForgotPasswordNavigator = connect(mapStateToProps)(
// //   appForgotPasswordNavigator
// // );
// // export { ForgotPasswordNavigator };
