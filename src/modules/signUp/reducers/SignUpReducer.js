import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_EMAIL,
  SIGNUP_FULL_NAME,
  SIGNUP_PASSWORD,
  SIGNUP_VERIFY_REQUEST,
  SIGNUP_VERIFY_SUCCESS,
  SIGNUP_VERIFY_FAILURE
} from "../constants";

const defaultState = {
  signedUp: false,
  signingUp: false,
  email: "",
  first_name: "",
  last_name: "",
  password: "",
  confirm_Password: "",
  verified: false,
  error: null
};

export default function SignUpReducer(state = defaultState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        signedUp: action.signedUp,
        signingUp: action.signingUp
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signedUp: action.signedUp,
        signingUp: action.signingUp,
        payload: action.payload
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signedUp: action.signedUp,
        signingUp: action.signingUp,
        error: action.signUpError
      };
    case SIGNUP_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case SIGNUP_FULL_NAME:
      return {
        ...state,
        first_name: action.first_name,
        last_name: action.last_name
      };
    case SIGNUP_PASSWORD:
      return {
        ...state,
        password: action.password,
        confirm_Password: action.confirm_Password,
        signingUp: action.signingUp
      };
    case SIGNUP_VERIFY_REQUEST:
      return {
        ...state,
        verified: action.verified,
        verifying: action.verifying
      };
    case SIGNUP_VERIFY_SUCCESS:
      return {
        ...state,
        verified: action.verified,
        verifying: action.verifying
      };
    case SIGNUP_VERIFY_FAILURE:
      return {
        ...state,
        verified: action.verified,
        verifying: action.verifying
      };
    default:
      return state;
  }
}
