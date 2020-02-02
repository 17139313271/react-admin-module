import React, { useState } from "react";
import Editor from "../../../components/componentPage/editor";
import "./editorPage.scss";

function EditorPage() {
  const [editorText, setEditorText] = useState("");
  return (
    <div className="editor-box">
      <h1>
        编辑器示例，此编辑器能满足一般的需求场景，相关链接：https://www.yuque.com/braft-editor/be/lzwpnr
      </h1>
      <Editor editorCallback={editorCallback.bind(this)}></Editor>
      <h5>编辑内容回显：</h5>
      <div
        className="editor-text"
        dangerouslySetInnerHTML={{
          __html: editorText
        }}
      />
    </div>
  );
  function editorCallback(editorHtml) {
    console.log(editorHtml);
    setEditorText(editorHtml);
  }
}
export default EditorPage;
