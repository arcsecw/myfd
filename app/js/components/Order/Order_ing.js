
import React from 'react';
import {
    Table,
    Badge,
    Dropdown,
    Icon,
} from 'amazeui-react'
const Order_null = React.createClass({
  renderTable() {
    const data = [
      {
          status:'进行中',
          orderid:'B3008',
          name:'杜海涛',
          age:'20',
          area:'北京',
          date:'asdf',
          issue:'髌骨手术',
          team:'',
          more:'没有更多信息了',
          ass:'王文超'
      },
      {
          status:'进行中',
          orderid:'B3008',
          name:'杜海涛',
          age:'20',
          area:'北京',
          date:'asdf',
          issue:'髌骨手术',
          team:'',
          more:'没有更多信息了',
          ass:'王文超'
      },
      {
          status:'进行中',
          orderid:'B3008',
          name:'杜海涛',
          age:'20',
          area:'北京',
          date:'asdf',
          issue:'髌骨手术',
          team:'',
          more:'没有更多信息了',
          ass:'王文超'
      },
      {
          status:'进行中',
          orderid:'B3008',
          name:'杜海涛',
          age:'20',
          area:'北京',
          date:'asdf',
          issue:'髌骨手术',
          team:'',
          more:'没有更多信息了',
          ass:'王文超'
      },
      
    ];

    return (
      <Table striped className="am-margin-bottom" responsive>
        <thead>
        <tr>
          <th>状态</th>
          <th>订单号</th>
          <th>患者姓名</th>
          <th>年龄</th>
          <th>地区</th>
          <th>手术时间</th>
          <th>手术名称</th>
          <th>手术团队</th>
          <th>更多信息</th>
          <th>跟进助理</th>      
        </tr>
        </thead>
        <tbody>
        {
          data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.status}</td>
                <td>{item.orderid}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.area}</td>
                <td>{item.date}</td>
                <td>{item.issue}</td>
                <td>{item.team}</td>
                <td>{item.more}</td>
                <td>{item.ass}</td>
              </tr>
            );
          })
        }
        </tbody>
      </Table>
    );
  },
  render() {
    return (
       <div>
         {this.renderTable()}
         </div>
         
    );
  }
});

export default Order_null;
