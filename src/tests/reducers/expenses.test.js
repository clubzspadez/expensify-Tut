import expensesReducer from  '../../reducers/expenses';

const fakeExpenses = [
  {
    id: "1",
    description: "expense 1",
    note: "",
    amount: 100,
    createdAt:0
  },
  {
    id: "2",
    description: "expense 2",
    note: "",
    amount: 400,
    createdAt: 0
  },
  {
    id: "3",
    description: "expense 3",
    note: "",
    amount: 300,
    createdAt: 0
  }
];

test('should set default type @@init', () =>{
  const state = expensesReducer(undefined, {type: '@@init'});

  expect(state).toEqual([]);
});

test('should add expense by id');

test('should remove expense by id', () => {
   const action = {
      type : 'REMOVE_EXPENSE',
      id: fakeExpenses[1].id
   };

   const state = expensesReducer(fakeExpenses, action);

   expect(state).toEqual([fakeExpenses[0], fakeExpenses[2]]);
});

test('should not remove the expense if id is not listed', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 5
  };

  const state = expensesReducer(fakeExpenses, action);

  expect(state).toEqual(fakeExpenses);
});

test(' should add an expense', () => {
  const expenseData = {
    id: "4",
    description: "expense 4",
    note: "",
    amount: 400,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: {...expenseData}
  };

  const state = expensesReducer(fakeExpenses, action);

  expect(state).toEqual([fakeExpenses[0], fakeExpenses[1], fakeExpenses[2], expenseData])
});

test(' should edit an expense', ()=> {
   
   const editData  = {
    description: "expense 3 edited",
    note: " edit",
    amount: 350,
    createdAt: 0
   };

   const action = {
    type: "EDIT_EXPENSE",
    id: fakeExpenses[2].id,
    updates: {...editData}
   };

   const state = expensesReducer(fakeExpenses, action);

   expect(state[2]).toEqual( {
    id: "3",
    ...editData
   });
 
});

test(' should not edit expense if expense not found', ()=> {

  const editData  = {
    description: "expense 3 edited",
    note: " edit",
    amount: 350,
    createdAt: 0
   };

   const action = {
     type : "EDIT_EXPENSE",
     id: 4,
     updates: {...editData}
   }

   const state = expensesReducer(fakeExpenses, action);

   expect(state).toEqual(fakeExpenses);
});