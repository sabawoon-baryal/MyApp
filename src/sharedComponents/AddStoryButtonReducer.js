import {
  ADD_NEW_STORY_BUTTON_CONDITION,
  ADD_NEW_STORY_BUTTON_PRESSED
} from "../modules/moreOptionsTab/Constants";

const defualtState = {
  disablePostBtn: true,
  pressed: false
};

export default function AddStoryButtonReducer(state = defualtState, action) {
  switch (action.type) {
    case ADD_NEW_STORY_BUTTON_CONDITION:
      return {
        ...state,
        disablePostBtn: action.disablePostBtn
      };
    case ADD_NEW_STORY_BUTTON_PRESSED:
      return {
        ...state,
        onPressPostBtn: action.pressed
      };
    default:
      return state;
  }
}
