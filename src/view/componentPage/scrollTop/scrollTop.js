import React, { Component } from "react";
import ScrollTopComponent from "../../../components/componentPage/scrollTop";
import "./scrollTop.scss";
class ScrollTop extends Component {
  render() {
    return (
      <div>
        <h1>回到顶部组件</h1>
        <ScrollTopComponent></ScrollTopComponent>
      </div>
    );
  }
}

export default ScrollTop;
