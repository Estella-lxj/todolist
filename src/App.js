import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  function handleInput(e) {
    e.preventDefault();
    setTodo(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), text: todo }]);
    console.log(todos)
    e.target.reset();
  }
  function handleDelete(id) {
    setTodos(todos.filter((item) => item.id !== id))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo List
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInput} />
        </form>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>{item.text}
              <button onClick={() => handleDelete(item.id)}>X</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
