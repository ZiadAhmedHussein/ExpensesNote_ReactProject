import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  let expensesContent;
  if (props.aSelectedYear === "All") {
    expensesContent = props.dataBase.map(expense => 
      <ExpenseItem
        key={expense.id} 
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
      />)
  } else if (props.aSelectedYear !== "All" && props.aFilterFunctin.length === 0) {
    expensesContent = <p className="pp">NO Thing To Show</p>
  } else {
    expensesContent = props.aFilterFunctin.map(expense => 
      <ExpenseItem
        key={expense.id} 
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
      />)
  }
  return ( 
    <div>
      { expensesContent }
    </div>
  );
};

export default ExpensesList;