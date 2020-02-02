import EecharsPage from "../view/echars/echars"; // echars表单路由
import IconPage from "../view/iconPage/iconPage"; // 图标路由
import EditorPage from "../view/componentPage/editorPage/editorPage"; //编辑器路由
import UploadPage from "../view/componentPage/uploadPage/uploadPage"; //图片上传组件
import ScrollTop from "../view/componentPage/scrollTop/scrollTop"; //回到顶部组件
import Feedback from "../components/componentPage/feedback"; //用户反馈组件
import TablePage from "../view/tablePage/tablePage"; //表格组价示例
import FormPage from "../view/formPage/formPage"; //表单组件示例
import DataEntry from "../view/dataEntry/dataEntry"; //数据录入组件示例
import DataShow from "../view/dataShow/dataShow"; //数据展示组件示例
import StateManagement from "../view/stateManagement/stateManagement"; //状态管理示例
import ExcelPage from '../view/excelPage/excelPage';     //execl操作示例
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
