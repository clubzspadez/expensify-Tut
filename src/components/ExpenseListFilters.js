import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

//import actions 
//use dispatch from props
//use onChange attribute  which takes in a function

const ExpenseListFilters = ( props ) => (
    <div>
      <input type="text" value={props.filters.text} onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      } }/>

      <select
        value={props.filters.sortBy} 
        onChange={ (e) => {
        if( e.target.value === 'date'){
          props.dispatch(sortByDate());
        } else {
          props.dispatch(sortByAmount());
        }
      }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
);

// this will allow us to have access to filters on the state as we pass it to our component expenseListFilters which will use our state now passed in as props to the components
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);
