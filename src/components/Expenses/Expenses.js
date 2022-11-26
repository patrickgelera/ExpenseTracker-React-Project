import React ,{useState}  from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpensesChart';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020")
  const onCHangeFilter = filteredYear =>{
    setFilterYear(filteredYear)
  }
  const filteredItem = props.items.filter(item =>{
    return item.date.getFullYear().toString() === filterYear;
  })
  let content = <p>No Expenses found...</p>
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear = {filterYear} onCHangeFilter = {onCHangeFilter}/>
        <ExpenseChart expenses = {filteredItem}/>
        <ExpenseList items = {filteredItem}/>
      </Card>
    </div>
  );
}

export default Expenses;
