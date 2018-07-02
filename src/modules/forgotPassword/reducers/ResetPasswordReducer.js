import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE
} from "../Constants";

const defaultState = {
  resetting: false,
  reset_complete: false,
  payload: null,
  error: null
};

export default function ResetPasswordReducer(state = defaultState, action) {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        resetting: action.resetting,
        reset_complete: action.reset_complete
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetting: action.resetting,
        reset_complete: action.reset_complete,
        resetPasswordPayload: action.payload
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        resetting: action.resetting,
        reset_complete: action.reset_complete,
        resetPasswordError: action.error
      };
    default:
      return state;
  }
}
