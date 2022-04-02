
import Expenses from './components/Expenses'

function App() {
  
  const expenses = [
    { title: 'toilet paper', date: new Date(2022, 2, 26), amount: 294.55 },
    { title: 'Car Insurance', date: new Date(2022, 3, 26), amount: 294.56 },
    { title: 'detergent', date: new Date(2022, 4, 26), amount: 294.57 },
    { title: 'water', date: new Date(2022, 3, 26), amount: 294.58 },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items = {expenses}/>

      {/* Use ExpenseItem like an HTML element.
      Custom component must start with Uppercase.
      */}

      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}

    </div>
  );
}

export default App;
