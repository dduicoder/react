import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initExpenses = [
  {
    id: "e1",
    title: "Keyboard",
    price: 149,
    date: new Date(2021, 12, 23),
  },
  {
    id: "e2",
    title: "Basketball",
    price: 9.9,
    date: new Date(2021, 8, 24),
  },
  {
    id: "e3",
    title: "Mouse",
    price: 14.49,
    date: new Date(2021, 3, 16),
  },
  {
    id: "e4",
    title: "Moniter",
    price: 399,
    date: new Date(2020, 9, 15),
  },
  {
    id: "e5",
    title: "Book",
    price: 9,
    date: new Date(2020, 4, 5),
  },
  {
    id: "e6",
    title: "Phone",
    price: 999,
    date: new Date(2020, 2, 3),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="whole-wrapper">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
