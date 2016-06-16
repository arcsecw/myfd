import React from 'react';
import {
  Link,
} from 'react-router';
import {
    ButtonToolbar,
    Selected,
} from 'amazeui-react'
var SelectArea = React.createClass({
  render() {
     var data = [
    {value: '北京', label: '北京'},
    {value: '北京2', label: '北京'},
    {value: '北京3', label: '北京'},
    {value: '北京4', label: '北京'},
    {value: '北京5', label: '北京'},
    {value: '北京6', label: '北京'},
    {value: '北京7', label: '北京'},
    {value: '北京8', label: '北京'},
    {value: '北京9', label: '北京'},
    {value: '北京0', label: '北京'},
    {value: '北京11', label: '北京'},
    {value: '北京12', label: '北京'},
    {value: '北京21', label: '北京'},
    {value: '北京23', label: '北京'},
    {value: '北京12', label: '北京'},
    {value: '北京312', label: '北京'},
    {value: '北京42', label: '北京'},
    
    ];

    var props = {
    data: data,
    onChange: function(value) {
        console.log('当前值为：', value);
    }
    };
    return (
      <ButtonToolbar>
        {/* 设置默认值 */ ' '}
        <Selected {...props}  value="全国" placeholder = "选择手术地点"/>
        </ButtonToolbar>
    );
  }
});
export default SelectArea;