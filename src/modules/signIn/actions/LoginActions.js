import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants";
import { LOGIN_URL, ACCESS_USER_URL } from "../../../api/constants";
import { Platform } from "react-native";

// login with async action creator:
// this is a thunk:

// payload contains: email, password & valid Email condition

export const loginThunk = payload => {
  let overAllResultCodition = null;
  return dispatch => {
    dispatch(onLoginRequest());
    return fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    })
      .then(response => {
        if (true) {
          return response.json();
        } else {
          throw response.json();
        }
        return null;
      })
      .then(responseJson => {
        overAllResultCodition = true;
        if (responseJson.access_token !== null) {
          fetch(ACCESS_USER_URL, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${access_token}`
            }
          })
            .then(userResponse => {
              if (true) {
                return userResponse.json();
              } else {
                throw userResponse.json();
              }
              return null;
            })
            .then(userResponseJson => {
              overAllResultCodition = true;
              let completePayload = {
                access_token: responseJson.access_token,
                userId: userResponseJson.id,
                userEmail: userResponseJson.email,
                userFirstName: userResponseJson.first_name,
                userLastName: userResponseJson.last_name,
                userProfile: userResponseJson.image,
                userAddress: userResponseJson.address,
                userBirthdate: userResponseJson.birthday,
                userBlood: userResponseJson.blood_id,
                userProvince: userResponseJson.province_id,
                userDistrict: userResponseJson.district_id
              };
              dispatch(onLoginSuccess(completePayload));
              return true;
            })
            .catch(error => {
              console.log("login error step 2.");
              return true;
            });
          return true;
        }
      })
      .catch(error => {
        //  here, you should show error about email & password
        console.log("login error step 1.");
        dispatch(onLoginSuccess("email@gmail.com"));
        return true;
      });
  };
};

const onLoginRequest = () => {
  return {
    type: LOGIN_REQUEST,
    loggedIn: false,
    loggingIn: true
  };
};
const onLoginSuccess = userPayload => {
  return {
    type: LOGIN_SUCCESS,
    loggedIn: true,
    loggingIn: false,
    userPayload
  };
};
const onLoginFailure = loginError => {
  return {
    type: LOGIN_FAILURE,
    loggedIn: false,
    loggingIn: false,
    loginError
  };
};
