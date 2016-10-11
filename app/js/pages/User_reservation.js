import React from 'react';
import PageContainer from '../components/PageContainer';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
import auth from '../components/auth'

// Be sure to include styles at some point, probably during your bootstrapping
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

var User_reservation = withRouter( React.createClass({
    getInitialState() {
        return {
            yuyue:{
                notice:'',
                didian:'',
                zhuanjia:'',
                yuyueshijian:'2016-8-20',
                shoushuneirong:'',                
                shifouyibao:'否',
                xingming:'',
                chushengriqi:'1990-8-8',
                quezhenxinxi:'无',
                bingqingmiaoshu:'',
                lianxirenxingming:'',
                yuhuanzheguanxi:'',
                shouji:'',
                dizhi:'',
                totalFee:'0',
                basicPrice:'0',
                id:''
            },
            qitafuwu:[],
            qitafuwu1:[
                {
                    description:'大保健1',
                    price:'20',
                    id:'1'
                },
                {
                    description:'大保健2',
                    price:'20',
                    id:'2'
                }
            ],
    
        };
    },
    query(){
            var pars = this.state.yuyue
            
            var parms = [
               {'key':'orderFocus','value':pars.notice},
               {'key':'orderReserveTime','value':pars.yuyueshijian},
               {'key':'orderOperation','value':pars.shoushuneirong},
               {'key':'orderInsurance','value':'1'},
               {'key':'contactRealname','value':pars.lianxirenxingming},
               {'key':'relation','value':pars.yuhuanzheguanxi},
               {'key':'mobile','value':pars.shouji},
               {'key':'contactAddress','value':pars.dizhi}, 
               {'key':'patientRealname','value':pars.xingming},
               {'key':'patientAge','value':''},
               {'key':'patientDiagnose','value':pars.quezhenxinxi},
               {'key':'patientDisease','value':''},
               {'key':'username','value':auth.getUsername()},
                ]
            var qitafuwu = this.get_check_box_value()
            qitafuwu.map((l)=>{
                parms.push({'key':'service','value':l})
            })
            console.log(parms)
            auth.myact(
            {to:'orderGen.do',
            parms:parms
            },
            (res)=>{
                    var form = new FormData(<form  encType="multipart/form-data" method="post"></form>)
                    form.append("imgFile", this.refs.my_file.files[0]);
                    console.log(this.refs.my_file.files[0])
                    form.append("username", auth.getUsername());
                    form.append("role", auth.getRole());
                    auth.post('upload.do',form,(res)=>{
                        
                    })
                    this.state.yuyue.basicPrice = res.basicPrice
                    this.state.yuyue.totalFee = res.totalFee
                    this.state.yuyue.id = res.id
                    this.props.router.push({ pathname: '/checkReservation',query:this.state.yuyue})
                    });
        },
    componentWillMount() {
        auth.get('book.do',{},(res)=>{
            this.state.yuyue.notice = res.shift().focus
            this.setState({qitafuwu1:res})
        })
        auth.get('list.do',{'page':'1','role':'2','paixu':'1'},(res)=>{
            console.log(res)
        })
        var par = this.props.query
        if (par.realname!=undefined){
            this.state.yuyue.didian = par.reservePlace
            this.state.yuyue.zhuanjia = par.realname+par.title
        }
    },
     submitForm() {  
        var refss = this.refs
        console.log(refss.service)
        this.state.yuyue.didian = refss.didian.value;
        this.state.yuyue.yuyueshijian = refss.yuyueshijian.value;
        this.state.yuyue.shoushuneirong = refss.shoushuneirong.value;
        this.state.yuyue.xingming =refss.xingming.value;
        this.state.yuyue.chushengriqi = refss.chushengriqi.value;
        this.state.yuyue.quezhenxinxi = refss.quezhenxinxi.value;
        this.state.yuyue.bingqingmiaoshu = refss.bingqingmiaoshu.value;
        this.state.yuyue.lianxirenxingming = refss.lianxirenxingming.value;
        this.state.yuyue.yuhuanzheguanxi = refss.yuhuanzheguanxi.value;
        this.state.yuyue.shouji = refss.shouji.value;
        this.state.yuyue.dizhi = refss.dizhi.value; 
        this.query();
    },
    get_check_box_value(){
        var re = []
        var inputs = this.refs.mycheckbox.getElementsByTagName('input')
        for (let e_input of inputs){
            if (e_input.checked){
                re.push(e_input.value)
            }
        }
        return re
    },
    render() {
        
        var check_boxs = (
            this.state.qitafuwu1.map((line)=>{
                return (<div><input type = 'checkbox' value={line.id}/>{`描述：${line.description}---价格：${line.price}`}</div>)
            })
        )
        var pr = this.state.yuyue
        

        return (
            <PageContainer>
                <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
                <link href="i/css/user_reservation_operation_fill_page/styles.css" type="text/css" rel="stylesheet"/>
                <link href="i/css/react-select.css" type="text/css" rel="stylesheet"/>
                <div id="base" className="">


                    <div id="u0" className="ax_shape">
                        <img id="u0_img" className="img " src="i/images/user_reservation_operation_fill_page/u0.png"/>

                        <div id="u1" className="text">
                            <p><span>&nbsp; &nbsp; &nbsp; </span><span>注意</span><span>事项</span></p>
                        </div>
                    </div>


                    <div id="u2" className="ax_shape">
                        <img id="u2_img" className="img " src="i/images/user_reservation_operation_fill_page/u2.png"/>

                        <div id="u3" className="text">
                            <p><span>&nbsp; &nbsp; </span><span>患者</span><span>信息</span></p>
                        </div>
                    </div>


                    <div id="u4" className="ax_shape">
                        <img id="u4_img" className="img " src="i/images/user_reservation_operation_fill_page/u4.png"/>

                        <div id="u5" className="text">
                            <p><span>&nbsp; &nbsp; &nbsp; 联系人</span></p>
                        </div>
                    </div>


                    <div id="u6" className="ax_shape">
                        <img id="u6_img" className="img " src="i/images/user_reservation_operation_fill_page/u4.png"/>

                        <div id="u7" className="text">
                            <p><span>&nbsp; </span><span>&nbsp; </span><span>其他服务</span></p>
                        </div>
                    </div>


                    <div id="u8" className="ax_shape">
                        <img id="u8_img" className="img " src="i/images/user_reservation_operation_fill_page/u0.png"/>

                        <div id="u9" className="text">
                            <p><span>&nbsp; &nbsp; 使用须知</span></p>
                        </div>
                    </div>

                    <div id="u10" className="ax_shape" onClick = {this.submitForm}>
                        <img id="u10_img" className="img " src="i/images/user_reservation_operation_fill_page/u10.png"/>

                        <div id="u11" className="text">
                            <p><span>核对手术预约信息</span></p>
                        </div>
                        <div id="u45" class="ax_html_button">
                            <input />
                        </div>

                    </div>

                    <div id="u12" className="ax_image">
                        <img id="u12_img" className="img " src="i/images/user_check_operation_reservation_page/u21.png"/>

                        <div id="u13" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u14" className="ax_paragraph">
                        <img id="u14_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u15" className="text">
                            <p><span>手术地点： 北京 </span></p>
                        </div>
                    </div>


                    <div id="u16" className="ax_shape">
                        <img id="u16_img" className="img " src="i/images/user_reservation_operation_fill_page/u16.png"/>

                        <div id="u17" className="text">
                            <p><span></span><span>{pr.notice}</span></p>
                        </div>
                    </div>


                    <div id="u18" className="ax_shape">
                        <img id="u18_img" className="img " src="i/images/user_reservation_operation_fill_page/u18.png"/>

                        <div id="u19" className="text">
                            <p><span> 姓名：</span><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><input type="text" defaultValue={pr.xingming} ref = 'xingming'/></p><p><span> 出生日期：</span><span>&nbsp; </span><span>&nbsp; </span><span><input type="text" defaultValue={pr.chushengriqi} ref = 'chushengriqi'/></span></p><p><span> 确诊信息：</span><span>&nbsp; &nbsp; </span><span><input type="text" defaultValue={pr.quezhenxinxi} ref = 'quezhenxinxi'/></span></p><p><span> 病情描述：</span></p><p><span>&nbsp; </span></p><p><span>&nbsp; </span></p><p><span>&nbsp; </span></p><p><span> CT或相关图片资料：</span></p><p><span>&nbsp; </span></p>
                        </div>
                    </div>


                    <div id="u20" className="ax_shape">
                        <img id="u20_img" className="img " src="i/images/user_reservation_operation_fill_page/u16.png"/>

                        <div id="u21" className="text">
                            <p><span> 姓名：</span><input type="text" defaultValue={pr.lianxirenxingming} ref = 'lianxirenxingming'/></p><p><span> 与患者关系：</span><input type="text" defaultValue={pr.yuhuanzheguanxi} ref = 'yuhuanzheguanxi'/></p><p><span> 手机：</span><input type="text" defaultValue={pr.shouji} ref = 'shouji'/></p><p><span> 地址：</span><input type="text" defaultValue={pr.dizhi} ref = 'dizhi'/></p>
                        </div>
                    </div>


                    <div id="u22" className="ax_shape">
                        <img id="u22_img" className="img " src="i/images/user_reservation_operation_fill_page/u16.png"/>

                        <div id="u23" className="text">
                        <div ref = 'mycheckbox'>
                        {check_boxs}
                        </div>                                             
                        </div>
                    </div>


                    <div id="u24" className="ax_shape">
                        <img id="u24_img" className="img " src="i/images/user_reservation_operation_fill_page/u16.png"/>

                        <div id="u25" className="text">
                            <p><span className="read"> 提交手术预约单意味着您仔细阅读并同意以下预约服务协议 </span><span className="protocal">谷雨医生平台服务协议</span></p>
                        </div>
                    </div>


                    <div id="u26" className="ax_shape">
                        <img id="u26_img" className="img " src="i/images/user_reservation_operation_fill_page/u4.png"/>

                        <div id="u27" className="text">
                            <p><span>&nbsp; &nbsp; 服务信息</span></p>
                        </div>
                    </div>


                    <div id="u28" className="ax_shape">
                        <img id="u28_img" className="img " src="i/images/user_reservation_operation_fill_page/u16.png"/>

                        <div id="u29" className="text">
                            <p><span>&nbsp; </span><span>地点：<input ref = 'didian' defaultValue = {pr.didian}/></span></p><p><span>&nbsp; </span><span>专家：{pr.zhuanjia}</span></p><p><span>&nbsp; </span><span>预约时间:<input defaultValue= {pr.yuyueshijian} ref = 'yuyueshijian'/></span></p><p><span>&nbsp; </span><span>手术内容：<input defaultValue = {pr.shoushuneirong} ref = 'shoushuneirong'/></span></p><p><span>&nbsp; </span></p>
                        </div>
                    </div>


     


                    <div id="u31" className="ax_html_button">
                        <input ref = 'my_file' type ='file' id="u31_input" value="上传"/>
                    </div>


                    <div id="u32" className="ax_text_area">
                        <textarea  ref = 'bingqingmiaoshu' id="u32_input"></textarea>
                    </div>


                    <div id="u33" className="ax_shape">
                        <img id="u33_img" className="img " src="i/images/user_check_operation_reservation_page/u23.png"/>

                        <div id="u34" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u35" className="ax_paragraph">
                        <img id="u35_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u36" className="text">
                            <p><span className="read"></span><span className="hi"></span><span className="read">&nbsp; &nbsp; </span><span className="read">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></p>
                        </div>
                    </div>


                    <div id="u37" className="ax_dynamic_panel">
                        <div id="u37_state0" className="panel_state" data-label="State1">
                            <div id="u37_state0_content" className="panel_state_content">


                                <div id="u38" className="ax_menu">
                                    <img id="u38_menu" className="img " src="i/images/user_check_operation_reservation_page/u32_menu.png" alt="u38_menu"/>


                                    <div id="u39" className="ax_table">


                                        <div id="u40" className="ax_table_cell">
                                            <img id="u40_img" className="img " src="i/resources/images/transparent.gif"/>

                                            <div id="u41" className="text">
                                                <p><span>我的订单</span></p>
                                            </div>
                                        </div>


                                        <div id="u42" className="ax_table_cell">
                                            <img id="u42_img" className="img " src="i/resources/images/transparent.gif"/>

                                            <div id="u43" className="text">
                                                <p><span>退出</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="u44" className="ax_horizontal_line">
                                    <img id="u44_start" className="img " src="i/resources/images/transparent.gif" alt="u44_start"/>
                                    <img id="u44_end" className="img " src="i/resources/images/transparent.gif" alt="u44_end"/>
                                    <img id="u44_line" className="img " src="i/images/user_check_operation_reservation_page/u38_line.png" alt="u44_line"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        );
    }
}));
export default User_reservation;