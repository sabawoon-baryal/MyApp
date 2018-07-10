import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_EMAIL,
  SIGNUP_FULL_NAME
} from "../constants";
import { SIGNUP_URL } from "../../../api/constants";

// SignUP with async action creator:
// this is a thunk:

const signUpThunk = payload => {
  return dispatch => {
    dispatch(onSignUpRequest());
    fetch(SIGNUP_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: payload.email,
        first_name: payload.first_name,
        last_name: payload.last_name,
        password: payload.password,
        confirm_password: payload.confirm_password
      })
    })
      .then(response => {
        if (response.status == 200) return response.json();
        else throw response.json();
        return null;
      })
      .then(responseJson => {
        if (responseJson.success !== null)
          dispatch(onSignUpSuccess(responseJson.success));

        return true;
      })
      .catch(error => {
        console.log("sign up error: ", error);
        dispatch(onSignUpSuccess(error));
        return true;
      });
  };
};

// signup actions
const onSignUpRequest = () => {
  return {
    type: SIGNUP_REQUEST,
    signedUp: false,
    signingUp: true
  };
};

const onSignUpSuccess = payload => {
  return {
    type: SIGNUP_SUCCESS,
    signedUp: true,
    signingUp: false,
    payload
  };
};

const onSignUpFailure = signUpError => {
  return {
    type: SIGNUP_FAILURE,
    signedUp: false,
    signingUp: false,
    signUpError
  };
};

// signup parameters
const onSignUpEmail = email => {
  return {
    type: SIGNUP_EMAIL,
    email
  };
};
const onSignUpFullName = (first_name, last_name) => {
  return {
    type: SIGNUP_FULL_NAME,
    first_name,
    last_name
  };
};

export { signUpThunk, onSignUpEmail, onSignUpFullName };
