import React, { Component } from "react";
import { Badge } from "antd";
class Logo extends Component {
  render() {
    return (
      <div>
        <Badge count={0} showZero>
          徽标
        </Badge>
      </div>
    );
  }
}

export default Logo;
