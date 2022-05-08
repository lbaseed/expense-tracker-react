import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {


    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: generateId,
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText("");
        setAmount("");
    }

    const generateId = () => {
        return Math.floor(Math.random() * 1000000);
    }

  return (
    <>
        <h3>Add Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Text...' />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Enter Amount...' />
            </div>
            <button className="btn">Add Transaction</button>
        </form>
    </>
  )
}
