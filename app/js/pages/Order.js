
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
import PageContainer from '../components/PageContainer';
const Order = React.createClass({
  getInitialState() {
    return {
      update_times:0
    };
  },
  update(){
    this.forceUpdate()
    console.log('update')
  },
  render() {
    return (
      <PageContainer>
      <Tabs animation='slide'  onSelect = {()=>{this.setState({update_times:this.state.update_times+1})}}>
      <Tabs.Item eventKey="1" title="未完成">
        <Order_null update_times = {this.state.update_times}/>     
      </Tabs.Item >
      <Tabs.Item eventKey="2" title="进行中" >
        <Order_ing update_times = {this.state.update_times}/>
      </Tabs.Item>
      <Tabs.Item eventKey="3" title="已完成" >
        <Order_done update_times = {this.state.update_times}/>
      </Tabs.Item>
    </Tabs>
    </PageContainer>
    );
  }
});

export default Order;
