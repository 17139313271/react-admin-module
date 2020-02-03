import React, { Component } from "react";
import "./dataShow.scss";
import Logo from "../../components/dataShow/logo"; //徽标组织示例
import Discuss from "../../components/dataShow/discuss"; //评论组件示例
import FoldedPanel from "../../components/dataShow/foldedPanel"; //折叠面板示例
import Slideshow from "../../components/dataShow/slideshow"; //轮播图组件示例
import TreeControl from "../../components/dataShow/treeControl"; //树形控件组件示例
import TagsPage from "../../components/dataShow/tagsPage"; //标签组件示例
import TabsPage from "../../components/dataShow/tabsPage"; //tab组件示例
class DataShow extends Component {
  render() {
    return (
      <div className="dataShow-box">
        <div className="dataShow-item">
          <h4>徽标示例</h4>
          <Logo></Logo>
        </div>
        <div className="dataShow-item">
          <h4>评论组件示例</h4>
          <Discuss></Discuss>
        </div>
        <div className="dataShow-item">
          <h4>折叠面板组件示例</h4>
          <FoldedPanel></FoldedPanel>
        </div>
        <div className="dataShow-item">
          <h4>轮播图组件示例</h4>
          <Slideshow></Slideshow>
        </div>
        <div className="dataShow-item">
          <h4>树形控件组件示例</h4>
          <TreeControl></TreeControl>
        </div>
        <div className="dataShow-item">
          <h4>标签组件示例</h4>
          <TagsPage></TagsPage>
        </div>
        <div className="dataShow-item">
          <h4>tab组件示例</h4>
          <TabsPage></TabsPage>
        </div>
      </div>
    );
  }
}

export default DataShow;
