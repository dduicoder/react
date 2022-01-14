import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="card expense-filter">
      <div className="expense-filter__year">
        <label htmlFor="select-year">Filter by year</label>
        <select
          id="select-year"
          value={props.selected}
          onChange={dropdownChangeHandler}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
