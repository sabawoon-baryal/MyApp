import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE
} from "../Constants";
import { FORGOT_PASSOWORD_EMAIL_VERIFICATION } from "../../../api/constants";

export const forgotPasswordRequestThunk = payload => {
  return dispatch => {
    dispatch(onForgotPasswordRequest());
    return fetch(FORGOT_PASSOWORD_EMAIL_VERIFICATION, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: payload
      })
    })
      .then(response => {
        if (response.status == 200) return response.json();
        else throw response;
        return false;
      })
      .then(responseJson => {
        let payload = {
          email: responseJson.email,
          verificationCode: responseJson.verificationCode
        };
        dispatch(onForgotPasswordRequestSuccess(payload));
        return true;
      })
      .catch(error => {
        dispatch(onForgotPasswordRequestFailure(error.message));
        console.log("forgot password email verification error", error);
        return false;
      });
  };
};

const onForgotPasswordRequest = () => {
  return {
    type: FORGOT_PASSWORD_REQUEST,
    requesting: true,
    request_complete: false,
    verified_email: false
  };
};
const onForgotPasswordRequestSuccess = payload => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    requesting: false,
    request_complete: true,
    verified_email: true,
    payload
  };
};
const onForgotPasswordRequestFailure = error => {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    requesting: false,
    request_complete: false,
    verified_email: false,
    error
  };
};
