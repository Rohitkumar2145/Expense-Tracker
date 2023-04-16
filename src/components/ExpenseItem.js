import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = "Car Insurance";
  const expenseAmount = 1475;
  return (
    <div className="expense-item">
      <div>{`${expenseDate.getFullYear()}-${expenseDate.getDate()}-${
        expenseDate.getMonth() + 1
      }`}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">₹{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
