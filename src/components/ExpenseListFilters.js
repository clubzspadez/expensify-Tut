import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

//import actions 
//use dispatch from props
//use onChange attribute  which takes in a function]

class ExpenseListFilters extends React.Component{
  
  state = {
    calendarFocused: null
  };
  handleDateChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  handleFocus = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  render(){
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value));
        } }/>

        <select
          value={this.props.filters.sortBy} 
          onChange={ (e) => {
          if( e.target.value === 'date'){
            this.props.dispatch(sortByDate());
          } else {
            this.props.dispatch(sortByAmount());
          }
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          numberOfMonths={1}
          startDate={this.props.filters.startDate}
          startDateId="start"
          endDate={this.props.filters.endDate}
          endDateId="end"
          onDatesChange={this.handleDateChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.handleFocus}
          isOutsideRange={() => false}
        />
    </div>
    )
  }
}



// this will allow us to have access to filters on the state as we pass it to our component expenseListFilters which will use our state now passed in as props to the components
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);
