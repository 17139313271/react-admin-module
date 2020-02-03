import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class BasicsPage extends Component {
  componentDidMount() {
    // To disable submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const usernameError =
      isFieldTouched("username") && getFieldError("username");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={usernameError ? "error" : ""}
          help={usernameError || ""}
        >
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入你的账号!" }]
          })(
            <Input
              prefix={
                <Icon type="user" style={{ color: "rgba(0, 0, 0, .25)" }} />
              }
              placeholder="输入账号"
            />
          )}
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? "error" : ""}
          help={passwordError || ""}
        >
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入你的密码!" }]
          })(
            <Input
              prefix={
                <Icon type="lock" style={{ color: "rgba(0, 0, 0, .25)" }} />
              }
              type="password"
              placeholder="输入密码"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            确定
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedBasicsPage = Form.create({ name: "basics_page" })(BasicsPage);

export default WrappedBasicsPage;
