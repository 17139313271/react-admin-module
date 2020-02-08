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
  tagCloneFun(index) {
    this.props.clearMenuList({ typeId: 2, index: index });
  }
  render() {
    return (
      <div className="tagPage-scroll">
        <div className="ly-flex ly-flex-wrap-nowrap tagPage-box">
          {this.props.menuList &&
            this.props.menuList.map((item, index) => {
              return (
                <div key={item.path}>
                  {window.location.pathname === item.path ? (
                    <Tag
                      className="tags-item "
                      color="blue"
                      onClick={() => this.tagMenuOpen(item)}
                      onClose={() => this.tagCloneFun(index)}
                    >
                      {item.name}
                    </Tag>
                  ) : (
                    <Tag
                      className="tags-item "
                      closable
                      onClick={() => this.tagMenuOpen(item)}
                      onClose={() => this.tagCloneFun(index)}
                    >
                      {item.name}
                    </Tag>
                  )}
                </div>
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
