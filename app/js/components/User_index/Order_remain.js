
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
    var usernName=auth.getUsername();
    console.log(usernName)
    auth.myact(
    
          {to:'queryOrder.do',
              parms:[{'key':'year','value':'2016'},
              {'key':'pay','value':'0'},
              {'key':'username',value:usernName}              
              ]
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
   dataOption(id){
    var year=id.refs.year.value;
      var usernName = auth.getUsername();
    console.log("好的")
    console.log(year);
     auth.myact(     
      {
        to: 'queryOrder.do',
        parms: [{ 'key': 'year', 'value': year },
          { 'key': 'pay', 'value': '1' },
          { 'key': 'username', value: usernName }
        ]
      },
      (res) => {
        this.updateDataSource(res)
      });
  },
  renderTable() {
    const { dataSource } = this.state;
    console.log(dataSource)
    return (
      <Table bordered striped hover radius responsive>
        <thead>
         <tr>
          <th>
          <select ref="year" onChange={this.dataOption.bind(this,this)}>
          <option value="2016">2016年</option>
          <option value="2015">2015年</option>
          <option value="2014">2014年</option>        
          </select>
          </th>
          <th>订单详情</th>
          <th>患者姓名</th>
          <th>金额</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        {
          dataSource.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.orderDate}</td>
                <td>{item.patientProvince}{item.patientDiagnose}</td>
                <td>{item.patientRealname}</td>
                <td>{item.orderPrice}</td>
                <td>{item.orderPay}</td>
                <td>{item.orderReserveTime}</td>
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
