import React from 'react';
import {
    Table,
    Badge,
    Dropdown,
    Icon,
} from 'amazeui-react'
import PageContainer from '../components/PageContainer';
import auth from '../components/auth';
const UserManage = React.createClass({
    getInitialState() {
         return {
            dataSource: {re:[{"user_name":"ffff","user_role":"iii","user_mobile":"111","user_last_login":"qqq","state":"0"}],totalpage:1},
            nowpage:'1',
            totalpage:'1',
        };
    },
    query(page = this.state.nowpage){
        auth.myact(
          {to:'manager/userlist.do',
           parms:[{'key':'page','value':page}]
          },
          (res)=>{
                this.updateDataSource(res)
                });
        this.setState({nowpage:page})
    },
    querynext(){
        var nowpage = this.state.nowpage
        var totalpage = this.state.totalpage
        if (nowpage+1<=totalpage){
            nowpage+=1
            this.query(nowpage)
               
        }
        
    }
    ,querybefore(){
        
        var nowpage = this.state.nowpage
        var totalpage = this.state.totalpage
        if (nowpage-1>=1){
            nowpage -=1
            this.query(nowpage);
    } 
        
    },
    deletelist(id){
        console.log(id)
        auth.myact(
          {to:'manager/deleteuser.do',
           parms:[{'key':'id','value':id}]
          },
          (res)=>{
                console.log(res)
                });
            this.query()
    }
    ,
    disable(id){
        console.log(id)
        auth.myact(
          {to:'manager/disableuser.do',
           parms:[{'key':'id','value':id}]
          },
          (res)=>{
                console.log(res)
                });
            this.query()
    }
    ,
    componentDidMount() {
        this.query(1)
    },
    updateDataSource(data) {
        this.setState({
            dataSource: data,
            totalpage:data.totalpage,
        })
        console.log(data)
        
    },
   judege(intState){
        var state="";
        if(intState==0){
            state="禁用";
        }else if(intState==1){
            state="启用";      
        }else{
            state="";
        }
        return state;
    },
    kaifazhong (str){
        console.log(str)    
    },
    change(id){
      console.log(id)
      auth.myact({to:'/manager/changeuser.do',
               parms:[
                {'key':'id','value':id},
               {key:'name',value:this.refs.un.value}, 
               {key:'mobile',value:this.refs.um.value}, 
               {key:'role',value:this.refs.ur.value}, 
               {key:'state',value:this.refs.ps.value}, 
               ]
                },(res)=>{
                    Console.log(name)
                });
                this.query()
  }
  ,
    renderTable() {
  var data = this.state.dataSource
         console.log(data.re.length)
        return (
            <Table bordered striped hover radius responsive>
                <thead>
                    <tr>
                        <th>用户名</th>
                        <th>账户类型 </th>
                        <th>电话</th>
                        <th>上次登录时间</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.re.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.user_name}</td>
                                    <td>{item.user_role}</td>
                                    <td>{item.user_mobile}</td>
                                    <td>{this.judege(item.state) }</td>
                                    <td>{item.user_last_login}</td>
                                    <td><p><span onClick={this.deletelist.bind(this,item.id)}>删除</span>&nbsp; /<span onClick={this.disable.bind(this,item.id)}>禁用</span>&nbsp; /<span onClick={this.change.bind(this,item.id)}>修改</span></p></td>
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
            <PageContainer>
                <div>
                    {this.renderTable() }
                </div>
                <div id="u48" class="text">
                    <p onClick = {this.querybefore} ><span>上一页</span>&nbsp; &nbsp; &nbsp; &nbsp; <span onClick = {this.querynext}><span>下一页</span></span></p>
                    <div id="ubu" class="ax_html_button">

                    </div>
                </div>
            </PageContainer>

        );
    }
});
export default UserManage;