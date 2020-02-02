import React, { Component } from "react";
import { Table } from "antd";
class FixHeaderTable extends Component {
  render() {
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        width: 150
      },
      {
        title: "年龄",
        dataIndex: "age",
        width: 150
      },
      {
        title: "地址",
        dataIndex: "address"
      }
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
      });
    }
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      </div>
    );
  }
}

export default FixHeaderTable;
