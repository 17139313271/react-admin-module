import React, { Component } from "react";
import { Table } from "antd";

class GangedTable extends Component {
  render() {
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        render: text => <p>{text}</p>
      },
      {
        title: "年龄",
        dataIndex: "age"
      },
      {
        title: "地址",
        dataIndex: "address"
      }
    ];
    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park"
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park"
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park"
      },
      {
        key: "4",
        name: "Disabled User",
        age: 99,
        address: "Sidney No. 1 Lake Park"
      }
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: record => ({
        disabled: record.key === "3", // Column configuration not to be checked
        name: record.name
      })
    };
    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    );
  }
}

export default GangedTable;
