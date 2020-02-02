import React, { Component } from "react";
import { Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;
class TableCom extends Component {
  state = {
    data: [
      {
        key: "1",
        firstName: "John",
        lastName: "Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"]
      },
      {
        key: "2",
        firstName: "Jim",
        lastName: "Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"]
      },
      {
        key: "3",
        firstName: "Joe",
        lastName: "Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"]
      }
    ]
  };
  render() {
    return (
      <div>
        <Table dataSource={this.state.data}>
          <ColumnGroup title="姓名">
            <Column title="姓氏" dataIndex="firstName" key="firstName" />
            <Column title="名" dataIndex="lastName" key="lastName" />
          </ColumnGroup>
          <Column title="年龄" dataIndex="age" key="age" />
          <Column title="地址" dataIndex="address" key="address" />
          <Column
            title="标签"
            dataIndex="tags"
            key="tags"
            render={tags => (
              <span>
                {tags.map(tag => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </span>
            )}
          />
          <Column
            title="操作"
            key="action"
            render={(text, record) => (
              <span>
                <p onClick={() => tableClick(this, record)}>删除</p>
              </span>
            )}
          />
        </Table>
      </div>
    );
  }
}
// 删除函数
function tableClick(that, record) {
  let list = that.state.data;
  list.forEach((item, index) => {
    if (item.key === record.key) {
      list.splice(index, 1);
    }
  });
  that.setState({
    data: list
  });
}

export default TableCom;
