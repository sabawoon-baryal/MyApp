import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE
} from "../Constants";

const defaultState = {
  requesting: false,
  request_complete: false,
  payload: "",
  error: null
};

export default function ForgotPasswordRequestReducer(
  state = defaultState,
  action
) {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        requesting: action.requesting,
        request_complete: action.request_complete
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        requesting: action.requesting,
        request_complete: action.request_complete,
        payload: action.payload
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        requesting: action.requesting,
        request_complete: action.request_complete,
        error: action.error
      };
    default:
      return state;
  }
}
