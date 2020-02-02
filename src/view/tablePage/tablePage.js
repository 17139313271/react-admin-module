import React, { Component } from "react";
import "./tablePage.scss";
import TableCom from "../../components/componentPage/table"; //基础表单示例
import GangedTable from "../../components/componentPage/gangedTable"; //联动表单示例
import SortTable from "../../components/componentPage/sortTable"; //筛选排序表单示例
import BorderTable from "../../components/componentPage/borderTable"; //带边框的表格示例
import FoldTable from "../../components/componentPage/foldTable"; //可折叠展开表格
import TreeTable from "../../components/componentPage/treeTable"; //树形表格示例
import FixHeaderTable from "../../components/componentPage/fixHeaderTable"; //固定顶部表格示例；
import FixedColTable from '../../components/componentPage/fixedColTable';  //固定列表格示例；
import NextTable from '../../components/componentPage/nextTable'; //嵌套表单示例
import DrapTable from '../../components/componentPage/drapTable'; // 拖拽表单示例
class TablePage extends Component {
  render() {
    return (
      <div className="table-box">
        <div className="table-item">
          <h4>基础表格示例</h4>
          <TableCom></TableCom>
        </div>
        <div className="table-item">
          <h4>联动表格示例</h4>
          <GangedTable></GangedTable>
        </div>
        <div className="table-item">
          <h4>筛选排序示例</h4>
          <SortTable></SortTable>
        </div>
        <div className="table-item">
          <h4>带边框表格示例</h4>
          <BorderTable></BorderTable>
        </div>
        <div className="table-item">
          <h4>折叠展开表格示例</h4>
          <FoldTable></FoldTable>
        </div>
        <div className="table-item">
          <h4>树形表格示例</h4>
          <TreeTable></TreeTable>
        </div>
        <div className="table-item">
          <h4>固定顶部表格示例</h4>
          <FixHeaderTable></FixHeaderTable>
        </div>
        <div className="table-item">
          <h4>固定顶部表格示例</h4>
          <FixedColTable></FixedColTable>
        </div>
        <div className="table-item">
          <h4>嵌套表格示例</h4>
          <NextTable></NextTable>
        </div>
        <div className="table-item">
          <h4>拖拽表格示例</h4>
          <DrapTable></DrapTable>
        </div>
      </div>
    );
  }
}

export default TablePage;
