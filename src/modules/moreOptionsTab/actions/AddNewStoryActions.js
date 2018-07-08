import {
  ADD_NEW_STORY_BUTTON_CONDITION,
  ADD_NEW_STORY_BUTTON_PRESSED
} from "../Constants";
// add story button condition

export const addStoryButton = disable => {
  return {
    type: ADD_NEW_STORY_BUTTON_CONDITION,
    disablePostBtn: disable
  };
};

export const addStoryButtonPressed = pressed => {
  return {
    type: ADD_NEW_STORY_BUTTON_PRESSED,
    pressed: pressed
  };
};
