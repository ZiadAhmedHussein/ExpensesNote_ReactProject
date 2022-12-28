import { useState } from 'react';

import './App.css';
import AllExpenses from './components/Expenses/AllExpenses';
import Card from './components/UI/Card';
import NewExpense from './NewExpense/NewExpense';


const EXPENSES = [
  {
    id : "e0",
    title : "Book",
    amount : 20.75,
    date : new Date(2020, 8, 15),
  },
  {
    id : "e1",
    title : "Pencile",
    amount : 13.65,
    date : new Date(2021, 9, 15),
  },
  {
    id : "e2",
    title : "Pen",
    amount :17.75,
    date : new Date(2022, 8, 16),
  },
  {
    id : "e3",
    title : "Note Book",
    amount : 22.75,
    date : new Date(2020, 7, 14),
  },
];

function App() {

  const [expenses, setExpenses] = useState(EXPENSES)
  


  const addNewData = (newExpense) => {
    setExpenses(prevState => {
      return [
        ...prevState,
        newExpense
      ]
    })
  }

  return (
    <Card className='app'>
      <NewExpense onAddData={ addNewData }/>
      <AllExpenses data={ expenses } />
    </Card>
  );
}

export default App;
