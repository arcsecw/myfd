import React from 'react';
import PageContainer from '../components/PageContainer';
import {
    Grid,
    Col,
}from 'amazeui-react';
import auth from '../components/auth'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
var ManageRoot = React.createClass({
    getInitialState() {
        return {
            dataSource: {re:[{"user_name":"ffff","user_group":"iiiii","user_mobile":"111","user_mail":"qqq","state":"0"}],totalpage:1},
            nowpage:'1',
            totalpage:'1'
        };
    },
    query(page = this.state.nowpage){
        auth.myact(
          {to:'manager/accountlist.do',
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
        
    }
    ,
    deletelist(id){
        auth.myact(
          {to:'manager/deleteaccount.do',
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
          {to:'manager/disableaccount.do',
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
    handleSubmit:function(e){
    auth.myact({to:'/manager/insertaccount.do',
               parms:[
               {key:'username',value:this.refs.username.value}, 
               {key:'password',value:this.refs.password.value}, 
               {key:'realname',value:this.refs.realname.value}, 
               {key:'mobile',value:this.refs.mobile.value}, 
               {key:'mail',value:this.refs.mail.value}, 
               {key:'usergroup',value:this.refs.usergroup.value},
               ]
                },(res)=>{
                    Console.log(usergroup)
                        
                })
  },
  change(id){
      console.log(id)
      auth.myact({to:'/manager/changeaccount.do',
               parms:[
               {'key':'id','value':id},
               {key:'username',value:this.refs.un.value}, 
               {key:'usergroup',value:this.refs.ug.value}, 
               {key:'mobile',value:this.refs.um.value}, 
               {key:'mail',value:this.refs.uma.value}, 
               {key:'state',value:this.refs.ps.value}, 
               ]
                },(res)=>{
                    Console.log(username)
                });
                this.query()
},
  change1(){
       var data = this.state.dataSource
       var username=data.re[0].user_name;
       var mobile=data.re[0].user_mobile;
       var mail=data.re[0].user_mail;
       var usergroup=data.re[0].user_group;
       console.log(name);
       document.getElementById("u60_input").value=username;
    //    document.getElementById("u60_input").value=mobile;
    //    document.getElementById("u60_input").value=mail;
    //    document.getElementById("u60_input").value=usergroup;
        
    //   console.log(id)
    //   auth.myact({to:'/manager/findaccountbyid.do',
    //            parms:[
    //            {'key':'id','value':id},
    //            ]
    //             },(res)=>{
    //                 Console.log(res)
    //             });
    //             this.query()
    //   var aa = document.getElementById("textfiled").value;
    //   console.l
  },
  change2(){

  }
  ,
    render() {
            var data = this.state.dataSource
            var person = data.re[0]
            var person2 = ''
            
            if (data.re.length >=2)
            {
                var person2 = data.re[1]
            }
            //console.log(person2.state)
        return (
            <PageContainer>
                <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
                <link href="i/css/web_manage_page_root/styles.css" type="text/css" rel="stylesheet"/>
                <div id="base" className="">
                    <div id="u0" className="ax_horizontal_line">
                        <img id="u0_start" className="img " src="i/images/web_manage_page_root/transparent.gif" alt="u0_start"/>
                        <img id="u0_end" className="img " src="i/images/web_manage_page_root/transparent.gif" alt="u0_end"/>
                        <img id="u0_line" className="img " src="i/images/web_manage_page_root/u0_line.png" alt="u0_line"/>
                    </div>


                    <div id="u1" className="ax_h1">
                        <img id="u1_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                        <div id="u2" className="text">
                            <p><span>飞刀平台系统管理</span></p>
                        </div>
                    </div>


                    <div id="u3" className="ax_paragraph">
                        <img id="u3_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                        <div id="u4" className="text">
                            <p><span className="hi">您好，Admin&nbsp; &nbsp; </span><span className="quit">退出</span><span className="hi">&nbsp; &nbsp; </span></p>
                        </div>
                    </div>


                    <div id="u5" className="ax_horizontal_line">
                        <img id="u5_start" className="img " src="i/images/web_manage_page_root/transparent.gif" alt="u5_start"/>
                        <img id="u5_end" className="img " src="i/images/web_manage_page_root/transparent.gif" alt="u5_end"/>
                        <img id="u5_line" className="img " src="i/images/web_manage_page_root/u0_line.png" alt="u5_line"/>
                    </div>


                    <div id="u6" className="ax_dynamic_panel" data-label="系统管理">
                        <div id="u6_state0" className="panel_state" data-label="管理账号">
                            <div id="u6_state0_content" className="panel_state_content">


                                <div id="u7" className="ax_table">


                                    <div id="u8" className="ax_table_cell">
                                        <img id="u8_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u9" className="text">
                                            <p><span>用户名</span></p>
                                        </div>
                                    </div>


                                    <div id="u10" className="ax_table_cell">
                                        <img id="u10_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u11" className="text">
                                            <p><span>所属组</span></p>
                                        </div>
                                    </div>


                                    <div id="u12" className="ax_table_cell">
                                        <img id="u12_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u13" className="text">
                                            <p><span>电话</span></p>
                                        </div>
                                    </div>


                                    <div id="u14" className="ax_table_cell">
                                        <img id="u14_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u15" className="text">
                                            <p><span>电子邮件</span></p>
                                        </div>
                                    </div>


                                    <div id="u16" className="ax_table_cell">
                                        <img id="u16_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u17" className="text">
                                            <p><span>状态</span></p>
                                        </div>
                                    </div>


                                    <div id="u18" className="ax_table_cell">
                                        <img id="u18_img" className="img " src="i/images/web_manage_page_root/u18.png"/>

                                        <div id="u19" className="text">
                                            <p><span>操作</span></p>
                                        </div>
                                    </div>


                                    <div id="u20" className="ax_table_cell">
                                        <img id="u20_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u21" className="text">
                                            <p><span>{person.user_name}</span></p>
                                        </div>
                                    </div>


                                    <div id="u22" className="ax_table_cell">
                                        <img id="u22_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u23" className="text">
                                            <p><span>{person.user_group}</span></p>
                                        </div>
                                    </div>


                                    <div id="u24" className="ax_table_cell">
                                        <img id="u24_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u25" className="text">
                                            <p><span>{person.user_mobile}</span></p>
                                        </div>
                                    </div>


                                    <div id="u26" className="ax_table_cell">
                                        <img id="u26_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u27" className="text">
                                            <p><span>{person.user_mail}</span></p>
                                        </div>
                                    </div>


                                    <div id="u28" className="ax_table_cell">
                                        <img id="u28_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u29" className="text">
                                            <p><span>{this.judege(person.state)}</span></p>
                                        </div>
                                    </div>


                                    <div id="u30" className="ax_table_cell">
                                        <img id="u30_img" className="img " src="i/images/web_manage_page_root/u30.png"/>

                                        <div id="u31" className="text">
                                            <p><span>{person.user_name!=undefined? <p><a onClick={this.deletelist.bind(this,person.user_id)}>删除</a>/<a onClick={this.disable.bind(this,person.user_id)}>禁用</a>/<a onClick={this.change1}>修改</a></p>:''}</span></p>
                                        </div>
                                    </div>


                                    
                                    <div id="u32" className="ax_table_cell">
                                        <img id="u32_img" className="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u33" className="text">
                                            <p><span>{person2.user_name}</span></p>
                                        </div>
                                    </div>



                                    <div id="u34" className="ax_table_cell">
                                        <img id="u34_img" className="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u35" className="text">
                                            <p><span>{person2.user_group}</span></p>
                                        </div>
                                    </div>


                                    <div id="u36" className="ax_table_cell">
                                        <img id="u36_img" className="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u37" className="text">
                                            <p><span>{person2.user_mobile}</span></p>
                                        </div>
                                    </div>


                                    <div id="u38" className="ax_table_cell">
                                        <img id="u36_img" className="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u37" className="text">
                                            <p><span>{person2.user_mail}</span></p>
                                        </div>
                                    </div>


                                    <div id="u40" className="ax_table_cell">
                                        <img id="u40_img" className="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u41" className="text">
                                            <p><span>{this.judege(person2.state)}</span></p>
                                        </div>
                                    </div>


                                    <div id="u42" className="ax_table_cell">
                                        <img id="u42_img" className="img " src="i/images/web_manage_page_root/u42.png"/>

                                        <div id="u43" className="text">
                                            <p><span>{person2.user_name!=undefined? <p><a onClick={this.deletelist.bind(this,person2.user_id)}>删除</a>/<a onClick={this.disable.bind(this,person2.user_id)}>禁用</a>/<a onClick={this.change.bind(this,person2.user_id)}>修改</a></p>:''}</span></p>
                                        </div>
                                    </div>
                                </div>


                                <div id="u44" className="ax_horizontal_line">
                                    <img id="u44_start" className="img " src="i/images/web_manage_page_root/transparent.gif" alt="u44_start"/>
                                    <img id="u44_end" className="img " src="i/images/web_manage_page_root/transparent.gif" alt="u44_end"/>
                                    <img id="u44_line" className="img " src="i/images/web_manage_page_root/u0_line.png" alt="u44_line"/>
                                </div>


                                <div id="u45" className="ax_h4">
                                    <img id="u45_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u46" className="text">
                                        <p><span>所有成员</span></p>
                                    </div>
                                </div>


                                <div id="u47" className="ax_paragraph">
                                    <img id="u47_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u48" className="text">
                                        <p onClick = {this.querybefore} ><span>上一页</span></p>
                                        <p onClick = {this.querynext}><span>下一页</span></p>
                                    </div>
                                </div>


                                <div id="u49" className="ax_h4">
                                    <img id="u49_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u50" className="text">
                                        <p><span>增加成员</span></p>
                                    </div>
                                </div>


                                <div id="u51" className="ax_paragraph">
                                    <img id="u51_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u52" className="text">
                                        <p><span>账号</span></p>
                                    </div>
                                </div>


                                <div id="u53" className="ax_paragraph">
                                    <img id="u53_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u54" className="text">
                                        <p><span>密码</span></p>
                                    </div>
                                </div>


                                <div id="u55" className="ax_paragraph">
                                    <img id="u55_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u56" className="text">
                                        <p><span>确认密码</span></p>
                                    </div>
                                </div>


                                <div id="u57" className="ax_droplist">
                                    <select id="u57_input" ref="usergroup">
                                        <option selected value="手术助理-骨科">手术助理-骨科</option>
                                        <option value="客服">客服</option>
                                    </select>
                                </div>


                                <div id="u58" className="ax_paragraph">
                                    <img id="u58_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u59" className="text">
                                        <p><span>所属组</span></p>
                                    </div>
                                </div>


                                <div id="u60" className="ax_text_field">
                                    <input id="u60_input" ref="username" type="text"  />
                                </div>


                                <div id="u61" className="ax_text_field">
                                    <input id="u61_input" ref="password" type="password"  />
                                </div>


                                <div id="u62" className="ax_text_field">
                                    <input id="u62_input" ref="password" type="password"  />
                                </div>


                                <div id="u63" className="ax_paragraph">
                                    <img id="u63_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u64" className="text">
                                        <p><span>姓名</span></p>
                                    </div>
                                </div>


                                <div id="u65" className="ax_paragraph">
                                    <img id="u65_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u66" className="text">
                                        <p><span>电话</span></p>
                                    </div>
                                </div>


                                <div id="u67" className="ax_paragraph">
                                    <img id="u67_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u68" className="text">
                                        <p><span>电子邮件</span></p>
                                    </div>
                                </div>


                                <div id="u69" className="ax_text_field">
                                    <input id="u69_input" ref="realname" type="text"  />
                                </div>


                                <div id="u70" className="ax_text_field">
                                    <input id="u70_input" ref="mobile" type="text"  />
                                </div>


                                <div id="u71" className="ax_text_field">
                                    <input id="u71_input" ref="mail" type="text"  />
                                </div>


                                <div id="u72" className="ax_html_button">
                                    <p onClick={this.change}><input id="u72_input" type="submit" value="修改"/></p>
                                    <p id="u209" class="ax_html_button">
                                    <input />
                                    </p>
                                </div>


                                <div id="u73" className="ax_html_button">
                                    <p onClick={this.handleSubmit}><input id="u73_input" type="submit" value="提交"/></p>
                                    <p id="u210" class="ax_html_button">
                                    <input />
                                </p>
                                </div>
                            </div>
                        </div>
                        <div id="u6_state1" className="panel_state" data-label="账户管理">
                            <div id="u6_state1_content" className="panel_state_content">


                                <div id="u74" className="ax_table">


                                    <div id="u75" className="ax_table_cell">
                                        <img id="u75_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u76" className="text">
                                            <p><span>用户名</span></p>
                                        </div>
                                    </div>


                                    <div id="u77" className="ax_table_cell">
                                        <img id="u77_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u78" className="text">
                                            <p><span>账户类型</span></p>
                                        </div>
                                    </div>


                                    <div id="u79" className="ax_table_cell">
                                        <img id="u79_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u80" className="text">
                                            <p><span>电话</span></p>
                                        </div>
                                    </div>


                                    <div id="u81" className="ax_table_cell">
                                        <img id="u81_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u82" className="text">
                                            <p><span>上次登录时间</span></p>
                                        </div>
                                    </div>


                                    <div id="u83" className="ax_table_cell">
                                        <img id="u83_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u84" className="text">
                                            <p><span>状态</span></p>
                                        </div>
                                    </div>


                                    <div id="u85" className="ax_table_cell">
                                        <img id="u85_img" className="img " src="i/images/web_manage_page_root/u18.png"/>

                                        <div id="u86" className="text">
                                            <p><span>操作</span></p>
                                        </div>
                                    </div>


                                    <div id="u87" className="ax_table_cell">
                                        <img id="u87_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u88" className="text">
                                            <p><span>海涛</span></p>
                                        </div>
                                    </div>


                                    <div id="u89" className="ax_table_cell">
                                        <img id="u89_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u90" className="text">
                                            <p><span>患者</span></p>
                                        </div>
                                    </div>


                                    <div id="u91" className="ax_table_cell">
                                        <img id="u91_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u92" className="text">
                                            <p><span>13912345678</span></p>
                                        </div>
                                    </div>


                                    <div id="u93" className="ax_table_cell">
                                        <img id="u93_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u94" className="text">
                                            <p><span>2016-3-8 23：15：00</span></p>
                                        </div>
                                    </div>


                                    <div id="u95" className="ax_table_cell">
                                        <img id="u95_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u96" className="text">
                                            <p><span>启用</span></p>
                                        </div>
                                    </div>


                                    <div id="u97" className="ax_table_cell">
                                        <img id="u97_img" className="img " src="i/images/web_manage_page_root/u30.png"/>

                                        <div id="u98" className="text">
                                            <p><span>删除/禁用/修改</span></p>
                                        </div>
                                    </div>


                                    <div id="u99" className="ax_table_cell">
                                        <img id="u99_img" className="img " src="i/images/web_manage_page_root/u99.png"/>

                                        <div id="u100" className="text">
                                            <p><span>张无忌</span></p>
                                        </div>
                                    </div>


                                    <div id="u101" className="ax_table_cell">
                                        <img id="u101_img" className="img " src="i/images/web_manage_page_root/u99.png"/>

                                        <div id="u102" className="text">
                                            <p><span>患者</span></p>
                                        </div>
                                    </div>


                                    <div id="u103" className="ax_table_cell">
                                        <img id="u103_img" className="img " src="i/images/web_manage_page_root/u99.png"/>

                                        <div id="u104" className="text">
                                            <p><span>18812345678</span></p>
                                        </div>
                                    </div>


                                    <div id="u105" className="ax_table_cell">
                                        <img id="u105_img" className="img " src="i/images/web_manage_page_root/u99.png"/>

                                        <div id="u106" className="text">
                                            <p><span>2016-3-1 12：30：15</span></p>
                                        </div>
                                    </div>


                                    <div id="u107" className="ax_table_cell">
                                        <img id="u107_img" className="img " src="i/images/web_manage_page_root/u99.png"/>

                                        <div id="u108" className="text">
                                            <p><span>启用</span></p>
                                        </div>
                                    </div>


                                    <div id="u109" className="ax_table_cell">
                                        <img id="u109_img" className="img " src="i/images/web_manage_page_root/u109.png"/>

                                        <div id="u110" className="text">
                                            <p><span>删除/禁用/修改</span></p>
                                        </div>
                                    </div>
                                </div>


                                <div id="u111" className="ax_h4">
                                    <img id="u111_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u112" className="text">
                                        <p><span>所有</span><span>账户</span></p>
                                    </div>
                                </div>


                                <div id="u113" className="ax_paragraph">
                                    <img id="u113_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u114" className="text">
                                        <p><span onClick = {this.querybefore}> 上一页 </span></p><p onClick = {this.querynext}><span> 下一页</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="u6_state2" className="panel_state" data-label="价格管理">
                            <div id="u6_state2_content" className="panel_state_content">


                                <div id="u115" className="ax_table">


                                    <div id="u116" className="ax_table_cell">
                                        <img id="u116_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u117" className="text">
                                            <p><span>编号</span></p>
                                        </div>
                                    </div>


                                    <div id="u118" className="ax_table_cell">
                                        <img id="u118_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u119" className="text">
                                            <p><span>简述</span></p>
                                        </div>
                                    </div>


                                    <div id="u120" className="ax_table_cell">
                                        <img id="u120_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u121" className="text">
                                            <p><span>详细描述</span></p>
                                        </div>
                                    </div>


                                    <div id="u122" className="ax_table_cell">
                                        <img id="u122_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u123" className="text">
                                            <p><span>价格</span></p>
                                        </div>
                                    </div>


                                    <div id="u124" className="ax_table_cell">
                                        <img id="u124_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u125" className="text">
                                            <p><span>状态</span></p>
                                        </div>
                                    </div>


                                    <div id="u126" className="ax_table_cell">
                                        <img id="u126_img" className="img " src="i/images/web_manage_page_root/u18.png"/>

                                        <div id="u127" className="text">
                                            <p><span>操作</span></p>
                                        </div>
                                    </div>


                                    <div id="u128" className="ax_table_cell">
                                        <img id="u128_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u129" className="text">
                                            <p><span>1</span></p>
                                        </div>
                                    </div>


                                    <div id="u130" className="ax_table_cell">
                                        <img id="u130_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u131" className="text">
                                            <p><span>基础服务费</span></p>
                                        </div>
                                    </div>


                                    <div id="u132" className="ax_table_cell">
                                        <img id="u132_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u133" className="text">
                                            <p><span>基础服务费</span></p>
                                        </div>
                                    </div>


                                    <div id="u134" className="ax_table_cell">
                                        <img id="u134_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u135" className="text">
                                            <p><span>6</span><span>00</span></p>
                                        </div>
                                    </div>


                                    <div id="u136" className="ax_table_cell">
                                        <img id="u136_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u137" className="text">
                                            <p><span>启用</span></p>
                                        </div>
                                    </div>


                                    <div id="u138" className="ax_table_cell">
                                        <img id="u138_img" className="img " src="i/images/web_manage_page_root/u30.png"/>

                                        <div id="u139" className="text">
                                            <p><span>删除/禁用/修改</span></p>
                                        </div>
                                    </div>


                                    <div id="u140" className="ax_table_cell">
                                        <img id="u140_img" className="img " src="i/images/web_manage_page_root/u99.png"/>

                                        <div id="u141" className="text">
                                            <p><span>2</span></p>
                                        </div>
                                    </div>


                                    <div id="u142" className="ax_table_cell">
                                        <img id="u142_img" className="img " src="i/images/web_manage_page_root/u99.png"/>

                                        <div id="u143" className="text">
                                            <p><span>康复礼包</span></p>
                                        </div>
                                    </div>


                                    <div id="u144" className="ax_table_cell">
                                        <img id="u144_img" className="img " src="i/images/web_manage_page_root/u99.png"/>

                                        <div id="u145" className="text">
                                            <p><span>康复床位升级，康复营养餐X1</span></p>
                                        </div>
                                    </div>


                                    <div id="u146" className="ax_table_cell">
                                        <img id="u146_img" className="img " src="i/images/web_manage_page_root/u99.png"/>

                                        <div id="u147" className="text">
                                            <p><span>1</span><span>500</span></p>
                                        </div>
                                    </div>


                                    <div id="u148" className="ax_table_cell">
                                        <img id="u148_img" className="img " src="i/images/web_manage_page_root/u99.png"/>

                                        <div id="u149" className="text">
                                            <p><span>启用</span></p>
                                        </div>
                                    </div>


                                    <div id="u150" className="ax_table_cell">
                                        <img id="u150_img" className="img " src="i/images/web_manage_page_root/u109.png"/>

                                        <div id="u151" className="text">
                                            <p><span>删除/禁用/修改</span></p>
                                        </div>
                                    </div>
                                </div>


                                <div id="u152" className="ax_h4">
                                    <img id="u152_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u153" className="text">
                                        <p><span>所有费用项目</span></p>
                                    </div>
                                </div>


                                <div id="u154" className="ax_horizontal_line">
                                    <img id="u154_start" className="img " src="i/images/web_manage_page_root/transparent.gif" alt="u154_start"/>
                                    <img id="u154_end" className="img " src="i/images/web_manage_page_root/transparent.gif" alt="u154_end"/>
                                    <img id="u154_line" className="img " src="i/images/web_manage_page_root/u0_line.png" alt="u154_line"/>
                                </div>


                                <div id="u155" className="ax_h4">
                                    <img id="u155_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u156" className="text">
                                        <p><span>增加</span><span>费用项</span></p>
                                    </div>
                                </div>


                                <div id="u157" className="ax_paragraph">
                                    <img id="u157_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u158" className="text">
                                        <p><span>简述</span></p>
                                    </div>
                                </div>


                                <div id="u159" className="ax_paragraph">
                                    <img id="u159_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u160" className="text">
                                        <p><span>详细描述</span></p>
                                    </div>
                                </div>


                                <div id="u161" className="ax_paragraph">
                                    <img id="u161_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u162" className="text">
                                        <p><span>价格</span></p>
                                    </div>
                                </div>


                                <div id="u163" className="ax_droplist">
                                    <select id="u163_input">
                                        <option value="启用">启用</option>
                                        <option value="禁用">禁用</option>
                                    </select>
                                </div>


                                <div id="u164" className="ax_paragraph">
                                    <img id="u164_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u165" className="text">
                                        <p><span>状态</span></p>
                                    </div>
                                </div>


                                <div id="u166" className="ax_text_field">
                                    <input id="u166_input" type="text"  />
                                </div>


                                <div id="u167" className="ax_text_field">
                                    <input id="u167_input" type="text"  />
                                </div>


                                <div id="u168" className="ax_text_field">
                                    <input id="u168_input" type="text"  />
                                </div>


                                <div id="u169" className="ax_html_button">
                                    <input id="u169_input" type="submit" value="修改"/>
                                </div>>


                                <div id="u170" className="ax_html_button">
                                    <input id="u170_input" type="submit" value="提交"/>
                                </div>
                            </div>
                        </div>
                        <div id="u6_state3" className="panel_state" data-label="网站配置管理">
                            <div id="u6_state3_content" className="panel_state_content">


                                <div id="u171" className="ax_text_field">
                                    <input id="u171_input" type="text" value="4"/>
                                </div>


                                <div id="u172" className="ax_paragraph">
                                    <img id="u172_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u173" className="text">
                                        <p><span>首页医生</span><span>显示数</span></p>
                                    </div>
                                </div>


                                <div id="u174" className="ax_paragraph">
                                    <img id="u174_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u175" className="text">
                                        <p><span>首页</span><span>机构显示数</span></p>
                                    </div>
                                </div>


                                <div id="u176" className="ax_text_field">
                                    <input id="u176_input" type="text" value="4"/>
                                </div>


                                <div id="u177" className="ax_paragraph">
                                    <img id="u177_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u178" className="text">
                                        <p><span>首页广告地址</span></p>
                                    </div>
                                </div>


                                <div id="u179" className="ax_text_field">
                                    <input id="u179_input" type="text"  />
                                </div>


                                <div id="u180" className="ax_paragraph">
                                    <img id="u180_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u181" className="text">
                                        <p><span>显示首页滚动条</span></p>
                                    </div>
                                </div>


                                <div id="u182" className="ax_droplist">
                                    <select id="u182_input">
                                        <option selected value="是">是</option>
                                        <option value="否">否</option>
                                    </select>
                                </div>


                                <div id="u183" className="ax_paragraph">
                                    <img id="u183_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u184" className="text">
                                        <p><span>医生详表每页数</span></p>
                                    </div>
                                </div>


                                <div id="u185" className="ax_text_field">
                                    <input id="u185_input" type="text" value="10"/>
                                </div>


                                <div id="u186" className="ax_paragraph">
                                    <img id="u186_img" className="img " src="i/images/web_manage_page_root/transparent.gif"/>

                                    <div id="u187" className="text">
                                        <p><span>机构详页没页数</span></p>
                                    </div>
                                </div>


                                <div id="u188" className="ax_text_field">
                                    <input id="u188_input" type="text" value="10"/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="u189" className="ax_menu">
                        <img id="u189_menu" className="img " src="i/images/web_manage_page_root/u189_menu.png" alt="u189_menu"/>


                        <div id="u190" className="ax_table">


                            <div id="u191" className="ax_table_cell">
                                <img id="u191_img" className="img " src="i/images/web_manage_page_root/u191.png"/>

                                <div id="u192" className="text">
                                    <p><span>仪表盘</span></p>
                                </div>
                            </div>


                            <div id="u193" className="ax_table_cell">
                                <img id="u193_img" className="img " src="i/images/web_manage_page_root/u193.png"/>

                                <div id="u194" className="text">
                                    <p><span>管理账号</span></p>
                                </div>
                            </div>


                            <div id="u195" className="ax_table_cell">
                                <img id="u195_img" className="img " src="i/images/web_manage_page_root/u191.png"/>

                                <div id="u196" className="text">
                                    <p><Link to = '/user_manage'><span onClick = {() => { this.setState({ 'now': '用户管理' }) } }>用户管理</span></Link></p>
                                </div>
                            </div>


                            <div id="u197" className="ax_table_cell">
                                <img id="u197_img" className="img " src="i/images/web_manage_page_root/u191.png"/>

                                <div id="u198" className="text">
                                    <p><Link to = '/price_manage'><span onClick = {()=>{this.setState({'now':'价格管理'})}}>价格管理</span></Link></p>
                                </div>
                            </div>


                            <div id="u199" className="ax_table_cell">
                                <img id="u199_img" className="img " src="i/images/web_manage_page_root/u199.png"/>

                                <div id="u200" className="text">
                                    <p><span>网站配置</span></p>
                                </div>
                            </div>
                        </div>


                        <div id="u201" className="ax_menu sub_menu">
                            <img id="u201_menu" className="img " src="i/images/web_manage_page_root/u201_menu.png" alt="u201_menu"/>


                            <div id="u202" className="ax_table">


                                <div id="u203" className="ax_table_cell">
                                    <img id="u203_img" className="img " src="i/images/web_manage_page_root/u203.png"/>

                                    <div id="u204" className="text">
                                        <p><span>求医用户</span></p>
                                    </div>
                                </div>


                                <div id="u205" className="ax_table_cell">
                                    <img id="u205_img" className="img " src="i/images/web_manage_page_root/u203.png"/>

                                    <div id="u206" className="text">
                                        <p><span>医生</span></p>
                                    </div>
                                </div>


                                <div id="u207" className="ax_table_cell">
                                    <img id="u207_img" className="img " src="i/images/web_manage_page_root/u207.png"/>

                                    <div id="u208" className="text">
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
export default ManageRoot;