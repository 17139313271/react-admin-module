import React, { Component } from "react";
import { Table } from "antd";
class FixedColTable extends Component {
  render() {
    const columns = [
      {
        title: "姓名",
        width: 100,
        dataIndex: "name",
        key: "name",
        fixed: "left"
      },
      {
        title: "年龄",
        width: 100,
        dataIndex: "age",
        key: "age",
        fixed: "left"
      },
      {
        title: "第一行",
        dataIndex: "address",
        key: "1",
        width: 150
      },
      {
        title: "第二行",
        dataIndex: "address",
        key: "2",
        width: 150
      },
      {
        title: "第三行",
        dataIndex: "address",
        key: "3",
        width: 150
      },
      {
        title: "第四行",
        dataIndex: "address",
        key: "4",
        width: 150
      },
      {
        title: "第五行",
        dataIndex: "address",
        key: "5",
        width: 150
      },
      {
        title: "第六行",
        dataIndex: "address",
        key: "6",
        width: 150
      },
      {
        title: "第七行",
        dataIndex: "address",
        key: "7",
        width: 150
      },
      { title: "第八行", dataIndex: "address", key: "8" },
      {
        title: "操作",
        key: "operation",
        fixed: "right",
        width: 100,
        render: () => <p>action</p>
      }
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`
      });
    }
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 1500, y: 300 }}
        />
      </div>
    );
  }
}

export default FixedColTable;
