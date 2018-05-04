import selectExpenses from "../../selectors/expenses";
import moment from 'moment';

const fakeExpenses = [
  {
    id: "1",
    description: "expense 1",
    note: "",
    amount: 100,
    createdAt: moment(0)
  },
  {
    id: "2",
    description: "expense 2",
    note: "",
    amount: 400,
    createdAt: moment(0).add( 4, 'days').valueOf()
  },
  {
    id: "3",
    description: "expense 3",
    note: "",
    amount: 300,
    createdAt: moment(0).subtract( 4, 'days').valueOf()
  },
  {
    id: "4",
    description: "expense 4",
    note: "",
    amount: 3000,
    createdAt: moment(0).add( 7, 'days').valueOf()
  }
];

test("should filter by text value", () => {
  const filters = {
    text: "2",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const returnValue = selectExpenses(fakeExpenses, filters);
  expect(returnValue).toEqual([fakeExpenses[1]]);
});

test("should filter by start date", () => {

  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };

  const returnValue = selectExpenses(fakeExpenses, filters);
  expect(returnValue).toEqual([fakeExpenses[3],fakeExpenses[1], fakeExpenses[0]]);
});

test('should filter by endDate', () => {

  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add( 4, 'days')
  };

  const returnValue = selectExpenses(fakeExpenses, filters);

  expect(returnValue).toEqual([fakeExpenses[1], fakeExpenses[0], fakeExpenses[2]]);
});

test('should sort by date', () => {

  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const returnValue = selectExpenses(fakeExpenses, filters);

  expect(returnValue).toEqual([fakeExpenses[3],fakeExpenses[1],fakeExpenses[0],fakeExpenses[2]]);
});

test('should sort by amount', () => {

  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };

  const returnValue = selectExpenses(fakeExpenses, filters);

  expect(returnValue).toEqual([fakeExpenses[3],fakeExpenses[1], fakeExpenses[2], fakeExpenses[0]]);
});