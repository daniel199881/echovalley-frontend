import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form/index';
import List from './components/list/index';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:5000/api/expense", requestOptions)
      .then(response => response.text())
      .then(result => {
        const res = JSON.parse(result);
        console.log(res)
        setExpenses([...res.data])
      })
      .catch(error => console.log('error', error));
  }, [])


  const clear = () => {
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const onSubmit = (values) => {
    const body = JSON.stringify(values);

    var requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: body,
    };

    fetch("http://localhost:5000/api/expense", requestOptions)
      .then(response => response.text())
      .then(result => {
        const res = JSON.parse(result);
        console.log('result: ', res);
        if (res.error) {
          setMessage({ type: 'error', text: res.error.message ?? 'Error adding expense' });
          clear();
          return;
        }
        setMessage({ type: res.status, text: res.message });
        clear();
        setExpenses([...expenses, res.data]);
      })
      .catch(error => {
        console.log('error', error);
        setMessage({ type: 'error', text: error.message ?? 'Error adding expense' });
        clear();
      });
  };

  const handleDelete = (id) => {
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    fetch(`http://localhost:5000/api/expense/${id}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        const res = JSON.parse(result);
        if (res.error) {
          setMessage({ type: 'error', text: res.error.message ?? 'Error adding expense' });
          clear();
          return;
        }
        setMessage({ type: res.status, text: res.message });
        clear();
        const updatedExpenses = [...expenses].filter((expense) => expense.id !== id);
        setExpenses(updatedExpenses);
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
    }}>
      {message && (
        <div
          style={{
            position: 'absolute',
            top: '2%',
            right: '35%',
            transform: 'translateX(-50%)',
            backgroundColor: message?.type === 'error' ? 'red' : 'green',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '100px',
            visibility: 'visible',
            opacity: '1',
            transition: 'visibility 0s, opacity 0.5s linear'
          }}
        >
          {message?.text}
        </div>
      )}
      <Form onSubmit={onSubmit} />
      <List data={expenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
