import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

//import actions 
//use dispatch from props
//use onChange attribute  which takes in a function]

class ExpenseListFilters extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      calendarFocused: null
    }
  }


  render(){
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value));
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
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
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
