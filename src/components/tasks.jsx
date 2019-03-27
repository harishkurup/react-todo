import React, { Component } from "react";

class Tasks extends Component {
  render() {
    return (
      <li>
        <span className={this.props.isCompleted}>{this.props.task.value}</span>
        <input
          type="checkbox"
          name="task"
          onChange={
            this.props.task.completed === 0
              ? e => this.props.onUpdate(e)
              : void 0
          }
          value={this.props.index}
          disabled={this.props.task.completed === 0 ? false : true}
        />
        <a
          href="javascript:void(0)"
          onClick={e => this.props.onDelete(e, this.props.index)}
          value={this.props.index}
        >
          x
        </a>
      </li>
    );
  }
}

export default Tasks;
