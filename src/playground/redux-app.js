import { createStore, combineReducers } from "redux";
import uuid from "uuid";

/**
 *todo create combinedReducers
 ** ADD_EXPENSE ACTION
 ** REMOVE_EXPENSE ACTION
 ** EDIT_EXPENSE ACTION
 ** SET_TEXT_FILTER ACTION
 ** SORT_BY_DATE ACTION
 ** SORT_BY_AMOUNT ACTION
 ** SET_START_DATE ACTION
 ** SET_END_DATE ACTION
 *! EXPENSES REDUCER
 *
 **/

//!. Actions contain types that specify and explain their action. They also contain data of some sort.
/*
*Actions are payloads of information that send data from your application to 
*your store. They are the only source of information for the store. 
*You send them to the store using store.dispatch()
*/
//! Reducers take those actions(with their data) and use them to change the default states and then return the new state.
/* 
*Reducers specify how the application's state changes in response to actions sent to 
*the store. Remember that actions only describe the fact that 
*something happened, but don't 
*describe how the application's state changes.
? We can have multiple reducers if we want to deal with data for different parts of our state using combinedReducers
? expensesReducer will only deal with expense related data/actions. filterReducer will only deal with filter related actions
*/

//! Store takes in a reducer. With a store available we can send actions to our reducers.
/*
*The Store is the object that brings them together. The store has the following responsibilities:
*Holds application state;
*Allows access to state via getState();
*Allows state to be updated via dispatch(action);
*Registers listeners via subscribe(listener);
*Handles unregistering of listeners via the function returned by subscribe(listener).
? In our example when we create a store via createStore we can call the combinedReducers we can pass an object with our reducers
? to specify that we have two different objects with data in them. Our current state being returned
? is {
?   expenses: [],
?   filters: {}
? }
*/

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = (id , updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const sortByAmount = ({ amount } = {}) => ({
  type: "SORT_BY_AMOUNT",
  amount
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => 
      { if(expense.id === action.id){
        return {
          ...expense,
          ...action.updates
        }
      } else {
        return expense;
      }
        
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: undefined,
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: action.amount
      };
    default:
      return state;
  }
};

//* store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 1 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 100 })
);

// store.dispatch(removeExpense({ id: expenseTwo.expense.id } ));
// Pass and id for the specific item and the updates to that item (id, { })
store.dispatch(editExpense( expenseOne.expense.id, { amount: 1000} ));

// store.dispatch(sortByAmount({ sortBy: expenseOne.expense.amount }));

// const demoState = {
//   expenses: [
//     {
//       id: "123",
//       description: "Put in here",
//       note: "Fill with personal notes",
//       amount: 10000,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: "rent",
//     sortBy: "amount", //! will add date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };
