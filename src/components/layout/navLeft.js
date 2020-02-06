import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../../store/global";
import history from "../../routers/history";
const { SubMenu } = Menu;

var unlisten;

class NavLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultIndex: "/",
      defaultOpenIndex: "0",
      selectedIndex: "0"
    };
  }
  componentDidMount() {
    // 调用父组件方法把当前实例传给父组件
    this.props.onRef(this);
    //监听路由，调用子组件事件
    this.routerMenuFun();
    unlisten = history.listen(() => {
      this.routerMenuFun();
    });
  }
  componentWillUnmount() {
    unlisten();
  }
  routerMenuFun() {
    this.props.navList.forEach((item, index) => {
      if (window.location.pathname === item.path) {
        this.setState({
          selectedIndex: item.path
        });
      } else {
        item.list &&
          item.list.forEach(itemOne => {
            if (window.location.pathname === itemOne.path) {
              this.setState({
                selectedIndex: itemOne.path,
                defaultOpenIndex: index.toString()
              });
            }
          });
      }
    });
  }
  handleClick = e => {
    this.setState({
      selectedIndex: e.key
    });
    let menuObj = {
      name: e.item.props.name,
      path: e.key
    };

    if (
      JSON.stringify(this.props.menuList).indexOf(JSON.stringify(menuObj)) ===
      -1
    ) {
      this.props.menuListFun(menuObj);
    }
    this.props.menuNameFun(e.item.props.name);
  };
  render() {
    return (
      <div>
        <Menu
          theme="dark"
          onClick={this.handleClick}
          defaultSelectedKeys={[this.state.defaultIndex]}
          defaultOpenKeys={[this.state.defaultOpenIndex]}
          selectedKeys={[this.state.selectedIndex]}
          mode="inline"
        >
          {this.props.navList.map((item, index) => {
            return item.path ? (
              <Menu.Item key={item.path} name={item.name}>
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
                      <Menu.Item key={itemOne.path} name={itemOne.name}>
                        <NavLink to={itemOne.path}>{itemOne.name}</NavLink>
                      </Menu.Item>
                    );
                  })}
              </SubMenu>
            );
          })}
        </Menu>
      </div>
    );
  }
}

const mapState = state => {
  return {
    navList: state.getIn(["login", "navList"]).toJS(),
    menuList: state.getIn(["login", "menuList"]).toJS()
  };
};

const mapDispatch = dispatch => ({
  menuListFun(menuList) {
    dispatch(actionCreators.menuListFun(menuList));
  }
});

export default connect(mapState, mapDispatch)(NavLeft);
