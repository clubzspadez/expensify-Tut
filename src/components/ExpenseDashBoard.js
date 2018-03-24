import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoard = () => (
  <div>
    <p>DashBoard Component</p>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);



export default ExpenseDashBoard;