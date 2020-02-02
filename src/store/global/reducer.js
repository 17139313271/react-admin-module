import * as constants from "./constants";
import defaultState from "./store";

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return state.set("loginToken", action.payload);
    case constants.LAYOUT_FLAG:
      return layoutFlagChange(state, action);
    case constants.STATE_DISPLAY:
      return state.set("stateDisplay", 222);
    default:
      return state;
  }
};

const layoutFlagChange = state => {
  return state.merge({
    layoutFlag: !state.get("layoutFlag")
  });
};

/*登录输入框修改*/
// const loginInput = (state, action) => {
//   let oldLogin = state.get("postData").toJS();
//   let newLogin = Object.assign(oldLogin, action.payload);
//   return state.merge({
//     loginData: fromJS(newLogin)
//   });
// };
