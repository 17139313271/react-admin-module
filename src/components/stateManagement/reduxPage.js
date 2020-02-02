import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store/global";
class ReduxPage extends Component {
  render() {
    return (
      <div>
        <p>redux示例,redux结合immutable</p>
        <p>{this.props.stateDisplay}</p>
        <button onClick={() => this.props.stateDisplayFun()}>点击</button>
      </div>
    );
  }
}

const mapState = state => {
  return {
    stateDisplay: state.getIn(["login", "stateDisplay"])
  };
};

const mapDispatch = dispatch => ({
  stateDisplayFun() {
    dispatch(actionCreators.stateDisplayFun());
  }
});

export default connect(mapState, mapDispatch)(ReduxPage);
