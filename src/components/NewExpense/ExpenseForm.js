import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [userInputs, setUserInputs] = useState({
    enteredTitle:"",
    enteredAmount:"",
    enteredDate:""
  })
  const titleChangeHandler = e =>{
    setUserInputs(prevState =>{
      return{...prevState, enteredTitle:e.target.value}
    })
  }
  const amountChangeHandler = e =>{
    setUserInputs(prevState =>{
      return{...prevState, enteredAmount:e.target.value}
    })
  }
  const dateChangeHandler = e =>{
    setUserInputs(prevState =>{
      return{...prevState, enteredDate:e.target.value}
    })
  }
  const handleFormSumit = (e)=>{
    e.preventDefault()
    const expenseData = {
      id:Math.random(),
      title:userInputs.enteredTitle,
      amount:+userInputs.enteredAmount,
      date:new Date(userInputs.enteredDate)
    }
    setUserInputs(prevState =>{
      return{...prevState, enteredAmount:0,enteredTitle:"", enteredDate:""}
    })
    props.updateExpenses(expenseData)
  }
  return (
    <form onSubmit={handleFormSumit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={userInputs.enteredTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={userInputs.enteredAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="reset" onClick={props.hideForm}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;