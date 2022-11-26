import React ,{useState}from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm ]= useState(false)
  const handleShowForm = ()=>{
    setShowForm(true)
  }
  const handleHideForm = ()=>{
    setShowForm(false)
  }
  return (
    <div className='new-expense'>
      {!showForm && <button type='submit' onClick={handleShowForm}>Add New Expense</button>}
      {showForm && <ExpenseForm updateExpenses = {props.updateExpenses} hideForm={handleHideForm}/>}
    </div>
  );
};

export default NewExpense;