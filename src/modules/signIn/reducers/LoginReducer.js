import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants";

const defaultState = {
  userPayload: null,
  loggedIn: false,
  loggingIn: false,
  error: null
};

export default function LoginReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggedIn: action.loggedIn,
        loggingIn: action.loggingIn
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: action.loggedIn,
        loggingIn: action.loggingIn,
        userPayload: action.userPayload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: action.loggedIn,
        loggingIn: action.loggingIn,
        loginError: action.loginError
      };
    default:
      return state;
  }
}
