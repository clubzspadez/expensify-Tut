import moment from "moment";
import {
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate,
  setTextFilter
} from "../../actions/filters";

// SORT_BY_AMOUNT
test("should generate sort by amount action object", () => {
  const sortBy = "amount";
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});
// SORT_BY_DATE
test("should generate sort by date action object", () => {
  const sortBy = "date";
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

// SET_TEXT_FILTER
test("should generate set text filter action object with default values", () => {
  const action = setTextFilter();
  const text = "";
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

// SET_TEXT_FILTER
test("should generate set text filter action object with provided values", () => {
  const text = 'Test text';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
});
// SET_START_DATE
test("should generate start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});
// SET_END_DATE
test("should generate end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});
