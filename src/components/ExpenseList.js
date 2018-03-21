import React from 'react';
//grabs store from redux 
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <p>Expense List</p>
    {props.expenses.length}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
};

export default ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);
