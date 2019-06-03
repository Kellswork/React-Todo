import React from "react";




function Todo({ task, taskComplete }) {
 const style = {
        textDecoration: task.completed ? 'line-through' : 'none'
    }
    console.log(task.completed)
  return (
    <div>
      
      <h3 onClick={() => taskComplete(task.id)} style={style}>{task.task}</h3>
    </div>
  );
}

export default Todo;
