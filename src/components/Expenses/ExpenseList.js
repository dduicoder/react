import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  let filteredItems;
  filteredItems =
    props.filteredYear === "all"
      ? props.items
      : props.items.filter((expense) => {
          return expense.date.getFullYear().toString() === props.filteredYear;
        });
  if (filteredItems.length === 0) {
    return <p className="expense-list-fallback">No expenses found</p>;
  } else {
    filteredItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.price}
        date={expense.date}
      />
    ));

    return (
      <ul className="expense-list">
        {filteredItems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
};

export default ExpenseList;
