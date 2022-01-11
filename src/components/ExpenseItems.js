import "./ExpenseItems.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 1, 11);
  const expenseTitle = "Keyboard";
  const expensePrice = 150;

  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <span>{expenseDate.toISOString()}</span>
        <span>{expenseTitle}</span>
      </div>
      <div className="expense-item__price">${expensePrice}</div>
    </div>
  );
}

export default ExpenseItem;
