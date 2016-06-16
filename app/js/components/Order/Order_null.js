
import React from 'react';
import {
    Table,
    Badge,
    Dropdown,
    Icon,
} from 'amazeui-react'
const Order_null = React.createClass({
  getInitialState() {
    return {
      dataSource: [],
      
    };
  },

  componentWillMount() {
    if (!window.fetch) {
      return console.error('fetch API is not supported!');
    }

    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }

    fetch('http://211.82.97.30:8080/myfd/orderAdmin.do')
      .then(checkStatus)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.updateDataSource(data);
      })
      .catch(error => {
        console.log('Request failed: ', error)
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
        </tr>
        </thead>
        <tbody>
        {
          dataSource.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.status}</td>
                <td>{item.orderNumber}</td>
                <td>{item.patientRealname}</td>
                <td>{item.patinetAge}</td>
                <td>{item.patientProvince}</td>
                <td>{item.orderReserveTime}</td>
                <td>{item.patientDiagnose}</td>
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

export default Order_null;
