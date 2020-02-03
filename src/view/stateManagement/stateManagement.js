import React, { Component } from "react";
import "./stateManagement.scss";
import ReduxPage from "../../components/stateManagement/reduxPage"; //redux 状态管理示例
import MobxPage from "../../components/stateManagement/mobxPage"; //mobx 状态管理示例
import mobxStore from "../../store/mobx/store"; //mobx 仓库
import MobxTree from "../../components/stateManagement/mobxTree"; //mobx-state-tree状态管理示例
import MobxTreeState from "../../store/mobxTree/store"; //mobx-state-tree 仓库
import HooksPage from "../../components/stateManagement/hooksPage"; //hooks状态管理示例
import { ContextProvider } from "../../store/hooks/store";

const MobxTreeStateBox = MobxTreeState.create({
  todos: {
    "1": {
      name: "Eat a cake",
      done: true
    }
  }
});
class StateManagement extends Component {
  render() {
    return (
      <div>
        <p>简单的react后台模板，欢迎各位大牛批评指导，qq:1415009351</p>
        <div className="stateManagement-item">
          <h4>redux 示例</h4>
          <ReduxPage></ReduxPage>
        </div>
        <div className="stateManagement-item">
          <h4>mobx 示例</h4>
          <MobxPage store={mobxStore}></MobxPage>
        </div>
        <div className="stateManagement-item">
          <h4>mobx-state-tree 示例</h4>
          <MobxTree store={MobxTreeStateBox}></MobxTree>
        </div>
        <div className="stateManagement-item">
          <h4>hooks useContext 示例</h4>
          <ContextProvider>
            <HooksPage></HooksPage>
          </ContextProvider>
        </div>
      </div>
    );
  }
}

export default StateManagement;
