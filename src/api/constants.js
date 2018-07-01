import { Platform } from "react-native";

const localhost = Platform.OS === "android" ? "172.30.10.42" : "localhost";

// login
const LOGIN_URL = `http://${localhost}:8000/oauth/token`;
const ACCESS_USER_URL = `http://${localhost}:8000/api/user`;

// signup
const SIGNUP_URL = `http://${localhost}:8000/api/register`;
const SIGNUP_VERIFY = `http://${localhost}:8000/api/user`;

// Forgot password
const FORGOT_PASSOWORD_EMAIL_VERIFICATION = `http://${localhost}:8000/api/user`;

// reset password
const RESET_PASSWORD_ROUTE = `http://${localhost}:8000/api/user`;

export {
  LOGIN_URL,
  ACCESS_USER_URL,
  SIGNUP_URL,
  SIGNUP_VERIFY,
  FORGOT_PASSOWORD_EMAIL_VERIFICATION,
  RESET_PASSWORD_ROUTE
};
