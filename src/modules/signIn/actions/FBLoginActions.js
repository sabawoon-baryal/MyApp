import {
  FB_LOGIN_REQUEST,
  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAILURE
} from "../constants";

import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";

export const fbLoginThunk = () => {
  return dispatch => {
    dispatch(onFBLoginRequest());

    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      result => {
        if (result.isCancelled) {
          console.log("Login Cancelled");
        } else {
          console.log(
            "Login Success permission granted:" + result.grantedPermissions
          );

          AccessToken.getCurrentAccessToken()
            .then(data => {
              const { accessToken } = data.accessToken;
              console.log("first ", data.accessToken);
              if (data.accessToken !== null) {
                //  after starting GraphRequestManager, this callback is called
                const responseInfoCallback = (error, result) => {
                  if (error) {
                    console.log("new error: ", error);
                    dispatch(onFBLoginFailure(error));
                  } else {
                    console.log("new success: ", result);
                    dispatch(onFBLoginSuccess(result));
                  }
                };

                const infoRequest = new GraphRequest(
                  "/me",
                  {
                    accessToken: accessToken,
                    parameters: {
                      fields: {
                        string: "email,name,first_name,middle_name,last_name"
                      }
                    }
                  },
                  responseInfoCallback
                );

                // Start the graph request.
                new GraphRequestManager().addRequest(infoRequest).start();
              }
            })
            .catch(error => {
              console.log("first error: ", error);
              dispatch(onFBLoginFailure(error));
            });
        }
      },
      error => {
        console.log("some error occurred!!");
      }
    );
  };
};

const onFBLoginRequest = () => {
  return {
    type: FB_LOGIN_REQUEST,
    fbLoggedIn: false,
    fbLoggingIn: true
  };
};

const onFBLoginSuccess = payload => {
  return {
    type: FB_LOGIN_SUCCESS,
    fbLoggedIn: true,
    fbLoggingIn: false,
    fbLoginPayload: payload
  };
};
const onFBLoginFailure = error => {
  return {
    type: FB_LOGIN_FAILURE,
    fbLoggedIn: false,
    fbLoggingIn: false,
    fbLoginError: error
  };
};
