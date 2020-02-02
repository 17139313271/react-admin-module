import { fromJS } from "immutable";

const defaultState = fromJS({
  loginToken: {} /*登录成功信息*/,
  layoutFlag: false,
  stateDisplay: 0, //状态展示数据
  navList: [
    {
      name: "状态管理示例",
      icon: "control",
      path: "/"
    },
    {
      name: "echars示例",
      icon: "bar-chart",
      path: "/echarsPage"
    },
    {
      name: "组件示例",
      icon: "appstore",
      list: [
        {
          name: "富文本示例",
          path: "/editorPage"
        },
        {
          name: "上传组件示例",
          path: "/uploadPage"
        },
        {
          name: "回到顶部示例",
          path: "/scrollTop"
        },
        {
          name: "反馈示例",
          path: "/feedback"
        }
      ]
    },
    {
      name: "表格示例",
      icon: "unordered-list",
      path: "/tablePage"
    },
    {
      name: "表单示例",
      icon: "form",
      path: "/formPage"
    },
    {
      name: "数据录入示例",
      icon: "fund",
      path: "/dataEntry"
    },
    {
      name: "数据展示示例",
      icon: "sliders",
      path: "/dataShow"
    },
    {
      name: "图标示例",
      icon: "appstore",
      path: "/iconPage"
    },
    {
      name: "execl表格示例",
      icon: "bar-chart",
      path: "/excelPage"
    }
  ]
});

export default defaultState;
