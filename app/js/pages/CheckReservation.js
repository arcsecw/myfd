import React from 'react';
import PageContainer from '../components/PageContainer';
var CheckReservation = React.createClass({
    getInitialState() {
            return {
                dataSource: [
                        {
                        PatientName: "郑国伟", //患者名字
                        Date: "5", //几天内
                        DueDay: "2016年5月20日前", //具体日期
                        DoctorName: "XXX",  //医生名字
                        InstitutionType: "团队", //主任 or 主任团队 or 医院
                        OperationFor: "脑残", //治疗
                        Disctict: "北京", //预约地点
                        Information: "已提交", //确诊信息是否提交
                        CorrespondingInformation: "已提交", //相关信息
                        ContactName: "郑国伟",  //联系人姓名
                        ContactNumber: "13812345678", //联系人电话
                        Cost: {
                           Reservation: "888", //
                           OperationDiscount: "0", //
                           Discount: "0", //
                           TotalFee: "888" //
                        } //费用明细
                        },     
                ]  
            };
        },
        updateDataSource(data) {
            this.setState({
                dataSource: data,
            })
        },
    componentWillMount() {
        var par = this.props.query
        if(par.xingming!=undefined){            
            this.state.dataSource[0].PatientName = par.xingming
            this.state.dataSource[0].DueDay = par.yuyueshijian
            this.state.dataSource[0].Disctict = par.didian
            this.state.dataSource[0].OperationFor = par.shoushuneirong
            this.state.dataSource[0].ContactName = par.lianxirenxingming
            this.state.dataSource[0].ContactNumber = par.shouji
        }
    },
    render() {
        var info = {}
        var data =  this.state.dataSource
        if (data.length>=1){
            info = data[0]
        }
        console.log(info)
        return (
            <PageContainer>
                <div id="base" className="">
                    <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                    <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
                    <link href="i/css/user_check_operation_reservation_page/styles.css" type="text/css" rel="stylesheet"/>
                    <script type="text/babel">
                    </script>

                    <div id="u0" className="ax_shape">
                        <img id="u0_img" class="img "/>
                        <div id="service" className="u101">
                            服务内容: 预约<span className="content">{info.Date}</span>天内(<span className="content">{info.DueDay}</span>) <span className="content">{info.DoctorName}</span><span className="content">{info.InstitutionType}</span>对<span className="content">{info.PatientName}</span>进行<span className="content">{info.OperationFor}</span>方面手术<br/>

                            地点: <span className="content">{info.Disctict}</span><br/>
                            确诊信息: <span className="content">{info.Information}</span><br/><br/>
                            CT及相关影像信息：<span className="content">{info.CorrespondingInformation}</span><br/><br/>
                            <br/>
                            联系人：<span className="content">{info.ContactName}</span><br/> 手机：<span className="content">{info.ContactNumber}</span><br/><br/><br/><br/><br/>



                        </div>


                    </div>


                    <div id="u2" className="ax_shape">
                        <img id="u2_img" className="img " />
                        <div>

                            <div id="buy">
                                已购服务信息：<br/>

                                基础信息预审及专家预约 &nbsp; &nbsp; <span>{info.Cost.Reservation}</span><br/>
                                医院床位优惠包 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span>{info.Cost.OperationDiscount}</span><hr/>
                                优惠&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span>{info.Cost.Discount}</span><br/>
                                应付总计&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span>{info.Cost.TotalFee}</span>

                            </div>
                        </div>


                    </div>


                    <div id="u4" className="ax_shape">
                        <img id="u4_img" className="img " src="i/images/user_check_operation_reservation_page/u4.png"/>

                        <div id="u5" className="pay">
                            <p ><span>&nbsp; </span><span>支付信息：</span></p><p ><span>&nbsp; </span></p><p><span>&nbsp; </span></p><p><span >&nbsp; </span></p><p ><span>&nbsp; </span></p><p><span >&nbsp; </span></p>
                        </div>
                    </div>


                    <div id="u6" className="ax_html_button">
                        <input id="u6_input" type="submit" value="在线支付"/>
                    </div>


                    <div id="u7" className="ax_html_button">
                        <input id="u7_input" type="submit" value="汇款"/>
                    </div>
                    <div id="u8" className="ax_html_button">
                        <input id="u8_input" type="submit" value="公司转账"/>
                    </div>
                    <div id="u9" className="ax_shape"onClick = {()=>{window.history.go(-1)}}>
                        <img id="u9_img" className="img " src="i/images/user_check_operation_reservation_page/u9.png"/>

                        <div id="u10" className="text">
                            <p><span> 修改预约信息</span></p>
                        </div>
                    </div>
                    <div id="u11" className="ax_shape">
                        <img id="u11_img" className="img " src="i/images/user_check_operation_reservation_page/u9.png"/>

                        <div id="u12" className="text">
                            <p><span>前往结算&nbsp; </span></p>
                        </div>
                        <div id="u39" class="ax_html_button">
                            <input />
                        </div>


                    </div>
                    <div>


                    </div>
                    <div id="u13" className="ax_radio_button">
                        <label for="u13_input">

                            <div id="u14" className="text">
                                <p><span>支付宝</span></p>
                            </div>
                        </label>
                        <input id="u13_input" type="radio" value="radio" name="u13"/>
                    </div>
                    <div id="u15" className="ax_radio_button">
                        <label for="u15_input" >
                            <div id="u16" className="text">
                                <p><span>微信支付</span></p>
                            </div>
                        </label>
                        <input id="u15_input" type="radio" value="radio" name="u15"/>
                    </div>
                    <div id="u17" className="ax_radio_button">
                        <label for="u17_input">

                            <div id="u18" className="text">
                                <p><span>百度支付</span></p>
                            </div>
                        </label>
                        <input id="u17_input" type="radio" value="radio" name="u17"/>
                    </div>
                    <div id="u19" className="ax_paragraph">
                        <img id="u19_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u20" className="text">
                            <p><span>手术地点：北京 </span></p>
                        </div>
                        <div id="hi" >
                            <p>您好：<span className="hi">XXXX </span></p>
                        </div>
                    </div>
                    <div id="u21" className="ax_image">
                        <img id="u21_img" className="img " src="i/images/user_check_operation_reservation_page/u21.png"/>

                        <div id="u22" className="text">
                            <p><span></span></p>
                        </div>
                    </div>
                    <div id="u23" className="ax_shape">
                        <img id="u23_img" className="img " src="i/images/user_check_operation_reservation_page/u23.png"/>

                        <div id="u24" className="text">
                            <p><span>公司主 Logo</span></p>
                        </div>
                    </div>
                    <div id="u25" className="ax_shape">
                        <img id="u25_img" className="img " src="i/images/user_check_operation_reservation_page/u25.png"/>

                        <div id="u26" className="text">
                            <p><span></span></p>
                        </div>
                    </div>
                    <div id="u27" className="ax_shape">
                        <img id="u27_img" className="img " src="i/images/user_check_operation_reservation_page/u27.png"/>

                        <div id="u28" className="text">
                            <p><span></span></p>
                        </div>
                    </div>
                    <div id="u29" className="ax_paragraph">
                        <img id="u29_img" className="img " src="i/resources/images/transparent.gif"/>
                    </div>
                    <div id="u31" className="ax_dynamic_panel">
                        <div id="u31_state0" className="panel_state" data-label="State1">
                            <div id="u31_state0_content" className="panel_state_content">


                                <div id="u32" className="ax_menu">
                                    <img id="u32_menu" className="img " src="i/images/user_check_operation_reservation_page/u32_menu.png" alt="u32_menu"/>


                                    <div id="u33" className="ax_table">


                                        <div id="u34" className="ax_table_cell">
                                            <img id="u34_img" className="img " src="i/resources/images/transparent.gif"/>

                                            <div id="u35" className="text">
                                                <p><span>我的订单</span></p>
                                            </div>
                                        </div>


                                        <div id="u36" className="ax_table_cell">
                                            <img id="u36_img" className="img " src="i/resources/images/transparent.gif"/>

                                            <div id="u37" className="text">
                                                <p><span>退出</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="u38" className="ax_horizontal_line">
                                    <img id="u38_start" className="img " src="i/resources/images/transparent.gif" alt="u38_start"/>
                                    <img id="u38_end" className="img " src="i/resources/images/transparent.gif" alt="u38_end"/>
                                    <img id="u38_line" className="img " src="i/images/user_check_operation_reservation_page/u38_line.png" alt="u38_line"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        );
    }
});

export default CheckReservation;