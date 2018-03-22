import React from 'react';
//grabs store from redux 
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses.js';

const ExpenseList = (props) => (
  <div>
    <p>Expense List</p>
    { 
      props.expenses.map((expense) =>  
        <ExpenseListItem {...expense} key={expense.id} />)
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);
