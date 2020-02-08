import React, { Component } from "react";
import "./layout.scss";
import { Layout } from "antd";
import NavLeft from "../../components/layout/navLeft";
import HeaderPage from "../../components/layout/headerPage";
import TagPage from "../../components/layout/tagPage";
import cookie from "react-cookies";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../../store/global";

const { Sider, Content } = Layout;

class Index extends Component {
  state = {
    menuName: ""
  };
  UNSAFE_componentWillMount() {
    // 判断是否登录
    if (!cookie.load("token")) {
      this.props.history.push("/login");
      this.props.clearMenuList({ typeId: 1 });
    }
  }
  //子组件点击左侧导航回调函数
  menuNameFun(name) {
    this.setState({
      menuName: name
    });
  }
  onRef = ref => {
    this.navLeftBox = ref;
  };
  render() {
    return (
      <div className="layout-page">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.props.layoutFlag}>
            <div className="logo-name">狼魇</div>
            <NavLeft
              onRef={this.onRef}
              menuNameFun={this.menuNameFun.bind(this)}
            ></NavLeft>
          </Sider>
          <Layout>
            <HeaderPage
              menuName={this.state.menuName}
              clearMenuList={this.props.clearMenuList.bind(this)}
            />
            <TagPage
              menuNameFun={this.menuNameFun.bind(this)}
              clearMenuList={this.props.clearMenuList.bind(this)}
            ></TagPage>
            <Content className="layout-box">
              <div className="layout-content">{this.props.children}</div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapState = state => {
  return {
    layoutFlag: state.getIn(["login", "layoutFlag"]),
    navList: state.getIn(["login", "navList"]).toJS(),
    menuList: state.getIn(["login", "menuList"])
  };
};

const mapDispatch = dispatch => ({
  menuListFun(menuList) {
    dispatch(actionCreators.menuListFun(menuList));
  },
  clearMenuList(clearObj) {
    dispatch(actionCreators.clearMenuList(clearObj));
  }
});

export default withRouter(connect(mapState, mapDispatch)(Index));
