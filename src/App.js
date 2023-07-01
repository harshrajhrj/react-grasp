import './App.css';
import "./components/Expense.css"
import Expenses from './components/Expenses';

function App() {

  var expense_items = [
    {
      id: 1,
      date: new Date(2020, 8, 14),
      title: 'Toilet paper',
      amount: 94.12
    },
    {
      id: 2,
      date: new Date(2021, 3, 12),
      title: 'New TV',
      amount: 799.49
    },
    {
      id: 3,
      date: new Date(2021, 3, 28),
      title: 'Car insurance',
      amount: 294.67
    },
    {
      id: 4,
      date: new Date(2021, 6, 12),
      title: 'New desk(wooden)',
      amount: 450
    },
  ]

  return (
    <>
      <div className="App">
        <h2>Let's get started</h2>
        <Expenses expenses={expense_items} />
      </div>
    </>
  );
}

export default App;
