import { combineReducers } from "redux";
import { CHANGE_THEME, DECREMENT, INCREMENT, DISABLE_BTNS, ENABLE_BTNS } from "./types";


const initialTheme = {
  value: "light",
  isDisabled: false,
}

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }

  return state;
}

function themeReducer(state = initialTheme, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload }
    case DISABLE_BTNS:
      return { ...state, isDisabled: true }
    case ENABLE_BTNS:
      return { ...state, isDisabled: false }

    default:
      return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
})