import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./redux/rootReducer"
import { decrement, increment, async_increment, changeTheme } from "./redux/actions"
import thunk from 'redux-thunk';
import logger from "redux-logger";

//run logger only in dev mode
// if (process.env.NODE_ENV === `development`) {
//   console.log("dev");
//   const { logger } = require(`redux-logger`);
// }

import "./styles.css"

const counter = document.getElementById("counter")
const addBtn = document.querySelector("#add")
const subBtn = document.querySelector("#sub")
const asyncBtn = document.querySelector("#async")
const themeBtn = document.querySelector("#theme")


const store = createStore(rootReducer,
  applyMiddleware(
    thunk,
    logger
  ))

addBtn.addEventListener("click", () => {
  store.dispatch(increment())
})

subBtn.addEventListener("click", () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener("click", () => {
  store.dispatch(async_increment())
})

themeBtn.addEventListener("click", () => {
  const currentThemeClass = document.body.className === "dark" ? "light" : "dark"
  store.dispatch(changeTheme(currentThemeClass))
})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter
  document.body.className = state.theme.value

})

store.dispatch({ type: "INIT_APP" })



// function logger(store) {
//   return next => action => {
//     console.log("Prev counter state = ", store.getState());
//     console.log("Dispatch action: ", action);
//     const returnValue = next(action)
//     console.log("New counter state = ", store.getState(), "\n ");
//     return returnValue
//   }
// }