import React from 'react'
import PageContainer from '../components/PageContainer';
import {
} from 'amazeui-react';
import auth from '../components/auth';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
var Account_manage = React.createClass({
     getInitialState() {
        return {
            dataSource: [
                    {
                    agencydoctorid: "无",
                    agencyprovince: "无",
                    agencydistrict: "无",
                    agencyname: "无",
                    agencybed: "无",
                    agencydiscount: "无",
                    agencyhot: "无",
                    agencyyytime: "无",
                    agencyclass: "无"
                    },
                     {
                    agencydoctorid: "无",
                    agencyprovince: "无",
                    agencydistrict: "无",
                    agencyname: "无",
                    agencybed: "无",
                    agencydiscount: "无",
                    agencyhot: "无",
                    agencyyytime: "无",
                    agencyclass: "无"
                    }
                   , 
                    {
                    agencydoctorid: "无",
                    agencyprovince: "无",
                    agencydistrict: "无",
                    agencyname: "无",
                    agencybed: "无",
                    agencydiscount: "无",
                    agencyhot: "无",
                    agencyyytime: "无",
                    agencyclass: "无"
                    }               
            ],
            nowpage :1,
            totalpage:2, 
            now:'',//仪表盘，管理账号，用户管理，价格管理，网站配置         
        };
    },
    query(page){
        auth.myact(
          {to:'manager/pricelist.do',
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
    componentDidMount() {
        this.query(1)
    },
    updateDataSource(data) {
        this.setState({
            dataSource: data,
        })
        console.log(data)
        
    },
   
    kaifazhong (str){ 
        console.log(str)    
    },
    
    render() {
        return (
            <PageContainer>
                <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
                <link href="i/css/web_manage_page_root/styles.css" type="text/css" rel="stylesheet"/>
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
                            <p><span className="u209"> </span><span className="u209">&nbsp; &nbsp; </span></p>
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


                                    <div id="u8" class="ax_table_cell">
                                        <img id="u8_img" class="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u9" class="text">
                                            <p><span>用户名</span></p>
                                        </div>
                                    </div>


                                    <div id="u10" class="ax_table_cell">
                                        <img id="u10_img" class="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u11" class="text">
                                            <p><span>所属组</span></p>
                                        </div>
                                    </div>


                                    <div id="u12" class="ax_table_cell">
                                        <img id="u12_img" class="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u13" class="text">
                                            <p><span>电话</span></p>
                                        </div>
                                    </div>


                                    <div id="u14" class="ax_table_cell">
                                        <img id="u14_img" class="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u15" class="text">
                                            <p><span>电子邮件</span></p>
                                        </div>
                                    </div>


                                    <div id="u16" class="ax_table_cell">
                                        <img id="u16_img" class="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u17" class="text">
                                            <p><span>状态</span></p>
                                        </div>
                                    </div>
                                    <div id="u18" class="ax_table_cell">
                                        <img id="u18_img" class="img " src="i/images/web_manage_page_root/u18.png"/>

                                        <div id="u19" class="text">
                                            <p><span>操作</span></p>
                                        </div>
                                    </div>
                                    <div id="u20" class="ax_table_cell">
                                        <img id="u20_img" class="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u21" class="text">
                                            <p><span>张三</span></p>
                                        </div>
                                    </div>
                                    <div id="u22" class="ax_table_cell">
                                        <img id="u22_img" class="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u23" class="text">
                                            <p><span>手术助理-骨科</span></p>
                                        </div>
                                    </div>


                                    <div id="u24" class="ax_table_cell">
                                        <img id="u24_img" class="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u25" class="text">
                                            <p><span>13912345678</span></p>
                                        </div>
                                    </div>


                                    <div id="u26" class="ax_table_cell">
                                        <img id="u26_img" class="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u27" class="text">
                                            <p><span>ZhangSan @FD.com</span></p>
                                        </div>
                                    </div>


                                    <div id="u28" class="ax_table_cell">
                                        <img id="u28_img" class="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u29" class="text">
                                            <p><span>启用</span></p>
                                        </div>
                                    </div>


                                    <div id="u30" class="ax_table_cell">
                                        <img id="u30_img" class="img " src="i/images/web_manage_page_root/u30.png"/>

                                        <div id="u31" class="text">
                                            <p><span>删除/禁用/修改</span></p>
                                        </div>
                                    </div>


                                    <div id="u32" class="ax_table_cell">
                                        <img id="u32_img" class="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u33" class="text">
                                            <p><span>李四</span></p>
                                        </div>
                                    </div>


                                    <div id="u34" class="ax_table_cell">
                                        <img id="u34_img" class="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u35" class="text">
                                            <p><span>手术助理-骨科</span></p>
                                        </div>
                                    </div>


                                    <div id="u36" class="ax_table_cell">
                                        <img id="u36_img" class="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u37" class="text">
                                            <p><span>18812345678</span></p>
                                        </div>
                                    </div>


                                    <div id="u38" class="ax_table_cell">
                                        <img id="u38_img" class="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u39" class="text">
                                            <p><span></span></p>
                                        </div>
                                    </div>


                                    <div id="u40" class="ax_table_cell">
                                        <img id="u40_img" class="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u41" class="text">
                                            <p><span>启用</span></p>
                                        </div>
                                    </div>


                                    <div id="u42" class="ax_table_cell">
                                        <img id="u42_img" class="img " src="i/images/web_manage_page_root/u42.png"/>

                                        <div id="u43" class="text">
                                            <p><span>删除/禁用/修改</span></p>
                                        </div>
                                    </div>
                                </div>


                                <div id="u44" class="ax_horizontal_line">
                                    <img id="u44_start" class="img " src="i/resources/images/transparent.gif" alt="u44_start"/>
                                    <img id="u44_end" class="img " src="i/resources/images/transparent.gif" alt="u44_end"/>
                                    <img id="u44_line" class="img " src="i/images/web_manage_page_root/u0_line.png" alt="u44_line"/>
                                </div>


                                <div id="u45" class="ax_h4">
                                    <img id="u45_img" class="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u46" class="text">
                                        <strong><span>所有成员</span></strong>
                                    </div>
                                </div>


                                <div id="u47" class="ax_paragraph">
                                    <img id="u47_img" class="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u48" class="text">
                                        <p><span>首页 上一页 </span><span className="u211">1</span><span> 2 下一页 尾页</span></p>
                                    </div>
                                </div>


                                <div id="u49" class="ax_h4">
                                    <img id="u49_img" class="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u50" class="text">
                                        <strong><span>增加成员</span></strong>
                                    </div>
                                </div>


                                <div id="u51" class="ax_paragraph">
                                    <img id="u51_img" class="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u52" class="text">
                                        <p><span>账号</span></p>
                                    </div>
                                </div>


                                <div id="u53" class="ax_paragraph">
                                    <img id="u53_img" class="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u54" class="text">
                                        <p><span>密码</span></p>
                                    </div>
                                </div>


                                <div id="u55" class="ax_paragraph">
                                    <img id="u55_img" class="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u56" class="text">
                                        <p><span>确认密码</span></p>
                                    </div>
                                </div>


                                <div id="u57" class="ax_droplist">
                                    <select id="u57_input">
                                        <option selected value="手术助理-骨科">手术助理-骨科</option>
                                        <option value="客服">客服</option>
                                    </select>
                                </div>


                                <div id="u58" class="ax_paragraph">
                                    <img id="u58_img" class="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u59" class="text">
                                        <p><span>所属组</span></p>
                                    </div>
                                </div>


                                <div id="u60" class="ax_text_field">
                                    <input id="u60_input" type="text" value=""/>
                                </div>


                                <div id="u61" class="ax_text_field">
                                    <input id="u61_input" type="text" value=""/>
                                </div>


                                <div id="u62" class="ax_text_field">
                                    <input id="u62_input" type="text" value=""/>
                                </div>


                                <div id="u63" class="ax_paragraph">
                                    <img id="u63_img" class="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u64" class="text">
                                        <p><span>姓名</span></p>
                                    </div>
                                </div>


                                <div id="u65" class="ax_paragraph">
                                    <img id="u65_img" class="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u66" class="text">
                                        <p><span>电话</span></p>
                                    </div>
                                </div>


                                <div id="u67" class="ax_paragraph">
                                    <img id="u67_img" class="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u68" class="text">
                                        <p><span>电子邮件</span></p>
                                    </div>
                                </div>


                                <div id="u69" class="ax_text_field">
                                    <input id="u69_input" type="text" value=""/>
                                </div>


                                <div id="u70" class="ax_text_field">
                                    <input id="u70_input" type="text" value=""/>
                                </div>


                                <div id="u71" class="ax_text_field">
                                    <input id="u71_input" type="text" value=""/>
                                </div>
                                <div id="u72" class="ax_html_button">
                                    <input id="u72_input" type="submit" value="重置"/>
                                </div>
                                <div id="u73" class="ax_html_button">
                                    <input id="u73_input" type="submit" value="提交"/>
                                </div>
                                <div id="u209" class="ax_html_button">
                                    <input id="u209_input"/>

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
                                <img id="u193_img" class="img " src='i/images/web_manage_page_root/u191_mouseOver.png'/>

                                <div id="u194" class="text" style = {{color:'white'}} onClick = {()=>{this.setState({'now':'管理账号'})}}>
                                    <p><span >管理账号</span></p>
                                </div>
                            </div>


                            <div id="u195" class="ax_table_cell">
                                <img id="u195_img" class="img " src="i/images/web_manage_page_root/u191.png"/>

                                <div id="u196" class="text">
                                    <p><Link to = '/user_manage'><span onClick = {()=>{this.setState({'now':'管理用户'})}}>管理用户</span></Link></p>
                                </div>
                            </div>


                            <div id="u197" class="ax_table_cell">
                                <img id="u197_img" class="img " src='i/images/web_manage_page_root/u191.png'/>

                                <div id="u198" class="text" style = {{color:this.state.now=='价格管理'?'white':'black'}}  >
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

                export default Account_manage;