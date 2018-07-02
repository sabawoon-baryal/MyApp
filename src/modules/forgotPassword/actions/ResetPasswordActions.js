import {
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS
} from "../Constants";

export const resetPasswordThunk = () => {
  return dispatch => {};
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
