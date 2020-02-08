import React, { Component } from "react";
import {
  Alert,
  Drawer,
  Modal,
  Button,
  message,
  notification,
  Progress,
  Popconfirm,
  Spin,
  Switch
} from "antd";
import "./feedback.scss";

const ButtonGroup = Button.Group;
class Feedback extends Component {
  state = { visible: false, visibleModal: false, percent: 0, loading: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  showModal = () => {
    this.setState({
      visibleModal: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visibleModal: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visibleModal: false
    });
  };
  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };
  confirm = e => {
    console.log(e);
    message.success("Click on Yes");
  };

  cancel = e => {
    console.log(e);
    message.error("Click on No");
  };
  toggle = value => {
    this.setState({ loading: value });
  };
  render() {
    const info = () => {
      message.info("这是一条普通的消息");
    };
    const close = () => {
      console.log("通知被关闭。关闭按钮被单击或持续时间过去.");
    };

    const openNotification = () => {
      const key = `open${Date.now()}`;
      const btn = (
        <Button
          type="primary"
          size="small"
          onClick={() => notification.close(key)}
        >
          Confirm
        </Button>
      );
      notification.open({
        message: "通知标题",
        description: "通知关闭后调用函数(在手动的“持续时间”后自动调用).",
        btn,
        key,
        onClose: close
      });
    };
    return (
      <div className="feedback-box">
        <div>
          <h4>警告提示</h4>
          <Alert message="Success Text" type="success" />
        </div>
        <div>
          <h4>抽屉功能</h4>
          <Button type="primary" onClick={this.showDrawer}>
            打开抽屉
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>
        <div>
          <h4>对话框</h4>
          <Button type="primary" onClick={this.showModal}>
            打开对话框
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visibleModal}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
        <div>
          <h4>全局提示</h4>
          <Button type="primary" onClick={info}>
            显示消息
          </Button>
        </div>
        <div>
          <h4>通知提醒栏</h4>
          <Button type="primary" onClick={openNotification}>
            打开通知栏
          </Button>
        </div>
        <div>
          <h4>进度条</h4>
          <Progress percent={this.state.percent} />
          <ButtonGroup>
            <Button onClick={this.decline} icon="minus" />
            <Button onClick={this.increase} icon="plus" />
          </ButtonGroup>
        </div>
        <div>
          <h4>气泡确认框</h4>
          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={this.confirm}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
            <button>Delete</button>
          </Popconfirm>
        </div>
        <div>
          <h4>消息</h4>
          <Spin spinning={this.state.loading}>
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
          <div style={{ marginTop: 16, }}>
            Loading state：
            <Switch checked={this.state.loading} onChange={this.toggle} />
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
