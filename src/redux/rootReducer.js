import { combineReducers } from "redux";
import { CHANGE_THEME, DECREMENT, INCREMENT } from "./types";


const initialTheme = {
  value: "light"
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

    default:
      return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
})