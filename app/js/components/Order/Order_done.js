
import React from 'react';
import {
    Table,
    Badge,
    Dropdown,
    Icon,
} from 'amazeui-react'
import auth from '../auth'

const Order_done = React.createClass({
  getInitialState() {
    return {
      dataSource: 
      [
      ]
    };
  },

  componentWillMount() {
    
    auth.myact(
          {to:'orderAdmin.do',
              parms:[{'key':'state','value':'2'}]
          },
          (res)=>{
                this.updateDataSource(res)
                });
  },

  updateDataSource(data) {
    this.setState({
      dataSource: data,
    })
  },
  renderTable() {
    const { dataSource } = this.state;
    console.log(dataSource)
    return (
      <Table bordered striped hover radius responsive>
        <thead>
        <tr>
          <th>状态</th>
          <th>订单号</th>
          <th>患者姓名</th>
          <th>年龄</th>
          <th>地区</th>
          <th>预约时间</th>
          <th>病症</th>
          <th>系统分析病症</th>
          <th>系统推荐团队</th>
          <th>偏好专家</th>
          <th>跟进助理</th>      
        </tr>
        </thead>
        <tbody>
        {
          dataSource.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.status}</td>
                <td>{item.orderid}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.area}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{item.issue}</td>
                <td>{item.systemals}</td>
                <td>{item.adviceteam}</td>
                <td>{item.proferdoctor}</td>
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

export default Order_done;
