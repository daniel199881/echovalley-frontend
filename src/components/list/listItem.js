import React from 'react';

const ExpenseItem = ({ expense, onDelete }) => {
  const handleDelete = () => {
    onDelete(expense.id); // Pass the expense ID to delete it from the list
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <div style={{ marginRight: '10px' }}>
        <strong>{expense.title}</strong> - {expense.type} - ${expense.amount} - {expense.date}
      </div>
      <button onClick={handleDelete} style={{ cursor: 'pointer', backgroundColor: 'transparent', border: 'none', fontSize: '18px' }}>
        &#x274C; {/* Delete icon */}
      </button>
    </div>
  );
};

export default ExpenseItem;
