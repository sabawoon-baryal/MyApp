// import React, { Component } from "react";
// import { addNavigationHelpers } from "react-navigation";
// import { connect } from "react-redux";
// import {
//   createReactNavigationReduxMiddleware,
//   createReduxBoundAddListener
// } from "react-navigation-redux-helpers";

// import { signUpRoutesNavigator } from "../navigators/ForgotPasswordRoutes";

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

// class SignUpNavigator extends Component {
//   render() {
//     const { dispatch, navigationState } = this.props;
//     return (
//       <signUpRoutesNavigator
//         navigation={addNavigationHelpers({
//           dispatch: dispatch,
//           state: navigationState,
//           addListener
//         })}
//       />
//     );
//   }
// }

// // export default connect(mapStateToProps)(SignUpNavigator);

// // import React, { Component } from "react";
// // import { signUpRoutesNavigator } from "../navigators/SignUpRoutes";
// // import { connect } from "react-redux";
// // import {
// //   reduxifyNavigator,
// //   createNavigationReducer,
// //   createReactNavigationReduxMiddleware
// // } from "react-navigation-redux-helpers";

// // const appSignUpNavigator = reduxifyNavigator(signUpRoutesNavigator);
// // const mapStateToProps = state => ({
// //   state: state.appTopNavigatorReducer
// // });

// // const SignUpNavigator = connect(mapStateToProps)(appSignUpNavigator);
// // export { SignUpNavigator };
