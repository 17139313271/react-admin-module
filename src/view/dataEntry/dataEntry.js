import React, { Component } from "react";
import "./dataEntry.scss";
import CheckBox from "../../components/dataEntry/checkBox"; //复选框组件示例
import CascadeChiode from "../../components/dataEntry/cascadeChoice"; //级联选择组件示例
import SelectChoice from '../../components/dataEntry/selectChoice';   //下拉选择组件示例
import TreeSelect from '../../components/dataEntry/treeSelect';      //树选择组件示例
import Transfer from '../../components/dataEntry/transfer';      //穿梭框
class DataEntry extends Component {
  render() {
    return (
      <div className="dataEntry-box">
        <div className="dataEntry-item">
          <h4>复选框组件示例</h4>
          <CheckBox></CheckBox>
        </div>
        <div className="dataEntry-item">
          <h4>级联选择组件示例</h4>
          <CascadeChiode></CascadeChiode>
        </div>
        <div className="dataEntry-item">
          <h4>下拉选择组件示例</h4>
          <SelectChoice></SelectChoice>
        </div>
        <div className="dataEntry-item">
          <h4>树选择组件示例</h4>
          <TreeSelect></TreeSelect>
        </div>
        <div className="dataEntry-item">
          <h4>穿梭框组件示例</h4>
          <Transfer></Transfer>
        </div>
      </div>
    );
  }
}

export default DataEntry;
