
import React from 'react';
import {
    Table,
    Tabs,
    Item,
} from 'amazeui-react'
import {
  Order_done,
  Order_ing,
  Order_null,
} from '../components/Order'
const Order = React.createClass({
  
  render() {
    return (
      <Tabs animation='slide'>
      <Tabs.Item eventKey="1" title="未完成">
        <Order_null/>     
      </Tabs.Item>
      <Tabs.Item eventKey="2" title="进行中">
        <Order_ing/>
      </Tabs.Item>
      <Tabs.Item eventKey="3" title="已完成">
        <Order_done/>
      </Tabs.Item>
    </Tabs>
         
    );
  }
});

export default Order;
