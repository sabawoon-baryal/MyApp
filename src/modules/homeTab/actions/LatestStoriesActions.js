import {
  setUserContact,
  setUserName,
  setUserPassword,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  fetchStories,
  fetchStoriesSuccess,
  fetchStoriesFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  addStoryButtonCondition,
  onAddStoryButtonPressed,
  onEditStoryRequest,
  onEditStorySuccess,
  onEditStoryFailure,
  onChangeProfilePictureRequest,
  onChangeProfilePictureSuccess,
  onChangeProfilePictureFailure,
  getUserStoriesRequest,
  getUserStoriesSuccess,
  getUserStoriesFailure,
  passSelectedUserStoryRequest,
  passSelectedUserStorySuccess,
  passSelectedUserStoryFailure,
  getUserEmergencyRequestsRequest,
  getUserEmergencyRequestsSuccess,
  getUserEmergencyRequestsFailure
} from "../Constants";
export const fetchRequestStories = () => {
  return {
    type: fetchStories,
    loading: true
  };
};

export const fetchSuccessStories = stories => {
  return {
    type: fetchStoriesSuccess,
    loading: false,
    myStories: stories,
    error: null
  };
};

export const fetchFailureStories = () => {
  return {
    type: fetchStoriesFailure,
    loading: false,
    error: "Failed loading stories"
  };
};

// edit story
export const editStoryRequest = (id, text, image, imageHeight) => {
  return {
    type: onEditStoryRequest,
    storyID: id,
    storyText: text,
    storyImage: image,
    storyImageHeight: imageHeight,
    editingStory: true,
    edited: false
  };
};

export const editStorySuccess = (id, text, image) => {
  return {
    type: onEditStorySuccess,
    storyID: id,
    storyText: text,
    storyImage: image,
    editingStory: false,
    edited: true,
    error: null
  };
};

export const editStoryFailure = error => {
  return {
    type: onEditStoryFailure,
    error: error,
    editingStory: false,
    edited: false
  };
};
