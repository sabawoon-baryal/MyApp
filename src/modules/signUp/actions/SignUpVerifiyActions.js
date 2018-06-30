import {
  SIGNUP_VERIFY_REQUEST,
  SIGNUP_VERIFY_SUCCESS,
  SIGNUP_VERIFY_FAILURE
} from "../constants";
import { SIGNUP_VERIFY } from "../../../api/constants";

// signup verify
// this is thunk

const signUpVerifyThunk = verifyingCode => {
  return dispatch => {
    dispatch(onSignUpVerifiyRequest());
    return fetch(SIGNUP_VERIFY, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        verifyingCode: verifyingCode
      })
    })
      .then(response => {
        if (response.status == 200) return response.json();
        else throw response.json();
        return false;
      })
      .then(responseJson => {
        dispatch(onSignUpVerifiySuccess());
        return true;
      })
      .catch(error => {
        console.log("sign up verify error: ", error);
        dispatch(onSignUpVerifiyFailure());
        return false;
      });
  };
};

const onSignUpVerifiyRequest = () => {
  return {
    type: SIGNUP_VERIFY_REQUEST,
    verifying: true,
    verified: false
  };
};
const onSignUpVerifiySuccess = () => {
  return {
    type: SIGNUP_VERIFY_SUCCESS,
    verifying: false,
    verified: true
  };
};
const onSignUpVerifiyFailure = () => {
  return {
    type: SIGNUP_VERIFY_FAILURE,
    verifying: false,
    verified: false
  };
};

export default signUpVerifyThunk;
