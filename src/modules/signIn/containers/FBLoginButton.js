// import React, { Component } from "react";
// import { View } from "react-native";
// import { FBSDK } from "react-native-fbsdk";

// const { LoginButton } = FBSDK;

// export default class FBLoginButton extends Component {
//   render() {
//     return (
//       <View>
//         <LoginButton
//           publishPermissions={["email"]}
//           onLoginFinished={(error, result) => {
//             if (error) {
//               console.log("Login failed with error: " + error.message);
//             } else if (result.isCancelled) {
//               console.log("Login was cancelled");
//             } else {
//               console.log(
//                 "Login was successful with permissions: " +
//                   result.grantedPermissions
//               );
//             }
//           }}
//           onLogoutFinished={() => alert("User logged out")}
//         />
//       </View>
//     );
//   }
// }

// module.exports = FBLoginButton;
