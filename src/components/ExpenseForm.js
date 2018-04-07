import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import 'react-dates/initialize';

// set note state, amount state, textarea
// set onchange for note, amount, text area
//


class ExpenseForm extends React.Component {
  constructor(props){
    console.log(props);
    super(props);

    this.state = {
        description: props.expense ? props.expense.description : '' ,
        amount: props.expense ? (props.expense.amount / 100).toString() : '' ,
        note: props.expense ? props.expense.note : '' ,
        createdAt: props.expense ? moment(props.expense.createdA) : moment(),
        focused: false,
        error: ''
    }
  };

 

  onDescriptionChange = e => {
    const value = e.target.value;
    this.setState(() => ({ description: value }));
  };

  onAmountChange = e => {
    const value = e.target.value;
    if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: value }));
    }
  };

  onNoteChange = e => {
    const value = e.target.value;
    this.setState(() => ({ note: value }));
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if( !this.state.description || !this.state.amount ) {
      this.setState(() => ({error: 'Please provide description and amount.'}));
    } else {
      this.setState(() => ({error: 'Submission successful!'}));
      this.props.onSubmit({
        description: this.state.description,
        amount: Number(this.state.amount) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      })
    }
    // dispatch to store current state
  };

  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            autoFocus
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            numberOfMonths={1}
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            isOutsideRange={() => false}
          />
          <textarea
            name=""
            id=""
            placeholder="Add notes"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button disabled="">Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
