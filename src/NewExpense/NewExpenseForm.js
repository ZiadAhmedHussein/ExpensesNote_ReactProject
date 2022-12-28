import { useState } from "react";

import AddExpenseButton from "./AddExpenseButton";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");



  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    
    props.onNewDataHandler(newExpenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

  }
  return (
    <form onSubmit={ submitHandler }>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={ titleHandler } value={enteredTitle} type="text" required />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={ amountHandler } value={enteredAmount} type="number" min="0.1" step="0.1" required/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={ dateHandler } value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" required />
        </div>
      </div>
      <div className="new-expense__actions">
        <AddExpenseButton onChicker={props.onChicker} />
      </div>
    </form>
  );
};

export default NewExpenseForm;