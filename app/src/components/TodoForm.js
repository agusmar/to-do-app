import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm( {addTodo}) {
  const [todo, setTodo] = useState({
    id: "",
    task:"",
    completed: false
  })

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDeafult();
    if (todo.task.trim()) {
      addTodo({ ...todo, id:uuidv4() });    
      setTodo({ ...todo, task: ""});
    }
  }

  return (
    <form onSubmit={handleSubmit}> 
      <input S
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default TodoForm;