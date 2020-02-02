import request from "../request";
import loginApi from "./loginApi";

export default {
  /*登录*/
  loginFun(option) {
    return request.get(loginApi.loginApi, option).then(response => {
      return response;
    });
  }
};
