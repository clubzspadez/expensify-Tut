import { createStore, combineReducers } from "redux";
import uuid from 'uuid';





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

const addExpense = ({description = '' , note = '' , amount = 0 , createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  }
});


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
       return {
         expense: state.concat(action.expense)
       };
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
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({description: 'rent', amount: 1}));


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