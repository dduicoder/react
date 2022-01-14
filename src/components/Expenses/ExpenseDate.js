function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-Us", { month: "2-digit" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item__date">
      <span>{year}</span>
      <span>{month}</span>
      <span>{day}</span>
    </div>
  );
}
export default ExpenseDate;
