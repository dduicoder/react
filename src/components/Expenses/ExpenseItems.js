import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItems.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <span className="expense-item__title">{title}</span>
      </div>
      <div className="expense-item__wrapper">
        <div className="expense-item__price">{"$" + props.price}</div>
        <button onClick={clickHandler} className="expense-item__button">
          Change Title
        </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
