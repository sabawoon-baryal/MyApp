import {
  PROFILE_CHANGE_FAILURE,
  PROFILE_CHANGE_REQUEST,
  PROFILE_CHANGE_SUCCESS
} from "../Constants";

const defaultState = {
  profile_updating: false,
  profile_updated: false,
  payload: null,
  error: null
};

export default function ProfileChangeReducer(state = defaultState, action) {
  switch (action.type) {
    case PROFILE_CHANGE_REQUEST:
      return {
        ...state,
        profile_updating: action.profile_updating,
        profile_updated: action.profile_updated
      };
    case PROFILE_CHANGE_SUCCESS:
      return {
        ...state,
        profile_updated: action.profile_updated,
        profile_updating: action.profile_updating,
        profilePicturePayload: action.profileUpdatePayload
      };
    case PROFILE_CHANGE_FAILURE:
      return {
        ...state,
        profile_updated: action.profile_updated,
        profile_updating: action.profile_updating,
        profilePictureError: action.profileUpdateError
      };
    default:
      return state;
  }
}
