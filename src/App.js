import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Keyboard",
      price: 149,
      date: new Date(2021, 6, 14),
    },
    {
      id: "e2",
      title: "Basketball",
      price: 9.9,
      date: new Date(2021, 8, 23),
    },
    {
      id: "e3",
      title: "Mouse",
      price: 14.49,
      date: new Date(2021, 11, 2),
    },
    {
      id: "e4",
      title: "Moniter",
      price: 399,
      date: new Date(2022, 0, 4),
    },
  ];

  const addExpenseHandler = (expenses) => {
    console.log(expenses);
  };

  return (
    <div className="whole-wrapper">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
