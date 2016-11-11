
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
  re_get_info(){
    auth.myact(
          {to:'orderAdmin.do',
           parms:[{'key':'state','value':'0'}]
          },
          (res)=>{
                this.updateDataSource(res)
                });
  },
  componentWillReceiveProps(){
    this.re_get_info()
  },
  componentWillMount() {
    
    this.re_get_info()
  },
  fllow_up(orderNumber){
    auth.get('followUp.do',{'orderNumber':orderNumber},(re)=>{
      this.re_get_info()
    })
  },
  updateDataSource(data) {
    this.setState({
      dataSource: data,
    })
  },
  renderTable() {
    
    const { dataSource } = this.state;
    return (
      <Table bordered striped responsive>
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
          <th>手机号</th>      
        </tr>
        </thead>
        <tbody>
        {
          dataSource.map((item, index) => {
            return (
              <tr key={index}>

                <td>{this.formatstsate(item.orderState)}</td>//需要转换一下 0 未完成 1 进行中 2 已完成
                <td>{item.orderNumber}</td>
                <td>{item.patientRealname}</td>
                <td>{item.patinetAge}</td>
                <td>{item.patientProvince}</td>
                <td>{item.orderReserveTime}</td>
                <td>{item.patientDiagnose}</td>
                <td>{item.systemals}</td>
                <td>{item.adviceteam}</td>
                <td>{item.proferdoctor}</td>
                <td><span onClick = {()=>{this.fllow_up(item.orderNumber)}}>我要跟进</span></td>
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
