import axios from "axios";
import config from "./config";
import { message } from "antd";

import cookie from "react-cookies";
import history from "../routers/history";

const requestList = [];
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
//http request 拦截器
axios.interceptors.request.use(
  config => {
    requestList.push(config.url);
    const token = cookie.load("token");
    if (token) {
      config.headers = {
        "Content-Type": "application/json;charset=UTF-8",
        token: token
      };
    } else {
      config.headers = {
        "Content-Type": "application/json;charset=UTF-8"
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
//http response 拦截器
axios.interceptors.response.use(
  response => {
    requestList.splice(
      requestList.findIndex(item => item === response.config.url),
      1
    );
    return response;
  },
  err => {
    requestList.length = 0;
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "请求错误";
          break;

        case 401:
          err.message = "请求错误";
          break;

        case 403:
          err.message = "请求错误";
          /*token错误路由重定向*/
          history.push("/login");
          break;

        case 404:
          err.message = "请求错误";
          break;

        case 408:
          err.message = "请求超时";
          break;

        case 500:
          err.message = "请求错误";
          break;

        case 501:
          err.message = "服务未实现";
          break;

        case 502:
          err.message = "网关错误";
          break;

        case 503:
          err.message = "服务不可用";
          break;

        case 504:
          err.message = "网关超时";
          break;

        case 505:
          err.message = "HTTP版本不受支持";
          break;

        default:
      }
    } else {
      err.message = "网络出现问题，请稍后再试";
    }
    message.warning(err.message);
    return Promise.reject(err);
  }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(config + url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(config + url, data).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
}

export default {
  get,
  post
};
