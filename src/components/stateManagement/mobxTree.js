import React, { Component } from "react";
import { observer } from "mobx-react";

import { values } from "mobx";

const randomId = () => Math.floor(Math.random() * 1000).toString(36);

@observer
class MobxTree extends Component {
  render() {
    return (
      <div>
        <p>{this.props.store.stateDisplay}</p>
        <button onClick={e => this.props.store.addTodo(randomId(), "New Task")}>
          添加
        </button>
        {values(this.props.store.todos).map((todo, index) => (
          <TodoView todo={todo} key={index} />
        ))}
        <TodoCounterView store={this.props.store} />
      </div>
    );
  }
}
@observer
class TodoView extends Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.todo.done}
          onChange={e => this.props.todo.toggle()}
        />
        <input
          type="text"
          value={this.props.todo.name}
          onChange={e => this.props.todo.setName(e.target.value)}
        />
      </div>
    );
  }
}

@observer
class TodoCounterView extends Component {
  render() {
    return (
      <div>
        {this.props.store.pendingCount} pending,{" "}
        {this.props.store.completedCount} completed
      </div>
    );
  }
}

export default MobxTree;
