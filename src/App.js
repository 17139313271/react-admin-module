import React from "react";
import { ConfigProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import { Provider } from "react-redux";
import RouterPage from "./router";
import store from "./store";
import "./App.css";
// import "./common/css/reset.css";
import "./common/css/flex.css";

moment.locale("zh_CN");

function App() {
  return (
    <div id="App">
      <ConfigProvider locale={zh_CN}>
        <Provider store={store}>
          <RouterPage />
        </Provider>
      </ConfigProvider>
    </div>
  );
}

export default App;
