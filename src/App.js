import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const tasksArr = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoListArr: tasksArr,
      todoItem: ""
    };
  }
  inputHandler = event => {
    this.setState({ todoItem: event.target.value });
  };

  addNewTaskHandler = () => {
    const newTask = {
      task: this.state.todoItem,
      id: new Date(),
      completed: false
    };
    this.setState({ todoListArr: this.state.todoListArr.concat(newTask) });
  };

  render() {
    return (
      <div>
        <TodoList tasks={this.state.todoListArr} />
        <TodoForm
          todoTask={this.inputHandler}
          addNewTask={this.addNewTaskHandler}
        />
      </div>
    );
  }
}

export default App;
