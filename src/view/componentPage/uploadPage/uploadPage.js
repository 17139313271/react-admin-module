import React, { Component } from "react";
import Upload from "../../../components/componentPage/upload";
import "./uploadPage.scss";
class UploadPage extends Component {
  render() {
    return (
      <div className="upload-box">
        <h2>图片上传</h2>
        <Upload></Upload>
      </div>
    );
  }
}

export default UploadPage;
