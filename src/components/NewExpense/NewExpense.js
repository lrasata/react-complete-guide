import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";


const NewExpense = (props) => {
  const [addNewExpenseButtonClicked, setAddNewExpenseButtonClicked] = useState(
    false
  );

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const onClickEditingButton = () => {
    setAddNewExpenseButtonClicked(!addNewExpenseButtonClicked);
  }

  return (
    <div className="new-expense">
      {!addNewExpenseButtonClicked && (
        <button onClick={onClickEditingButton}>Add New Expense</button>
      )}
      {addNewExpenseButtonClicked && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onClickEditingButton}/>
      )}
    </div>
  );
};

export default NewExpense;
