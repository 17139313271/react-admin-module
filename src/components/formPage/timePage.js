import React, { Component } from "react";

import { Form, DatePicker, TimePicker, Button } from "antd";
const { MonthPicker, RangePicker } = DatePicker;
class TimePage extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue["range-picker"];
      const rangeTimeValue = fieldsValue["range-time-picker"];
      const values = {
        ...fieldsValue,
        "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
        "date-time-picker": fieldsValue["date-time-picker"].format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
        "range-picker": [
          rangeValue[0].format("YYYY-MM-DD"),
          rangeValue[1].format("YYYY-MM-DD")
        ],
        "range-time-picker": [
          rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
          rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss")
        ],
        "time-picker": fieldsValue["time-picker"].format("HH:mm:ss")
      };
      console.log("Received values of form: ", values);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };
    const rangeConfig = {
      rules: [{ type: "array", required: true, message: "Please select time!" }]
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="日期选择器">
          {getFieldDecorator("date-picker", config)(<DatePicker />)}
        </Form.Item>
        <Form.Item label="日期选择器[开始时间]">
          {getFieldDecorator(
            "date-time-picker",
            config
          )(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
        </Form.Item>
        <Form.Item label="月份选择">
          {getFieldDecorator("month-picker", config)(<MonthPicker />)}
        </Form.Item>
        <Form.Item label="范围选择">
          {getFieldDecorator("range-picker", rangeConfig)(<RangePicker />)}
        </Form.Item>
        <Form.Item label="范围选择[开始时间]">
          {getFieldDecorator(
            "range-time-picker",
            rangeConfig
          )(<RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
        </Form.Item>
        <Form.Item label="时间选择">
          {getFieldDecorator("time-picker", config)(<TimePicker />)}
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 }
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedTimePage = Form.create({ name: "time_related_controls" })(
  TimePage
);
export default WrappedTimePage;
