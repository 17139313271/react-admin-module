import React, { Component } from "react";

import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
const { SubMenu } = Menu;

class NavLeft extends Component {
  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
        {this.props.navList.map((item, index) => {
          return item.path ? (
            <Menu.Item key={index}>
              <NavLink to={item.path}>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </NavLink>
            </Menu.Item>
          ) : (
            <SubMenu
              key={index}
              title={
                <span>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </span>
              }
            >
              {item.list &&
                item.list.map(itemOne => {
                  return (
                    <Menu.Item key={itemOne.path}>
                      <NavLink to={itemOne.path}>{itemOne.name}</NavLink>
                    </Menu.Item>
                  );
                })}
            </SubMenu>
          );
        })}
      </Menu>
    );
  }
}

const mapState = state => {
  return {
    navList: state.getIn(["login", "navList"]).toJS()
  };
};

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch)(NavLeft);
