import React from 'react';
import { removeExpense }  from '../actions/expenses';
import {connect}  from 'react-redux';
import store from '../store/configureStore';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description , amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>{amount}-{createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id : id}));
    }} >Delete</button>
  </div>
);



export default connect()(ExpenseListItem);