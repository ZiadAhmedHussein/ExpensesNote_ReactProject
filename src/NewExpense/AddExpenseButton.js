
import "./AddExpenseButton.css";

const AddExpenseButton = (props) => {
  return (
    <div>
      <button onClick={props.onChicker} className="add-button" type="button">Cancel</button>
      <button className="add-button" type="submit">Add Expense</button>
    </div>
  );
};

export default AddExpenseButton