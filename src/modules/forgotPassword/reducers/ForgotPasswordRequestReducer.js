import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE
} from "../Constants";

const defaultState = {
  requesting: false,
  request_complete: false,
  payload: "",
  error: null,
  resendFlag: false
};

export default function ForgotPasswordRequestReducer(
  state = defaultState,
  action
) {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        requesting: action.requesting,
        request_complete: action.request_complete,
        resendFlag: action.resendFlag
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        requesting: action.requesting,
        request_complete: action.request_complete,
        payload: action.payload,
        resendFlag: action.resendFlag
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        requesting: action.requesting,
        request_complete: action.request_complete,
        error: action.error,
        resendFlag: action.resendFlag
      };
    default:
      return state;
  }
}
