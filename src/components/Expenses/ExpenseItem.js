import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <ExpenseDate date={props.date} />
          <span className="expense-item__title">{props.title}</span>
        </div>
        <div className="expense-item__price">{`$${props.price}`}</div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
