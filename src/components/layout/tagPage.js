import React, { Component } from "react";
import { Tag } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../routers/history";
import "./tagPage.scss";

class TagPage extends Component {
  constructor() {
    super();
    this.state = {
      scrollFlag: true
    };
  }
  componentDidUpdate() {
    let tagItem = document.getElementsByClassName("tags-item");
    let tagScroll = document.getElementsByClassName("tagPage-scroll")[0];
    let tagWidth = 0;
    if (tagItem.length === 0) return;
    for (let i = 0; i < tagItem.length; i++) {
      tagWidth += tagItem[i].offsetWidth;
    }
    if (tagScroll.offsetWidth < tagWidth) {
      tagScroll.scrollLeft =
        tagWidth -
        tagScroll.offsetWidth +
        tagItem[tagItem.length - 1].offsetWidth;
    }
  }
  tagMenuOpen(item) {
    this.props.menuNameFun(item.name);
    history.push(item.path);
  }
  render() {
    return (
      <div className="tagPage-scroll">
        <div className="ly-flex ly-flex-wrap-nowrap tagPage-box">
          {this.props.menuList &&
            this.props.menuList.map(item => {
              return (
                <Tag
                  className="tags-item "
                  closable
                  color={window.location.pathname === item.path ? "blue" : ""}
                  onClick={() => this.tagMenuOpen(item)}
                  key={item.path}
                >
                  {item.name}
                </Tag>
              );
            })}
        </div>
      </div>
    );
  }
}
const mapState = state => {
  return {
    menuList: state.getIn(["login", "menuList"]).toJS()
  };
};

const mapDispatch = () => ({});

export default withRouter(connect(mapState, mapDispatch)(TagPage));
