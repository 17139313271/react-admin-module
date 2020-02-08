import React, { Component } from "react";
import { BackTop } from "antd";

class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testList: [
        {
          name: "往下拉"
        },
        {
          name: "往下拉"
        },
        {
          name: "往下拉"
        },
        {
          name: "往下拉"
        },
        {
          name: "往下拉"
        },
        {
          name: "往下拉"
        },
        {
          name: "往下拉"
        },
        {
          name: "往下拉"
        },
        {
          name: "往下拉"
        },
        {
          name: "往下拉"
        },
        {
          name: "往下拉"
        },
        {
          name: "往下拉"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div
          className="scroll-text"
          id="handelDocID"
          style={{ maxHeight: "calc(100vh - 60px)", overflowY: "auto", }}
        >
          {this.state.testList.map((item, index) => {
            return (
              <p style={{ lineHeight: 10, }} key={index}>
                {item.name}
              </p>
            );
          })}
        </div>
        <BackTop
          visibilityHeight={300}
          target={() => document.getElementById("handelDocID")}
        />
      </div>
    );
  }
}

export default ScrollTop;
