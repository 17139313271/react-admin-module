import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store/global";
import { Form, Icon, Input, Button } from "antd";
import "./login.scss";
class Login extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-box ly-flex ly-flex-ali-center ly-flex-just-center">
        <div className="login-form">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("Username", {
                rules: [{ required: true, message: "请输入用户名!" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0, 0, 0, .25)", }} />
                  }
                  placeholder="输入123456"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入密码!" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0, 0, 0, .25)", }} />
                  }
                  type="password"
                  placeholder="输入123456"
                />
              )}
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form>
        </div>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.loginFun(values);
      }
    });
  };
}

const mapState = state => {
  return {
    loginToken1: state.getIn(["global", "loginToken"])
  };
};

const mapDispatch = dispatch => ({
  loginFun(payload) {
    dispatch(actionCreators.loginFun(payload));
  }
});
const LoginForm = Form.create({ name: "login_form" })(Login);

export default connect(mapState, mapDispatch)(LoginForm);
