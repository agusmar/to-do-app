import React, { useState } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"


function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        React to do
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
