import React, { useState } from "react";
import NewExpense from "../NewExpenses/NewExpense";

const AddNewExpense = (props) => {
  const [display, setDisplay] = useState("");
  const [check, setCheck] = useState(false);
  const addExpense = (expenseData) => {
    props.onAddExpense(expenseData);
  };
  const clickHandler = (event) => {
    event.preventDefault();
    setDisplay(<NewExpense onAddExpenses={addExpense} />);
    setCheck(true);
  };
  let content =
    check === false ? (
      <div className="new-expense">
        <button onClick={clickHandler} type="submit">
          Add New Expense
        </button>
      </div>
    ) : (
      display
    );
  return <div>{content}</div>;
};
export default AddNewExpense;
