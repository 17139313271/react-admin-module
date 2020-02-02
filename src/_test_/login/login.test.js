import React from "react";
import renderer from "react-test-renderer";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "../../view/login/login";
import request from "../../server/login/login";

configure({ adapter: new Adapter() });

let taskList;

describe("loginModule", () => {
  /*快照测试*/
  it("snapShootTest", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  /*异步接口测试*/
  it(" asynchronization", async () => {
    expect.assertions(1); //测试接口是否成功及参数是否正确，需要返回的断言数量
    taskList = await request.loginFun(); //请求数据
    expect(taskList.constructor).toBe(Object); //判断数据类型为数组
  });
  /*dom 操作测试*/
  // test('dom操作', () => {
  //   const wrapper =  mount(<HomePage taskList={taskList}/>)        //将获取的数据导入组件
  //   expect(wrapper.find('.item').length).toBe(taskList.length);                 //判断渲染的节点是否正确
  //   expect(wrapper.find('.item').at(0).find('p').at(0).text()).toBe(taskList[0].name)            //判断渲染的节点内容是否正确
  //   expect(Number(wrapper.find('.item').at(0).find('p').at(1).text())).toBe(taskList[0].age)            //判断渲染的节点内容是否正确
  //   expect(wrapper.find('.clicks-0').length).toEqual(1);
  //   wrapper.find('a').simulate('click');                                //模拟点击事件，可传参数
  //   expect(wrapper.find('.clicks-1').length).toEqual(1);
  // })
});
