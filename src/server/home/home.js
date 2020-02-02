import request from "../request";
import homeApi from "./homeApi";

export default {
  /*登录*/
  getBacklogFun(option) {
    request.get(homeApi.getBacklogApi, option).then(response => {
      this.homeNoticeList = response.data;
    });
  }
};
