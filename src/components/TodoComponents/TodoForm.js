import React from "react";

function TodoForm(props) {
  return (
    <div>
      <input type="text" onChange={props.todoTask} />
      <button type="submit" onClick={() => props.addNewTask()}>
        Add Todo
      </button>
      <button type="submit">Clear Completed</button>
    </div>
  );
}

export default TodoForm;
