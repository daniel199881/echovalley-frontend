import React, { useState } from 'react';

const Index = ({ onSubmit }) => {
    const [expenseData, setExpenseData] = useState({
        title: '',
        type: 'bills', // Default type
        amount: '',
        date: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setExpenseData({
            ...expenseData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ ...expenseData });
    };

    return (
        <div style={{ width: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold' }} htmlFor="title">Expense Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={expenseData.title}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold' }} htmlFor="type">Expense Type:</label>
                    <select
                        id="type"
                        name="type"
                        value={expenseData.type}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
                    >
                        <option value="leisure">Leisure</option>
                        <option value="medical">Medical</option>
                        <option value="bills">Bills</option>
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold' }} htmlFor="amount">Amount Spent:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={expenseData.amount}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold' }} htmlFor="date">Date of Expense:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={expenseData.date}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', fontSize: '16px', textAlign: 'center', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white' }}>Add Expense</button>
            </form>
        </div>
    );
}

export default Index;