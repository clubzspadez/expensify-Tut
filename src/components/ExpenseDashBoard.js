import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoard = () => (
  <div>
    <p>DashBoard Component</p>
    {/* Selector to fitler by */}
    <ExpenseListFilters />
    {/* Display Current ExpenseList */}
    <ExpenseList />
  </div>
);



export default ExpenseDashBoard;