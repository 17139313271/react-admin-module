import React, { Component } from "react";

// 引入编辑器组件
import BraftEditor from "braft-editor";
// 引入编辑器样式
import "braft-editor/dist/index.css";

class Editor extends Component {
  state = {
    // 创建一个空的editorState作为初始值
    editorState: BraftEditor.createEditorState(null)
  };

  async componentDidMount() {
    // 假设此处从服务端获取html格式的编辑器内容
    // // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
    // this.setState({
    //   editorState: BraftEditor.createEditorState(htmlContent)
    // });
  }

  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML();
    console.log(htmlContent);
    this.props.editorCallback(htmlContent);
  };

  handleEditorChange = editorState => {
    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="my-component">
        <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
        />
      </div>
    );
  }
}

export default Editor;
