
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {

  const changeYear = (e) => {
    props.onSelectYear(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <label>Filter By Year</label>
      <select value={props.targetYear} onChange={changeYear}>
        <option value="All">All</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;