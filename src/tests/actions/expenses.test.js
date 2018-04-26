import {addExpense, editExpense, removeExpense } from '../../actions/expenses';
// test('name of test', callback function that excutes test)



test('should setup remove expense object action object', () =>{

  const action = removeExpense({ id: 'asdsad133'});

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'asdsad133'
  });
});

test('should setup edit expense object action object', () =>{

  const action = editExpense('asdsad133' , { note :'new note' });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'asdsad133',
    updates:{
      note: 'new note'
    }
  });
});

test('should setup add expense object action object with provided values', () =>{
  const data = {
    description: 'test',
    note : "Test",
    amount : 10000,
    createdAt : 0
  }
  const action = addExpense(data);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
      id: expect.any(String),
      ...data
    }
  });
});


test('should setup add expense object action object with default values', () =>{
  const action = addExpense();

  const notData = {
    description : "",
    note : "",
    amount : 0,
    createdAt : 0
  } 
  
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
      id: expect.any(String),
      ...notData
    }
  })
});