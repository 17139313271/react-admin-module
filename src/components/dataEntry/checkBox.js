import React, { Component } from "react";

import { Checkbox } from "antd";
class CheckBox extends Component {
  render() {
    const plainOptions = ["Apple", "Pear", "Orange"];
    const options = [
      { label: "Apple", value: "Apple" },
      { label: "Pear", value: "Pear" },
      { label: "Orange", value: "Orange" }
    ];
    const optionsWithDisabled = [
      { label: "Apple", value: "Apple" },
      { label: "Pear", value: "Pear" },
      { label: "Orange", value: "Orange", disabled: false }
    ];
    return (
      <div>
        <h4>基础用法</h4>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <h4>复选组用法</h4>
        <div>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={["Apple"]}
            onChange={onChangeGroup}
          />
          <br />
          <br />
          <Checkbox.Group
            options={options}
            defaultValue={["Pear"]}
            onChange={onChangeGroup}
          />
          <br />
          <br />
          <Checkbox.Group
            options={optionsWithDisabled}
            disabled
            defaultValue={["Apple"]}
            onChange={onChangeGroup}
          />
        </div>
      </div>
    );
  }
}
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
function onChangeGroup(checkedValues) {
  console.log(checkedValues);
}
export default CheckBox;
