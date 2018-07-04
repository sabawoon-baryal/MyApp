import {
  FB_LOGIN_REQUEST,
  FB_LOGIN_FAILURE,
  FB_LOGIN_SUCCESS
} from "../constants";

const defaultState = {
  fbLoggedIn: false,
  fbLoggingIn: false,
  fbLoginError: null,
  fbLoginPayload: null
};

export default function FBLoginReducer(state = defaultState, action) {
  switch (action.type) {
    case FB_LOGIN_REQUEST:
      return {
        ...state,
        fbLoggedIn: action.fbLoggedIn,
        fbLoggingIn: action.fbLoggingIn
      };
    case FB_LOGIN_SUCCESS:
      return {
        ...state,
        fbLoggedIn: action.fbLoggedIn,
        fbLoggingIn: action.fbLoggingIn,
        fbLoginPayload: action.fbLoginPayload
      };
    case FB_LOGIN_REQUEST:
      return {
        ...state,
        fbLoggedIn: action.fbLoggedIn,
        fbLoggingIn: action.fbLoggingIn,
        fbLoginError: action.fbLoginError
      };
    default:
      return state;
  }
}
