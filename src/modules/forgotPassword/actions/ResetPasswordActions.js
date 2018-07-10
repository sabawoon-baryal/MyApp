import {
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS
} from "../Constants";

import { RESET_PASSWORD_ROUTE } from "../../../api/constants";

export const resetPasswordThunk = payload => {
  return dispatch => {
    dispatch(onResetPasswordRequest());
    return fetch(RESET_PASSWORD_ROUTE, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: payload.password,
        confirm_password: payload.confirm_password
      })
    })
      .then(response => {
        if (response.status == 200) return response.json();
        else throw response.json;
        return false;
      })
      .then(responseJson => {
        dispatch(onResetPasswordSuccess(payload));
        return true;
      })
      .catch(error => {
        dispatch(
          onResetPasswordSuccess({
            password: "hellom",
            confirm_password: "hellom"
          })
        );
        return true;
      });
  };
};

const onResetPasswordRequest = () => {
  return {
    type: RESET_PASSWORD_REQUEST,
    resetting: true,
    reset_complete: false
  };
};

const onResetPasswordSuccess = payload => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    resetting: false,
    reset_complete: true,
    payload
  };
};
const onResetPasswordFailure = error => {
  return {
    type: RESET_PASSWORD_FAILURE,
    resetting: false,
    reset_complete: false,
    error
  };
};
