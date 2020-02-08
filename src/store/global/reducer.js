import * as constants from "./constants";
import defaultState from "./store";
import { fromJS } from "immutable";
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return state.set("loginToken", action.payload);
    case constants.LAYOUT_FLAG:
      return layoutFlagChange(state, action);
    case constants.LAYOUT_MENUlIST:
      return addMenuList(state, action);
    case constants.LAYOUT_CLEARMENUlIST:
      return clearMenuList(state, action);
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
//增加tag菜单数据
const addMenuList = (state, action) => {
  let oldMenuList = state.get("menuList");
  return state.merge({
    menuList: fromJS(oldMenuList.push(action.payload))
  });
};
//清除tag菜单数据 typeId 1 为全部清除，2为删除
const clearMenuList = (state, action) => {
  let MenuList = state.get("menuList");
  switch (action.payload.typeId) {
    case 1: {
      return state.merge({
        menuList: fromJS([])
      });
    }
    case 2: {
      let oldMenuList = MenuList.splice(action.payload.index, 1);
      return state.merge({
        menuList: fromJS(oldMenuList)
      });
    }
    default:
      return state;
  }
};
