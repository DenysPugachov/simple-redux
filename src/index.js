import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./redux/rootReducer"
import { decrement, increment, async_increment } from "./redux/actions"
import thunk from 'redux-thunk';

import "./styles.css"

const counter = document.getElementById("counter")
const addBtn = document.querySelector("#add")
const subBtn = document.querySelector("#sub")
const asyncBtn = document.querySelector("#async")
const themeBtn = document.querySelector("#theme")
const body = document.querySelector("body")

const store = createStore(rootReducer, 0, applyMiddleware(thunk))

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
  body.classList = "dark"
})

store.subscribe(() => {
  counter.textContent = store.getState()
})

store.dispatch({ type: "INIT_APP" })