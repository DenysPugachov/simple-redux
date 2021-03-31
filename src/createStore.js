export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, { type: "__INIT__" });
  const subscribers = [];

  return {
    //action === {type: "INCREMENT"}
    dispatch(action) {
      //pass state through reducer to get updated state
      state = rootReducer(state, action);
      //run all subscribers elem(functions)
      subscribers.forEach(sub => sub())
    },

    subscribe(callback) {
      //add callback func to arr
      subscribers.push(callback)
    },
    getState() {
      return state;
    },
  }
}