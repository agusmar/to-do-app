import React, { Fragment } from 'react';

function Todo ({ todo }) {
  return (
    <div>
    <input type="checkbox" />
    <li>{todo.task}</li>
    <button></button>
    </div>
    
  );
}

export default Todo;
