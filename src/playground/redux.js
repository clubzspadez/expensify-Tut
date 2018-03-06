import { createStore } from "redux";

//!Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementBy = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ setCount = 0 } = {}) => ({
  type: "SET",
  setCount
});

const resetCount = () => ({
  type: "RESET"
});

//* Reducers
//! 1. Reducers are pure functions(not interacting or changing things from outside its scope)
//! 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.setCount
      };
    default:
      return state;
  }
};

//*pass in a function(reducer)
const store = createStore(countReducer);

// //subscribe will listen to changes in our store
// store.subscribe(() => {
//   console.log(store.getState());
// });

//to stop listening you you can  invoke the function returned by subscribe

const stopSubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//increment, decrement, reset
//dispatch the increment action
store.dispatch(incrementCount({ incrementBy: 4 }));

store.dispatch(setCount({ setCount: 100 }));

store.dispatch(resetCount());

store.dispatch(decrementBy({ decrementBy: 10 }));
