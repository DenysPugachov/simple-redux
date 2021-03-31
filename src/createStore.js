export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, { type: "__INIT__" });
  const subscribers = [];

  return {
    //action === {type: "INCREMENT"}
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach(sub => sub())
    },

    subscribe(callback) {
      //wait until something happens
      subscribers.push(callback)
    },
    getState() {
      return state;
    },
  }
}