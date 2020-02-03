import loadable from "@loadable/component";
const EecharsPage = loadable(() => import("../view/echars/echars")); // echars表单路由
const IconPage = loadable(() => import("../view/iconPage/iconPage")); // 图标路由
const EditorPage = loadable(() =>
  import("../view/componentPage/editorPage/editorPage")
); //编辑器路由
const UploadPage = loadable(() =>
  import("../view/componentPage/uploadPage/uploadPage")
); //图片上传组件
const ScrollTop = loadable(() =>
  import("../view/componentPage/scrollTop/scrollTop")
); //回到顶部组件
const Feedback = loadable(() => import("../components/componentPage/feedback")); //用户反馈组件
const TablePage = loadable(() => import("../view/tablePage/tablePage")); //表格组价示例
const FormPage = loadable(() => import("../view/formPage/formPage")); //表单组件示例
const DataEntry = loadable(() => import("../view/dataEntry/dataEntry")); //数据录入组件示例
const DataShow = loadable(() => import("../view/dataShow/dataShow")); //数据展示组件示例
const StateManagement = loadable(() =>
  import("../view/stateManagement/stateManagement")
); //状态管理示例
const ExcelPage = loadable(() => import("../view/excelPage/excelPage")); //execl操作示例

export default [
  {
    path: "/echarsPage",
    name: "EecharsPage",
    auth: true,
    component: EecharsPage
  },
  {
    path: "/iconPage",
    name: "IconPage",
    auth: true,
    component: IconPage
  },
  {
    path: "/editorPage",
    name: "EditorPage",
    auth: true,
    component: EditorPage
  },
  {
    path: "/uploadPage",
    name: "UploadPage",
    auth: true,
    component: UploadPage
  },
  {
    path: "/scrollTop",
    name: "ScrollTop",
    auth: true,
    component: ScrollTop
  },
  {
    path: "/feedback",
    name: "Feedback",
    auth: true,
    component: Feedback
  },
  {
    path: "/tablePage",
    name: "TablePage",
    auth: true,
    component: TablePage
  },
  {
    path: "/formPage",
    name: "FormPage",
    auth: true,
    component: FormPage
  },
  {
    path: "/dataEntry",
    name: "DataEntry",
    auth: true,
    component: DataEntry
  },
  {
    path: "/dataShow",
    name: "DataShow",
    auth: true,
    component: DataShow
  },
  {
    path: "/",
    name: "StateManagement",
    auth: true,
    component: StateManagement
  },
  {
    path: "/excelPage",
    name: "ExcelPage",
    auth: true,
    component: ExcelPage
  }
];
