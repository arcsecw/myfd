import React from 'react'
import PageContainer from '../components/PageContainer';
import {
    Table,
    Tabs,
    Item,
} from 'amazeui-react'
import auth from '../components/auth';
import About from './About';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
import {
    Grid,
    Col,
    Form,
    Input,
    Thumbnail,
    Image,
    Icon,
    Button,
    Panel,
} from 'amazeui-react';
var User_manage = React.createClass({
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
  
    render() {
        return (
            <PageContainer>
                <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
                <link href="i/css/web_manage_page_root/style2.css" type="text/css" rel="stylesheet"/>
                <div id="base" class="">
                    <div id="u0" class="ax_horizontal_line">
                        <img id="u0_start" class="img " src="i/resources/images/transparent.gif" alt="u0_start"/>
                        <img id="u0_end" class="img " src="i/resources/images/transparent.gif" alt="u0_end"/>
                        <img id="u0_line" class="img " src="i/images/web_manage_page_root/u0_line.png" alt="u0_line"/>
                    </div>

                    <div id="u1" class="ax_h1">
                        <img id="u1_img" class="img " src="i/resources/images/transparent.gif"/>

                        <div id="u2" class="text">
                            <strong><span>谷雨医生平台系统管理</span></strong>
                        </div>
                    </div>


                    <div id="u3" class="ax_paragraph">
                        <img id="u3_img" class="img " src="i/resources/images/transparent.gif"/>

                        <div id="u4" class="text">
                            <p><span className="u209"></span><span className="u209">&nbsp; &nbsp; </span></p>
                        </div>
                    </div>


                    <div id="u5" class="ax_horizontal_line">
                        <img id="u5_start" class="img " src="i/resources/images/transparent.gif" alt="u5_start"/>
                        <img id="u5_end" class="img " src="i/resources/images/transparent.gif" alt="u5_end"/>
                        <img id="u5_line" class="img " src="i/images/web_manage_page_root/u0_line.png" alt="u5_line"/>
                    </div>


                    <div id="u6" class="ax_dynamic_panel" data-label="系统管理">
                        <div id="u6_state0" class="panel_state" data-label="管理账号">
                            <div id="u6_state0_content" class="panel_state_content">

                                <div id="u7" class="ax_table">
                                     <About/>                      
                                </div>
                        <div id='butt'>
                        <p>&nbsp;""</p>
                        </div>
                                <div id="u45" class="ax_h4">
                                    <img id="u45_img" class="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u46" class="text">
                                        <strong><span>所有账户</span></strong>
                                    </div>
                                </div>


                                <div id="u47" class="ax_paragraph">
                                    <img id="u47_img" class="img " src="i/resources/images/transparent.gif"/>

                                  
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="u189" class="ax_menu">
                        <img id="u189_menu" class="img " src="i/images/web_manage_page_root/u189_menu.png" alt="u189_menu"/>


                        <div id="u190" class="ax_table">


                            <div id="u191" class="ax_table_cell">
                                <img id="u191_img" class="img " src="i/images/web_manage_page_root/u191.png"/>

                                <div id="u192" class="text">
                                    <p><span>仪表盘</span></p>
                                </div>
                            </div>


                            <div id="u193" class="ax_table_cell">
                                <img id="u193_img" class="img " src='i/images/web_manage_page_root/u191.png'/>

                                <div id="u194" class="text" >
                                    <p><Link to = '/manageRoot'><span onClick = {()=>{this.setState({'now':'管理账号'})}}>管理账号</span></Link></p>
                                </div>
                            </div>


                            <div id="u195" class="ax_table_cell">
                                <img id="u195_img" class="img " src="i/images/web_manage_page_root/u191_mouseOver.png"/>

                                <div id="u196" class="text" style = {{color:'white'}} onClick = {()=>{this.setState({'now':'用户管理'})}}>
                                    <p><span>用户管理</span></p>
                                </div>
                            </div>


                            <div id="u197" class="ax_table_cell">
                                <img id="u197_img" class="img " src='i/images/web_manage_page_root/u191.png'/>

                                <div id="u198" class="text">
                                    <p><Link to = '/price_manage'><span onClick = {()=>{this.setState({'now':'价格管理'})}}>价格管理</span></Link></p>
                                </div>
                                </div>


                                <div id="u199" class="ax_table_cell">
                                    <img id="u199_img" class="img " src="i/images/web_manage_page_root/u199.png"/>

                                    <div id="u200" class="text">
                                        <p><span>网站配置</span></p>
                                    </div>
                                </div>
                            </div>


                            <div id="u201" class="ax_menu sub_menu">
                                <img id="u201_menu" class="img " src="i/images/web_manage_page_root/u201_menu.png" alt="u201_menu"/>


                                <div id="u202" class="ax_table">


                                    <div id="u203" class="ax_table_cell">
                                        <img id="u203_img" class="img " src="i/images/web_manage_page_root/u203.png"/>

                                        <div id="u204" class="text">
                                            <p><span>求医用户</span></p>
                                        </div>
                                    </div>


                                    <div id="u205" class="ax_table_cell">
                                        <img id="u205_img" class="img " src="i/images/web_manage_page_root/u203.png"/>

                                        <div id="u206" class="text">
                                            <p><span>医生</span></p>
                                        </div>
                                    </div>


                                    <div id="u207" class="ax_table_cell">
                                        <img id="u207_img" class="img " src="i/images/web_manage_page_root/u207.png"/>

                                        <div id="u208" class="text">
                                            <p><span>机构</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </PageContainer>

                );
                }
});
export default User_manage;
