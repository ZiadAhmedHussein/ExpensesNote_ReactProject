import { useState } from "react";
import Card from "../components/UI/Card";
import "./NewExpense.css";

import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {

  const [chicker, setChicker] = useState(false);

  const addChickerOnOffer = () => {
    setChicker(true);
  };
  const addChickerOnForm = () => {
    setChicker(false);
  };

  

  const newDataHandler = (newEnteredData) => {
    const addingData = {
      ...newEnteredData,
      id: Math.random().toString()
    };
    props.onAddData(addingData);
    setChicker(false);
  }

  return (
    <Card className="new-expense">
      {!chicker && <button className="add-button" onClick={ addChickerOnOffer }>Add New Expense</button>}
      {chicker && <NewExpenseForm onChicker={ addChickerOnForm } onNewDataHandler={ newDataHandler } />}
    </Card>
  );
};

export default NewExpense;