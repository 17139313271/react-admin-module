import React, { Component } from "react";
import ExportJsonExcel from "js-export-excel";
import XLSX from "xlsx";
import { Table } from "antd";

const columns = [
  {
    title: "价格",
    dataIndex: "price",
    key: "price"
  },
  {
    title: "数量",
    dataIndex: "count",
    key: "count"
  },
  {
    title: "累计金额",
    dataIndex: "amount",
    key: "amount"
  },
  {
    title: "时间",
    key: "times",
    dataIndex: "times"
  }
];
const dataHistory = [
  {
    key: "1-1",
    price: "1 - 1",
    count: "2 - 2",
    amount: "3 - 1",
    times: "4 - 1"
  },
  {
    key: "2-1",
    price: "1 - 2",
    count: "2 - 2",
    amount: "3 - 2",
    times: "4 - 2"
  },
  {
    key: "3-1",
    price: "1 - 3",
    count: "2 - 3",
    amount: "3 - 3",
    times: "4 - 3"
  },
  {
    key: "4-1",
    price: "1 - 4",
    count: "2 - 4",
    amount: "3 - 4",
    times: "4 - 4"
  }
];
const downloadExcel = () => {
  // dataHistory 是列表数据
  var option = {};
  var dataTable = [];

  if (dataHistory) {
    for (let i in dataHistory) {
      if (dataHistory) {
        let obj = {
          价格: dataHistory[i].price,
          数量: dataHistory[i].count,
          累计金额: dataHistory[i].amounts,
          时间: dataHistory[i].times
        };
        dataTable.push(obj);
      }
    }
  }
  option.fileName = "历史成交";
  option.datas = [
    {
      sheetData: dataTable,
      sheetName: "sheet",
      sheetFilter: ["价格", "数量", "累计金额", "时间"],
      sheetHeader: ["价格", "数量", "累计金额", "时间"]
    }
  ];

  const toExcel = new ExportJsonExcel(option); // new
  toExcel.saveExcel();
};
function importExcel(file, that) {
  // 获取上传的文件对象
  const { files } = file.target;
  // 通过FileReader对象读取文件
  const fileReader = new FileReader();
  fileReader.onload = event => {
    try {
      const { result } = event.target;
      // 以二进制流方式读取得到整份excel表格对象
      const workbook = XLSX.read(result, { type: "binary" });
      let data = []; // 存储获取到的数据
      // 遍历每张工作表进行读取（这里默认只读取第一张表）
      for (const sheet in workbook.Sheets) {
        if (workbook.Sheets.hasOwnProperty.call(workbook.Sheets, sheet)) {
          // 利用 sheet_to_json 方法将 excel 转成 json 数据
          data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
          that.setState({
            importData: data
          });
          // break; // 如果只取第一张表，就取消注释这行
        }
      }
      //  that.forceUpdate();
    } catch (e) {
      // 这里可以抛出文件类型错误不正确的相关提示
      console.log("文件类型不正确");
      return;
    }
  };
  // 以二进制方式打开文件
  fileReader.readAsBinaryString(files[0]);
}
class ExcelPage extends Component {
  constructor() {
    super();
    this.state = {
      importData: []
    };
  }
  render() {
    return (
      <div>
        <button onClick={downloadExcel}> 导出excel表格 </button>
        <Table
          columns={columns}
          dataSource={dataHistory}
          rowKey={(record, index) => index}
        />
        <input
          placeholder="导入表格"
          type="file"
          accept=".xlsx, .xls"
          onChange={e => {
            importExcel(e, this);
          }}
        />
        <div>{JSON.stringify(this.state.importData)}</div>
      </div>
    );
  }
}

export default ExcelPage;
