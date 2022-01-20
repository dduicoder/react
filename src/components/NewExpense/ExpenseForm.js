import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredPrice: "",
  //   enteredDate: "",
  // });

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <form onSubmit={submitHandler} className="new-expense__controls">
      <div className="new-expense__control">
        <label htmlFor="title-input">Title</label>
        <input
          id="title-input"
          type="text"
          value={enteredTitle}
          required
          onChange={titleChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label htmlFor="Price-input">Price</label>
        <input
          id="Price-input"
          type="number"
          value={enteredPrice}
          min="0.01"
          step="0.01"
          required
          onChange={priceChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label htmlFor="date-input">Date</label>
        <input
          id="date-input"
          type="date"
          value={enteredDate}
          min="2019-01-01"
          max="2022-12-31"
          required
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__control new-expense__submit">
        <button
          onClick={props.onQuitEditing}
          className="new-expense__button"
          type="button"
        >
          cancel
        </button>
        <button className="new-expense__button" type="submit">
          submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
