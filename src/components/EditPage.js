import React from 'react';
import {connect}  from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditPage = (props) => {
  console.log(props);
  return(
    <div>
    <ExpenseForm expense={props.expense} onSubmit={(expense) => {
      console.log(expense);
    }}/>
      <p>This is the edit page</p>
      <p>Current params id: {props.match.params.id}</p>
    </div>
  );
};
//return current expense object 
 //get expenses from current state using find() and return true if current exepense matchs params.id
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditPage);