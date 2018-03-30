import React from 'react';

class ExpenseForm extends React.Component {
  state = {
    description : ''
  };

  onDescriptionChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({ description: value })); 
  }

  render (){
    return (
      <div>
        <form action="">
        <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
        <input type="number" placeholder="Amount" autoFocus/>
        <textarea name="" id="" placeholder="Add notes"></textarea>
        <button disabled="">Add Expense</button>
        </form>
      </div>
    );
  };
}



export default ExpenseForm;