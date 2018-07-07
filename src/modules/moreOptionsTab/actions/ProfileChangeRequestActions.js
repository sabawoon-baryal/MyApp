import {
  PROFILE_CHANGE_FAILURE,
  PROFILE_CHANGE_REQUEST,
  PROFILE_CHANGE_SUCCESS
} from "../Constants";
import { PROFILE_UPDATE } from "../../../api/constants";

// import RNFetchBlod library

export const profileUpdateThunk = payload => {
  return dispatch => {
    dispatch(profileUpdateRequest());
    return RNFetchBlob.fetch(
      "PATCH",
      PROFILE_UPDATE,
      {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        "Content-Type": "multipart/form-data"
      },
      [
        {
          name: "image",
          filename: payload.fileName,
          type: payload.type,
          data: RNFetchBlob.wrap(payload.path)
        }
      ]
    )
      .then(response => {
        //   true = response.status == 200
        if (true) {
          return response.json();
        } else {
          throw response;
        }
        return null;
      })
      .then(responseJson => {
        console.log("hello");
        dispatch(profileUpdateSuccess(responseJson));
        return true;
      })
      .catch(error => {
        //   it should be profileUpdateFailure(error), and return false
        console.log("error is ");
        dispatch(profileUpdateSuccess(error));
        return true;
      });
  };
};

const profileUpdateRequest = () => {
  return {
    type: PROFILE_CHANGE_REQUEST,
    profile_updating: true,
    profile_updated: false
  };
};
const profileUpdateSuccess = payload => {
  return {
    type: PROFILE_CHANGE_SUCCESS,
    profile_updating: false,
    profile_updated: true,
    profileUpdatePayload: payload
  };
};
const profileUpdateFailure = error => {
  return {
    type: PROFILE_CHANGE_FAILURE,
    profile_updating: false,
    profile_updated: false,
    profileUpdateError: error
  };
};
