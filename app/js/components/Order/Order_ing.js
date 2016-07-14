
import React from 'react';
import {
    Table,
    Badge,
    Dropdown,
    Icon,
} from 'amazeui-react'
import auth from '../auth'

const Order_null = React.createClass({
  getInitialState() {
    return {
      dataSource: 
      [
      
      
    ]
    };
  },
formatstsate(id){
    if (id == 0){
      return '未完成'
    }
    if (id == 1){
      return '进行中'
    }
    if (id == 2){
      return '已完成'
    }
  },
  componentWillMount() {
    
    auth.myact(
          {to:'orderAdmin.do',
              parms:[{'key':'state','value':'1'}]
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
          dataSource.map((item, index) => {
            return (
              <tr key={index}>
                <td>{this.formatstsate(item.orderState)}</td> //也需要转化
                <td>{item.orderNumber}</td>
                <td>{item.patientRealname}</td>
                <td>{item.patinetAge}</td>
                <td>{item.patientProvince}</td>
                <td>{item.orderReserveTime}</td>
                <td>{item.patientDiagnose}</td>
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
