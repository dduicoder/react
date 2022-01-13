import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <span className="expense-item__title">{props.title}</span>
      </div>
      <div className="expense-item__price">{"$" + props.price}</div>
    </Card>
  );
}

export default ExpenseItem;
