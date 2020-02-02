import React, { Component } from "react";
import { Table } from "antd";
class FoldTable extends Component {
  render() {
    const columns = [
      { title: "姓名", dataIndex: "name", key: "name" },
      { title: "年龄", dataIndex: "age", key: "age" },
      { title: "地址", dataIndex: "address", key: "address" },
      {
        title: "操作",
        dataIndex: "",
        key: "x",
        render: () => <p onClick={() => tableClick()}>Delete</p>
      }
    ];

    const data = [
      {
        key: 1,
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        description:
          "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."
      },
      {
        key: 2,
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        description:
          "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park."
      },
      {
        key: 3,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        description:
          "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park."
      }
    ];
    return (
      <div>
        <Table
          columns={columns}
          expandedRowRender={record => (
            <p style={{ margin: 0 }}>{record.description}</p>
          )}
          dataSource={data}
        />
      </div>
    );
  }
}
//删除函数
function tableClick() {
  console.log("删除成功");
}

export default FoldTable;
