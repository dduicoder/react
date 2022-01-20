import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [editingState, setEditingState] = useState(false);

  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditing = () => {
    setEditingState(true);
  };
  const quitEditing = () => {
    setEditingState(false);
  };

  return (
    <section className="new-expense">
      {!editingState && (
        <button onClick={startEditing} className="new-expense__button">
          Add New Expense
        </button>
      )}
      {editingState && (
        <ExpenseForm
          onQuitEditing={quitEditing}
          onSaveExpenseData={savedExpenseDataHandler}
        />
      )}
    </section>
  );
};

export default NewExpense;
