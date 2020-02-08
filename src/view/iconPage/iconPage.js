import React, { Component } from "react";
import { Row, Col, Tabs, Icon, Tooltip } from "antd";
import "./iconPage.scss";

const { TabPane } = Tabs;
class IconPage extends Component {
  constructor() {
    super();
    this.state = {
      iconList: [
        {
          icon: "edit",
          name: "edit"
        },
        {
          icon: "form",
          name: "form"
        },
        {
          icon: "copy",
          name: "copy"
        },
        {
          icon: "scissor",
          name: "scissor"
        },
        {
          icon: "delete",
          name: "delete"
        },
        {
          icon: "snippets",
          name: "snippets"
        },
        {
          icon: "diff",
          name: "diff"
        },
        {
          icon: "highlight",
          name: "highlight"
        },
        {
          icon: "align-center",
          name: "align-centert"
        },
        {
          icon: "align-left",
          name: "align-left"
        },
        {
          icon: "align-right",
          name: "align-right"
        },
        {
          icon: "bg-colors",
          name: "bg-colors"
        },
        {
          icon: "bold",
          name: "bold"
        },
        {
          icon: "italic",
          name: "italic"
        },
        {
          icon: "underline",
          name: "underline"
        },
        {
          icon: "strikethrough",
          name: "strikethrough"
        },
        {
          icon: "redo",
          name: "redo"
        },
        {
          icon: "undo",
          name: "undo"
        },
        {
          icon: "zoom-in",
          name: "zoom-in"
        },
        {
          icon: "zoom-out",
          name: "zoom-out"
        },
        {
          icon: "font-colors",
          name: "font-colors"
        },
        {
          icon: "font-size",
          name: "font-size"
        },
        {
          icon: "line-height",
          name: "line-height"
        },
        {
          icon: "dash",
          name: "dash"
        },
        {
          icon: "small-dash",
          name: "small-dash"
        },
        {
          icon: "sort-ascending",
          name: "sort-ascending"
        },
        {
          icon: "sort-descending",
          name: "sort-descending"
        },
        {
          icon: "drag",
          name: "drag"
        },
        {
          icon: "ordered-list",
          name: "ordered-list"
        },
        {
          icon: "unordered-list",
          name: "unordered-list"
        },
        {
          icon: "radius-setting",
          name: "radius-setting"
        },
        {
          icon: "column-width",
          name: "column-width"
        }
      ],
      iconList1: [
        {
          icon: "edit",
          name: "edit"
        },
        {
          icon: "copy",
          name: "copy"
        },
        {
          icon: "delete",
          name: "delete"
        },
        {
          icon: "snippets",
          name: "snippets"
        },
        {
          icon: "diff",
          name: "diff"
        },
        {
          icon: "highlight",
          name: "highlight"
        },
        {
          icon: "pie-chart",
          name: "pie-chart"
        },
        {
          icon: "box-plot",
          name: "box-plot"
        },
        {
          icon: "fund",
          name: "fund"
        },
        {
          icon: "sliders",
          name: "sliders"
        },
        {
          icon: "question-circle",
          name: "question-circle"
        },
        {
          icon: "plus-circle",
          name: "plus-circle"
        },
        {
          icon: "pause-circle",
          name: "pause-circle"
        },
        {
          icon: "minus-circle",
          name: "minus-circle"
        },
        {
          icon: "minus-square",
          name: "minus-square"
        },
        {
          icon: "info-circle",
          name: "info-circle"
        },
        {
          icon: "close-circle",
          name: "close-circle"
        },
        {
          icon: "close-square",
          name: "close-square"
        },
        {
          icon: "check-circle",
          name: "check-circle"
        },
        {
          icon: "check-square",
          name: "check-square"
        },
        {
          icon: "clock-circle",
          name: "clock-circle"
        }
      ]
    };
  }
  render() {
    return (
      <div className="iconPage-box">
        <Row>
          <Col span={24}>
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span>线框风格</span>} key="1">
                <div className="iconPage-item-one ly-flex ly-flex-wrap-wrap">
                  {this.state.iconList.map(item => {
                    return (
                      <Tooltip
                        title={`<Icon type=${item.name} />`}
                        key={item.name}
                      >
                        <div className="icon-item ly-flex ly-flex-col ly-flex-ali-center ly-flex-just-center">
                          <Icon type={item.icon} style={{ fontSize: "20px", }} />
                          <p>{item.name}</p>
                        </div>
                      </Tooltip>
                    );
                  })}
                </div>
              </TabPane>
              <TabPane tab={<span>实底风格</span>} key="2">
                <div className="iconPage-item-one ly-flex ly-flex-wrap-wrap">
                  {this.state.iconList1.map(item => {
                    return (
                      <Tooltip
                        title={`<Icon type=${item.name} />`}
                        key={item.name}
                      >
                        <div className="icon-item ly-flex ly-flex-col ly-flex-ali-center ly-flex-just-center">
                          <Icon
                            type={item.icon}
                            style={{ fontSize: "20px", }}
                            theme="filled"
                          />
                          <p>{item.name}</p>
                        </div>
                      </Tooltip>
                    );
                  })}
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default IconPage;
