import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// set note state, amount state, textarea 
// set onchange for note, amount, text area
// 

const now = moment();

console.log(now.format('MMM, Do, YYYY'));

class ExpenseForm extends React.Component {

  state = {
    description : '',
    amount: '',
    note: '',
    createdAt: moment(),
    focused: false
  }

  onDescriptionChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({ description: value })); 
  };

  onAmountChange = (e) => {
    const value = e.target.value;
    if (value.match(/^\d*(\.\d{0,2})?$/)){
      this.setState(() => ({ amount: value }));
    }
  
  };

  onNoteChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({ note: value })); 
  };

  onDateChange = (createdAt) => {
    this.setState( () => ({ createdAt }));
  }

  onFocusChange = ({ focused}) => {
    this.setState( () => ({ focused }))
  }
  handleSubmit (e){
    alert('Submit is working');
    e.preventDefault();
    // dispatch to store current state

  }
  render (){
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
        <input type="text" placeholder="Amount" autoFocus value={this.state.amount} onChange={this.onAmountChange} />
        <SingleDatePicker
          date={this.state.createdAt} 
          onDateChange={this.onDateChange} 
          focused={this.state.focused} 
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false }
        />
        <textarea name="" id="" placeholder="Add notes" value={this.state.note} onChange={this.onNoteChange} ></textarea>
        <button disabled="">Add Expense</button>
        </form>
      </div>
    );
  };
}



export default ExpenseForm;