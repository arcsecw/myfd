
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
    
    this.regetinfo()
  },
  regetinfo(){
    auth.myact(
          {to:'orderAdmin.do',
              parms:[{'key':'state','value':'1'}]
          },
          (res)=>{
                this.updateDataSource(res)
                });
  },
cancel_follow_up(orderNumber){
  auth.get('cancelFollowUp.do',{'orderNumber':orderNumber},(re)=>{
    this.regetinfo()
  })

},
finish_follow_up(orderNumber){
  auth.get('finishFollowUp.do',{'orderNumber':orderNumber},(re)=>{
    this.regetinfo()
  })

},
componentWillReceiveProps(){
    this.regetinfo()
  },
  updateDataSource(data) {
    this.setState({
      dataSource: data,
    })
  },
  renderTable() {
    
    const { dataSource } = this.state;
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
          <th>手机号</th>      
      
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
                <td><span onClick = {()=>{this.cancel_follow_up(item.orderNumber)}}>取消</span><span onClick = {()=>{
                  this.finish_follow_up(item.orderNumber)
                }}>完成</span></td>
                <td>{item.mobile}</td>

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
