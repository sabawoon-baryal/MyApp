import {
  fecthRequestStories,
  fetchSuccessStories,
  fetchFailureStories
} from "../actions/LatestStoriesActions";
import {
  fetchStories,
  fetchStoriesSuccess,
  fetchStoriesfailure
} from "../Constants";

const initialState = {
  loading: false,
  stories: [],
  error: null
};

export default function storiesReducer(state = initialState, action) {
  switch (action.type) {
    case fetchStories:
      return {
        ...state,
        loading: true
      };
    case fetchStoriesSuccess:
      return {
        ...state,
        loading: false,
        stories: action.myStories !== undefined ? action.myStories : null
      };
    case fetchStoriesfailure:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
