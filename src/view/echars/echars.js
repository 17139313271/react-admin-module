import React, { Component } from "react";

// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
//引入条形图
import "echarts/lib/chart/line";
//引入雷达图
import "echarts/lib/chart/radar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

import { Row, Col } from "antd";
import "./echars.scss";

class Echars extends Component {
  state = {
    echarsItemWidth: 0
  };
  componentDidMount() {
    this.handleHeight();
    //组件挂载之后添加监听器
    window.addEventListener("resize", this.handleHeight);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleHeight);
  }
  handleHeight = () => {
    this.setState(
      {
        echarsItemWidth: this.echarsItem.clientWidth
      },
      () => {
        //初始化折线图
        var myChart = echarts.init(document.getElementById("main"));
        myChart.setOption({
          title: {
            text: "折线走势图示例"
          },
          tooltip: {
            trigger: "axis"
          },
          legend: {
            data: ["邮件营销", "联盟广告"]
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              name: "邮件营销",
              type: "line",
              stack: "总量",
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: "联盟广告",
              type: "line",
              stack: "总量",
              data: [220, 182, 191, 234, 290, 330, 310]
            }
          ]
        });
        // 初始化柱状图
        var myChart1 = echarts.init(document.getElementById("main1"));
        // 绘制图表
        myChart1.setOption({
          title: { text: "柱状图示例" },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        });
        //初始化雷达图
        var myChart2 = echarts.init(document.getElementById("main2"));
        myChart2.setOption({
          title: {
            text: "雷达图示例"
          },
          legend: {
            data: ["图一", "图二", "张三", "李四"]
          },
          radar: [
            {
              indicator: [
                { text: "指标一" },
                { text: "指标二" },
                { text: "指标三" },
                { text: "指标四" },
                { text: "指标五" }
              ],
              center: ["50%", "50%"],
              radius: 120,
              startAngle: 90,
              splitNumber: 4,
              shape: "circle",
              name: {
                formatter: "【{value}】",
                textStyle: {
                  color: "#72ACD1"
                }
              },
              splitArea: {
                areaStyle: {
                  color: [
                    "rgba(114, 172, 209, 0.2)",
                    "rgba(114, 172, 209, 0.4)",
                    "rgba(114, 172, 209, 0.6)",
                    "rgba(114, 172, 209, 0.8)",
                    "rgba(114, 172, 209, 1)"
                  ],
                  shadowColor: "rgba(0, 0, 0, 0.3)",
                  shadowBlur: 10
                }
              },
              axisLine: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.5)"
                }
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.5)"
                }
              }
            }
          ],
          series: [
            {
              name: "雷达图",
              type: "radar",
              emphasis: {
                lineStyle: {
                  width: 4
                }
              },
              data: [
                {
                  value: [100, 8, 0.4, -80, 2000],
                  name: "图一",
                  symbol: "rect",
                  symbolSize: 5,
                  lineStyle: {
                    type: "dashed"
                  }
                },
                {
                  value: [60, 5, 0.3, -100, 1500],
                  name: "图二",
                  areaStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                  }
                }
              ]
            }
          ]
        });
        myChart.resize();
        myChart1.resize();
        myChart2.resize();
      }
    );
  };
  render() {
    return (
      <div className="echars-box">
        <div
          className="echars-item"
          ref={e => {
            this.echarsItem = e;
          }}
        >
          <div
            id="main"
            style={{ width: this.state.echarsItemWidth, height: 400 }}
          ></div>
        </div>
        <div className="echars-item">
          <Row>
            <Col span={12}>
              <div
                id="main1"
                style={{ width: this.state.echarsItemWidth / 2, height: 400 }}
              ></div>
            </Col>
            <Col span={12}>
              <div
                id="main2"
                style={{ width: this.state.echarsItemWidth / 2, height: 400 }}
              ></div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Echars;
