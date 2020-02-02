import * as constants from "./constants";
import request from "../../server/login/login";
import cookie from "react-cookies";
import history from "../../routers/history";
/*登录事件*/
export function loginFun(payload) {
  return async dispatch => {
    let loginToken = await request.loginFun(payload);
    cookie.save("token", loginToken.token);
    dispatch({
      type: constants.LOGIN,
      loginToken
    });
    history.push("/");
  };
}

/*布局阈值*/
export const layoutFlagFun = () => ({
  type: constants.LAYOUT_FLAG
});

// 展示数据

export const stateDisplayFun = () => ({
  type: constants.STATE_DISPLAY
});
