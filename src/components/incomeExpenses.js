import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  // calculate income
  const income = amounts.filter(item => item > 0).reduce( (total, item) => (total += item), 0 ).toFixed(2);

  // calculate expensis
  const expenses = amounts.filter(item => item < 0).reduce( (total, item)=> (total += item), 0).toFixed(2);
  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p className="money plus" >{income}</p>
        </div>
        <div>
            <h4>Expenses</h4>
            <p className="money minus" >{Math.abs(expenses)} </p>
        </div>
        
    </div>
  )
}
 