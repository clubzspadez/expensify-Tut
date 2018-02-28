import { createStore } from 'redux';

//Action generators - functions that return action objects

const incrementCount = ( { incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementBy = ( { decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ( { setCount = 1 } = {}) => ({
  type: 'SET',
  setCount
});

const resetCount = () => ({
  type: 'RESET'
});

const store = createStore(( state = { count : 0 }, action ) => {
  //check action type and add 1 to count else return default state
  switch(action.type){
    case 'INCREMENT':
    return {
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':
    return {
      count: state.count - action.decrementBy
    };
    case 'RESET':
    return{
      count: 0
    };
    case 'SET':
    return {
      count: action.setCount
    }
    default:
    return state;
  }
});



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
store.dispatch(incrementCount({ incrementBy: 4  }));

store.dispatch(setCount({ setCount: 100 }));

store.dispatch(resetCount());

store.dispatch(decrementBy({ decrementBy: 10 }));



