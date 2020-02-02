import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
@observer
class MobxPage extends Component {
  // 属性类型要在全局这里定义
  static propTypes = {
    store: PropTypes.shape({
      user: PropTypes.string
    })
  };

  render() {
    let { store } = this.props;
    return (
      <div className="todoList">
        <p>{store.user}</p>
        <button onClick={() => store.UserChange()}>修改数据</button>
      </div>
    );
  }
}

export default MobxPage;
