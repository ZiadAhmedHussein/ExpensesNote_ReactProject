import { useState } from "react";
import "./AllExpenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function AllExpenses (props) {

  const [selectedYear, setSelectedYear] = useState("All");

  const selectYear = (year) => {
    setSelectedYear(year);
  };

  const expensesAfterFilter = props.data.filter(expense => {return expense.date.getFullYear().toString() === selectedYear});

  

  return (
    <div>
      <ExpensesFilter targetYear={selectedYear} onSelectYear={selectYear}/>
      <ExpensesList dataBase={props.data} aSelectedYear={ selectedYear } aFilterFunctin={ expensesAfterFilter }/>
    </div>
  );
};

export default AllExpenses;