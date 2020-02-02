import React, { Component } from "react";
import { Menu, Icon, Dropdown, Avatar, Badge } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../../store/global/index";

import cookie from "react-cookies";
class HeaderPage extends Component {
  dropDownClick({ key }) {
    if (key === "3") {
      cookie.save("token", "");
      window._ROUTER_.push("/login");
    }
  }
  render() {
    const dropDownMenu = (
      <Menu onClick={this.dropDownClick.bind(this)}>
        <Menu.Item key="1">个人信息</Menu.Item>
        <Menu.Item key="2">设置</Menu.Item>
        <Menu.Item key="3">退出</Menu.Item>
      </Menu>
    );

    return (
      <div className="layout-header">
        <Icon
          className="trigger trigger-icon"
          type={this.props.layoutFlag ? "menu-unfold" : "menu-fold"}
          onClick={this.props.layoutFlagFun}
        />
        <div className="header-right">
          <Badge count={5}>
            {/*<a href="javascript::" className="head-example" />*/}
          </Badge>
          <Dropdown overlay={dropDownMenu}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Dropdown>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    layoutFlag: state.getIn(["golbal", "layoutFlag"])
  };
};

const mapDispatch = dispatch => ({
  layoutFlagFun() {
    dispatch(actionCreators.layoutFlagFun());
  }
});

export default withRouter(connect(mapState, mapDispatch)(HeaderPage));
