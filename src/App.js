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
      todoItem: "",
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
    this.setState({ todoListArr: this.state.todoListArr.concat(newTask), todoItem: ''});
  };

  isTodoCompleted = (id) => {
    this.setState({
      todoListArr:this.state.todoListArr.map(task => {
        if(task.id === id) {
           if(task.completed === true) {
            task.completed = false;
           } else task.completed = true;
        }
        return task;
      }),
    })
  }

  deleteCompletedTasks = () => {
    this.setState({
      todoListArr: this.state.todoListArr.filter(task => task.completed === false )
    })
  }

  render() {
    return (
      <div>
        <TodoList tasks={this.state.todoListArr} taskComplete={this.isTodoCompleted} deleteCompletedTasks={this.deleteCompletedTasks}/>
        <TodoForm
          todoTask={this.inputHandler}
          addNewTask={this.addNewTaskHandler}
          deleteCompletedTasks={this.deleteCompletedTasks}
          formValue={this.state.todoItem}
        />
      </div>
    );
  }
}

export default App;
