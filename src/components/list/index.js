import React, { useEffect, useState } from 'react';
import ExpenseItem from './listItem';

const ExpenseList = ({ data, onDelete }) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        if (data) {
            setExpenses([...data])
        }
    }, [data])

    const handleDeleteExpense = (id) => {
        onDelete(id);
    };

    // Render the list of expenses
    const renderedExpenses = expenses.map((expense) => (
        <ExpenseItem key={expense?.id} expense={expense} onDelete={handleDeleteExpense} />
    ));

    return (
        <div style={{ width: '400px', margin: '20px auto', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Expense List</h2>
            {renderedExpenses.length > 0 ? renderedExpenses : <p>No expenses yet.</p>}
        </div>
    );
};

export default ExpenseList;
