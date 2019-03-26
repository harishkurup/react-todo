import React, { Component } from "react";

class Tasks extends Component {
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
    this.setState(tasks);
  };

  updateTask = e => {
    const tasks = this.state.tasks;
    const index = e.target.value;
    const task = tasks[index];
    task.completed = 1;
    tasks[index] = { ...task };

    this.setState(tasks);
  };

  handleRemove = (e, index) => {
    const tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <div>
          <input onKeyPress={this.handleInput} />
        </div>
        <ul>
          {this.state.tasks.map((task, index) => {
            const isCompleted = task.completed === 1 ? "strikethrough" : "";
            return (
              <li key={index}>
                <span className={isCompleted}>{task.value}</span>
                <input
                  type="checkbox"
                  name="task"
                  onChange={task.completed === 0 ? this.updateTask : void 0}
                  value={index}
                  disabled={task.completed === 0 ? false : true}
                />
                <a
                  href="javascript:void(0)"
                  onClick={e => this.handleRemove(e, index)}
                  value={index}
                >
                  x
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Tasks;
