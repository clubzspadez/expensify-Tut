import React from 'react';
import { connect } from 'react-redux';
import  { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const Create = (props) => (
  <div>
    <p>Add Expense</p>
    <ExpenseForm onSubmit={(expenseList) =>  { 
    props.dispatch(addExpense({...expenseList}));
    props.history.push('/');
     }} />
  </div>
);



export default connect()(Create);