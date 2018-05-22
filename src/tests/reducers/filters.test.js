import filtersReducer from  '../../reducers/filters';
import moment from 'moment';

test('should take default @@init', () =>{
  const state = filtersReducer(undefined, {type : '@@init'});

  expect(state).toEqual(
    {
      text: "",
      sortBy: "",
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    });
});

test(' set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type : 'SORT_BY_AMOUNT'});

  expect(state).toEqual({
      text: "",
      sortBy: "amount",
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
  })

});


test(' should set sortBy to date', () => {
   const state = filtersReducer(undefined, {type: 'SORT_BY_DATE'});

   expect(state).toEqual({
      text: "",
      sortBy: "date",
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
   })
});

test(' should set textfilter to current text', () => {

  const currentState = {
    text: "",
    sortBy: "",
    startDate: undefined,
    endDate: undefined
  }

  const state = filtersReducer(currentState, {type: 'SET_TEXT_FILTER', text: 'hello'});

  expect(state).toEqual({
     text: "hello",
     sortBy: "",
     startDate: undefined,
     endDate: undefined
  })
});


test(' should set startDate to specified date', () => {
  const currentState = {
    text: "",
    sortBy: "",
    startDate: undefined,
    endDate: undefined
  }
  const state = filtersReducer(currentState, { type: 'SET_START_DATE', startDate: moment(0)});

  expect(state).toEqual({
    text: "",
    sortBy: "",
    startDate: moment(0),
    endDate: undefined
 })
});

test(' should set endDate to specified date', () => {
  const currentState = {
    text: "",
    sortBy: "",
    startDate: undefined,
    endDate: undefined
  }
  const state = filtersReducer(currentState, { type: 'SET_END_DATE', endDate: moment().endOf('month')});

  expect(state).toEqual({
    text: "",
    sortBy: "",
    startDate: undefined,
    endDate: moment().endOf('month')
 })
});