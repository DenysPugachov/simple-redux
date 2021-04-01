import { CHANGE_THEME, DECREMENT, DISABLE_BTNS, ENABLE_BTNS, INCREMENT, } from "./types"


export function increment() {
  return { type: INCREMENT }
}

export function decrement() {
  return { type: DECREMENT }
}

export function async_increment() {
  //run dispatch here instead of rootReducer
  return function (dispatch) {
    dispatch(disableBtns())
    setTimeout(() => {
      dispatch({ type: INCREMENT })
      dispatch(enableBtns())
    }, 1000);

  }
}
export function changeTheme(currentThemeClass) {
  return {
    type: CHANGE_THEME,
    payload: currentThemeClass
  }
}

export function disableBtns() {
  return { type: DISABLE_BTNS }
}

export function enableBtns() {
  return { type: ENABLE_BTNS }
}