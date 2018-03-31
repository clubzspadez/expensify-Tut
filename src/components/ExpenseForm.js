import React from 'react';

// set note state, amount state, textarea 
// set onchange for note, amount, text area
// 

class ExpenseForm extends React.Component {
  state = {
    description : '',
    amount: '',
    note: ''
  };

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
        <textarea name="" id="" placeholder="Add notes" value={this.state.note} onChange={this.onNoteChange} ></textarea>
        <button disabled="">Add Expense</button>
        </form>
      </div>
    );
  };
}



export default ExpenseForm;