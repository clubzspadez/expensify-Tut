import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import getVisibileExpenses from './selectors/expenses';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(()=>{
  const state = store.getState();
  const visibileExpenses = getVisibileExpenses( state.expenses, state.filters);

  console.log(visibileExpenses);

});

store.dispatch(addExpense({ description: 'Water Bill', amount: 500}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1000}));
store.dispatch(setTextFilter('water'));

const render = (
<Provider store={store}>
    <AppRouter />
  </Provider>
  );

ReactDOM.render(render, document.getElementById('app'));