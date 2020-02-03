import React, { Component } from "react";
import "./layout.scss";
import { Layout } from "antd";
import NavLeft from "../../components/layout/navLeft";
import HeaderPage from "../../components/layout/headerPage";
import cookie from "react-cookies";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const { Sider, Content } = Layout;

class Index extends Component {
  constructor(props) {
    super(props);
    window._ROUTER_ = this.props.history;
  }
  componentDidMount() {
    if (!cookie.load("token")) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div className="layout-box">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.props.layoutFlag}>
            <div className="logo-name">狼魇</div>
            <NavLeft />
          </Sider>
          <Layout>
            <HeaderPage />
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
    layoutFlag: state.getIn(["login", "layoutFlag"])
  };
};

const mapDispatch = () => ({});

export default withRouter(connect(mapState, mapDispatch)(Index));
