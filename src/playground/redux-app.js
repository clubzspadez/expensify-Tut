import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "123",
      description: "Put in here",
      note: "Fill with personal notes",
      amount: 10000,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //! will add date or amount
    startDate: undefined,
    endDate: undefined
  }
};



/**
*todo create combinedReducers
** ADD_EXPENSE 
** REMOVE_EXPENSE
** EDIT_EXPENSE
** SET_TEXT_FILTER
** SORT_BY_DATE
** SORT_BY_AMOUNT
** SET_START_DATE
** SET_END_DATE
*! EXPENSES REDUCER
*
**/

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
    return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy : 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = ( state = filtersReducerDefaultState , action ) => {
  switch (action.type){
    default:
    return state;
  }
}

//* store creation 
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());