import React, { Component } from "react";
import "./formPage.scss";
import BasicsPage from "../../components/formPage/basicsPage"; //基础表单
import DynamicPage from "../../components/formPage/dynamicPage"; //动态表单示例
import TimePage from "../../components/formPage/timePage"; //时间控件表单示例
import ShowTable from "../../components/formPage/showTable"; //数据显示组件示例
class FormPage extends Component {
  render() {
    return (
      <div>
        <div className="formPage-item">
          <h4>基础表单示例</h4>
          <BasicsPage></BasicsPage>
        </div>
        <div className="formPage-item">
          <h4>动态表单示例</h4>
          <DynamicPage></DynamicPage>
        </div>
        <div className="formPage-item">
          <h4>时间表单示例</h4>
          <TimePage></TimePage>
        </div>
        <div className="formPage-item">
          <h4>表单数据显示示例</h4>
          <ShowTable></ShowTable>
        </div>
      </div>
    );
  }
}

export default FormPage;
