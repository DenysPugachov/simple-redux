import { DECREMENT, INCREMENT } from "./types"


export function increment() {
  return { type: INCREMENT }
}

export function decrement() {
  return { type: DECREMENT }
}

export function async_increment() {
  //run dispatch here instead of rootReducer
  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: INCREMENT })
    }, 1000);

  }
}
