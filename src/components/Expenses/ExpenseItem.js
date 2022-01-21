import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <li className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <span className="expense-item__title">{props.title}</span>
      </div>
      <div className="expense-item__price">{`$${props.price}`}</div>
    </li>
  );
}

export default ExpenseItem;
