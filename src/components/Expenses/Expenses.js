import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses =
    filteredYear === "all"
      ? props.items
      : props.items.filter((expense) => {
          return expense.date.getFullYear().toString() === filteredYear;
        });

  return (
    <section>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={props.items} filteredYear={filteredYear} />
    </section>
  );
};

export default Expenses;
