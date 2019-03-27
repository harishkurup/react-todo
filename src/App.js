import React, { Component } from "react";
import "./App.css";
import Tasks from "./components/tasks";
import Header from "./components/header";

class App extends Component {
  state = {
    tasks: []
  };

  handleInput = e => {
    const key = e.key;
    if (e.target.value !== "" && key === "Enter") {
      this.addTask(e.target.value);
      e.target.value = "";
    }
  };

  addTask = task => {
    const tasks = this.state.tasks;
    tasks.push({ completed: 0, value: task });
    this.setState({ tasks });
  };

  handleUpdate = e => {
    const tasks = this.state.tasks;
    const index = e.target.value;
    const task = tasks[index];
    task.completed = 1;
    tasks[index] = { ...task };

    this.setState({ tasks });
  };

  handleRemove = (e, index) => {
    const tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({ tasks });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          total={this.state.tasks.length}
          completed={this.state.tasks.filter(t => t.completed === 1).length}
        />
        <div>
          <input onKeyPress={this.handleInput} />
        </div>
        <ul>
          {this.state.tasks.map((task, index) => {
            const isCompleted = task.completed === 1 ? "strikethrough" : "";
            return (
              <Tasks
                onUpdate={this.handleUpdate}
                onDelete={this.handleRemove}
                task={task}
                index={index}
                isCompleted={isCompleted}
                key={index}
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
