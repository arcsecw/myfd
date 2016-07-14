import React from 'react'
import PageContainer from '../components/PageContainer';
import auth from '../components/auth'
import {
} from 'amazeui-react';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
var Price_manage = React.createClass({
     getInitialState() {
        return {
            dataSource:{
                're':[
                    {
                    id: "无",
                    detail: "无",
                    price: "无",
                    description: "无",
                    state: "无",
                    },
                     {
                        id: "无",
                    detail: "无",
                    price: "无",
                    description: "无",
                    state: "无",
                    }
                   , 
                    {
                         id: "无",
                    detail: "无",
                    price: "无",
                    description: "无",
                    state: "无",
                    }               
            ],
            'totalpage':2,
            'nowpage':1,
             'now':'',//仪表盘，管理账号，用户管理，价格管理，网站配置 
            },
                   
        };
    },
    query(page){
        auth.myact(
          {to:'manager/pricelist.do',
           parms:[{'key':'page','value':page}]
          },
          (res)=>{
                this.updateDataSource(res)
                console.log("你妹的2")
                });
        this.setState({nowpage:page})
    },
    querynext(){
        console.log("你妹的1")
        var nowpage = this.state.nowpage
        var totalpage = this.state.totalpage
        if (nowpage+1<=totalpage){
            nowpage+=1
            this.query(nowpage)
               
        }
        
    }
    ,
    querybefore(){
        
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
            totalpage:data.totalpage,
        })
        console.log(data)

        
    },
   
    kaifazhong (str){ 
        console.log(str)    
    },
    jude(intState){
        var state="";
        if(intState==0){
            state="禁用";
        }else{
            state="启用";
        }
        return state;
    },
    
    
  render() {
       var page =''
        var line1 = {}
        var data =  this.state.dataSource.re
        if (data.length>=1){
            line1 = data[0]
        }
        var line2 = {}
        if (data.length>=2){
            line2 = data[1]

        }
        var line3 = {}        
       
        if (data.length>=3){
            line3 = data[2]
        }
        var black = {
            color:'black'
        }
      
    return (
      <PageContainer>
         <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
                <link href="i/css/web_manage_page_root/style1.css" type="text/css" rel="stylesheet"/>
                <div id="base" className="">
                    <div id="u0" className="ax_horizontal_line">
                        <img id="u0_start" className="img " src="i/resources/images/transparent.gif" alt="u0_start"/>
                        <img id="u0_end" className="img " src="i/resources/images/transparent.gif" alt="u0_end"/>
                        <img id="u0_line" className="img " src="i/images/web_manage_page_root/u0_line.png" alt="u0_line"/>
                    </div>

                    <div id="u1" className="ax_h1">
                        <img id="u1_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u2" className="text">
                            <strong><span>飞刀平台系统管理</span></strong>
                        </div>
                    </div>


                    <div id="u3" className="ax_paragraph">
                        <img id="u3_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u4" className="text">
                            <p><span classNameName="u209">您好，Admin&nbsp; &nbsp; </span><span classNameName="u210">退出</span><span classNameName="u209">&nbsp; &nbsp; </span></p>
                        </div>
                    </div>


                    <div id="u5" className="ax_horizontal_line">
                        <img id="u5_start" className="img " src="i/resources/images/transparent.gif" alt="u5_start"/>
                        <img id="u5_end" className="img " src="i/resources/images/transparent.gif" alt="u5_end"/>
                        <img id="u5_line" className="img " src="i/images/web_manage_page_root/u0_line.png" alt="u5_line"/>
                    </div>


                    <div id="u6" className="ax_dynamic_panel" data-label="系统管理">
                        <div id="u6_state0" className="panel_state" data-label="管理账号">
                            <div id="u6_state0_content" className="panel_state_content">

                                <div id="u7" className="ax_table">

                                    <div id="u8" className="ax_table_cell">
                                        <img id="u8_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u9" className="text">
                                            <p><span>编号</span></p>
                                        </div>
                                    </div>


                                    <div id="u10" className="ax_table_cell">
                                        <img id="u10_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u11" className="text">
                                            <p><span>简述</span></p>
                                        </div>
                                    </div>


                                    <div id="u12" className="ax_table_cell">
                                        <img id="u12_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u13" className="text">
                                            <p><span>详细描述</span></p>
                                        </div>
                                    </div>


                                    <div id="u14" className="ax_table_cell">
                                        <img id="u14_img" className="img " src="i/images/web_manage_page_root/u8.png"/>

                                        <div id="u15" className="text">
                                            <p><span>价格</span></p>
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
                                       
                                            <p><span>{line1.id}</span></p>
                                        </div>
                                    </div>
                                    <div id="u22" className="ax_table_cell">
                                        <img id="u22_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u23" className="text">
                                            <p><span>{line1.description}</span></p>
                                        </div>
                                    </div>


                                    <div id="u24" className="ax_table_cell">
                                        <img id="u24_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u25" className="text">
                                            <p><span>{line1.detail}</span></p>
                                        </div>
                                    </div>


                                    <div id="u26" className="ax_table_cell">
                                        <img id="u26_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u27" className="text">
                                            <p><span>{line1.price}</span></p>
                                        </div>
                                    </div>


                                    <div id="u28" className="ax_table_cell">
                                        <img id="u28_img" className="img " src="i/images/web_manage_page_root/u20.png"/>

                                        <div id="u29" className="text">
                                            <p><span>{this.jude(line1.state)}</span></p>
                                        </div>
                                    </div>


                                    <div id="u30" className="ax_table_cell">
                                        <img id="u30_img" className="img " src="i/images/web_manage_page_root/u30.png"/>

                                        <div id="u31" className="text">
                                            <p><span>删除/禁用/修改</span></p>
                                        </div>
                                    </div>


                                    <div id="u32" className="ax_table_cell">
                                        <img id="u32_img" className="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u33" className="text">
                                            <p><span>{line2.id}</span></p>
                                        </div>
                                    </div>


                                    <div id="u34" className="ax_table_cell">
                                        <img id="u34_img" className="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u35" className="text">
                                            <p><span>{line2.description}</span></p>
                                        </div>
                                    </div>


                                    <div id="u36" className="ax_table_cell">
                                        <img id="u36_img" className="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u37" className="text">
                                            <p><span>{line2.detail}</span></p>
                                        </div>
                                    </div>


                                    <div id="u38" className="ax_table_cell">
                                        <img id="u38_img" className="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u39" className="text">
                                            <p><span>{line2.price}</span></p>
                                        </div>
                                    </div>


                                    <div id="u40" className="ax_table_cell">
                                        <img id="u40_img" className="img " src="i/images/web_manage_page_root/u32.png"/>

                                        <div id="u41" className="text">
                                            <p><span>{this.jude(line2.state)}</span></p>
                                        </div>
                                    </div>


                                    <div id="u42" className="ax_table_cell">
                                        <img id="u42_img" className="img " src="i/images/web_manage_page_root/u42.png"/>

                                        <div id="u43" className="text">
                                            <p><span>删除/禁用/修改</span></p>
                                        </div>
                                    </div>
                                </div>


                                <div id="u44" className="ax_horizontal_line">
                                    <img id="u44_start" className="img " src="i/resources/images/transparent.gif" alt="u44_start"/>
                                    <img id="u44_end" className="img " src="i/resources/images/transparent.gif" alt="u44_end"/>
                                    <img id="u44_line" className="img " src="i/images/web_manage_page_root/u0_line.png" alt="u44_line"/>
                                </div>


                                <div id="u45" className="ax_h4">
                                    <img id="u45_img" className="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u46" className="text">
                                        <strong><span>所有成员</span></strong>
                                    </div>
                                </div>


                                <div id="u47" className="ax_paragraph">
                                    <img id="u47_img" className="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u48" className="text">
                                        <p><span onClick = {this.query.bind(this,1)}>首页</span> <span onClick={this.querybefore}>上一页</span> <span classNameName="u211"></span><span onClick = {this.querynext}>下一页 </span> <span onClick = {this.query.bind(this,this.state.totalpage)}>尾页</span></p>
                                    </div>
                                </div>


                                <div id="u49" className="ax_h4">
                                    <img id="u49_img" className="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u50" className="text">
                                        <strong><span>增加费用项</span></strong>
                                    </div>
                                </div>


                                <div id="u51" className="ax_paragraph">
                                    <img id="u51_img" className="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u52" className="text">
                                        <p><span>简述</span></p>
                                    </div>
                                </div>


                                <div id="u53" className="ax_paragraph">
                                    <img id="u53_img" className="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u54" className="text">
                                        <p><span>详细描述</span></p>
                                    </div>
                                </div>


                                <div id="u55" className="ax_paragraph">
                                    <img id="u55_img" className="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u56" className="text">
                                        <p><span>价格</span></p>
                                    </div>
                                </div>


                                <div id="u57" className="ax_droplist">
                                    <select id="u57_input">
                                        <option selecte value="on">启用</option>
                                        <option value="off">禁用</option>
                                    </select>
                                </div>


                                <div id="u58" className="ax_paragraph">
                                    <img id="u58_img" className="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u59" className="text">
                                        <p><span>状态</span></p>
                                    </div>
                                </div>


                                <div id="u60" className="ax_text_field">
                                    <input id="u60_input" type="text" value=""/>
                                </div>


                                <div id="u61" className="ax_text_field">
                                    <input id="u61_input" type="text" value=""/>
                                </div>


                                <div id="u62" className="ax_text_field">
                                    <input id="u62_input" type="text" value=""/>
                                </div>
                                <div id="u72" className="ax_html_button">
                                    <input id="u72_input" type="submit" value="重置"/>
                                </div>


                                <div id="u73" className="ax_html_button">
                                    <input id="u73_input" type="submit" value="提交"/>
                                </div>
                                 <div id="u70" className="ax_html_button">
                                    <input />
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
                                <img id="u193_img" className="img " src='i/images/web_manage_page_root/u191.png'/>

                                <div id="u194" className="text" style = {{color:this.state.now=='管理账号'?'white':'black'}} >
                                    <p><Link to = '/account_manage'><span onClick = {()=>{this.setState({'now':'管理账号'})}}>管理账号</span></Link></p>
                                </div>
                            </div>


                            <div id="u195" className="ax_table_cell">
                                <img id="u195_img" className="img " src="i/images/web_manage_page_root/u191.png"/>

                                <div id="u196" className="text">
                                    <p><span>用户管理</span></p>
                                </div>
                            </div>


                            <div id="u197" className="ax_table_cell">
                                <img id="u197_img" className="img "  src='i/images/web_manage_page_root/u191_mouseOver.png'/>

                                <div id="u198" className="text" style = {{color:'white'}}  onClick = {()=>{this.setState({'now':'价格管理'})}}>
                                    <p><span>价格管理</span></p>
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

export default Price_manage;