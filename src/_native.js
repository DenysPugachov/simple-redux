import { createStore } from "./createStore"
import { rootReducer } from "./redux/rootReducer"
import './styles.css'

const counter = document.getElementById("counter")
const addBtn = document.querySelector("#add")
const subBtn = document.querySelector("#sub")
const asyncBtn = document.querySelector("#async")
const themeBtn = document.querySelector("#theme")
const body = document.querySelector("body")

const store = createStore(rootReducer, 0);

addBtn.addEventListener("click", () => {

})

subBtn.addEventListener("click", () => {

})

asyncBtn.addEventListener("click", () => {

})

themeBtn.addEventListener("click", () => {
  body.classList = "dark"
})