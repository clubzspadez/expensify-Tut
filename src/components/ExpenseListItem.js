import React from 'react';
import { removeExpense }  from '../actions/expenses';
import {connect}  from 'react-redux';
import store from '../store/configureStore';

const ExpenseListItem = ({ dispatch, id, description , amount, createdAt}) => (
  <div>
    <h1>{description}</h1>
    <p>{amount}-{createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id : id}));
    }} >Delete</button>
  </div>
);



export default connect()(ExpenseListItem);