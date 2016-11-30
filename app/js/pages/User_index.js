import React from 'react';
import {
    Table,
    Tabs,
    Item,
} from 'amazeui-react'
import auth from '../components/auth'
import {
    Order_all,
    Order_finished,
    Order_remain,
} from '../components/User_index'
var User_index = React.createClass({
    render() {
        return (
            <div>
                <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
                <link href="i/css/user_home/style1.css" type="text/css" rel="stylesheet"/>
                <div id="base" className="">

                    <div id="u0" className="ax_shape">
                        <img id="u0_img" className="img " src="i/images/user_home/u0.png"/>

                        <div id="u1" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u2" className="ax_shape">
                        <img id="u2_img" className="img " src="i/images/user_home/u2.png"/>
                        <div id="u3" className="text">
                        </div>
                    </div>


                    <div id="u4" className="ax_paragraph">
                        <img id="u4_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u5" className="text">
                            <p><span>订单中心</span></p>
                        </div>
                    </div>


                    <div id="u6" className="ax_paragraph">
                        <img id="u6_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u7" className="text">
                            <p><span>电子病历</span></p>
                        </div>
                    </div>


                    <div id="u8" className="ax_paragraph">
                        <img id="u8_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u9" className="text">
                            <p><span>医患互动</span></p>
                        </div>
                    </div>


                    <div id="u10" className="ax_paragraph">
                        <img id="u10_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u11" className="text">
                            <p><span>客户服务</span></p>
                        </div>
                    </div>


                    <div id="u12" className="ax_paragraph">
                        <img id="u12_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u13" className="text">
                            <p><span>个人信息</span></p>
                        </div>
                    </div>
                    <div id="u14" className="ax_paragraph">
                        <img id="u14_img" className="img " src="i/resources/images/transparent.gif"/>
                        <div id="u15" className="text">
                            <Tabs animation='slide'>
                                <Tabs.Item eventKey="1" title="全部订单">
                                    <Order_all/>
                                </Tabs.Item>
                                <Tabs.Item eventKey="2" title="已支付">
                                    <Order_finished/>
                                </Tabs.Item>
                                <Tabs.Item eventKey="3" title="未支付">
                                    <Order_remain/>
                                </Tabs.Item>
                            </Tabs>
                        </div>
                    </div>

                    <div id="u60" className="ax_paragraph">
                        <img id="u60_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u61" className="text">
                            <p><span>手术地点：北京 </span></p>
                        </div>
                    </div>


                    <div id="u62" className="ax_paragraph">
                        <img id="u62_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u63" className="text">
                            <p><span className="u78"></span><span className="u79"></span><span className="u80">&nbsp; |</span><span className="u81">&nbsp; 手机APP</span><span className="u80">&nbsp; |</span><span className="u81">&nbsp; 客户服务&nbsp; </span><span className="u80">|</span><span className="u81">&nbsp; 网站导航</span></p>
                        </div>
                    </div>


                    <div id="u64" className="ax_shape">
                        <img id="u64_img" className="img " src="i/images/user_check_operation_reservation_page/u23.png"/>

                        <div id="u65" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u66" className="ax_shape">
                        <img id="u66_img" className="img " src="i/images/user_home/u66.png"/>

                        <div id="u67" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u68" className="ax_horizontal_line">
                        <img id="u68_start" className="img " src="i/resources/images/transparent.gif" alt="u68_start"/>
                        <img id="u68_end" className="img " src="i/resources/images/transparent.gif" alt="u68_end"/>
                        <img id="u68_line" className="img " src="i/images/user_home/u68_line.png" alt="u68_line"/>
                    </div>


                    <div id="u69" className="ax_paragraph">
                        <img id="u69_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u70" className="text">
                            <p><span><Link to = {auth.get_config()['about_us_url']}>关于我们</Link></span></p>
                        </div>
                    </div>


                    <div id="u71" className="ax_paragraph">
                        <img id="u71_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u72" className="text">
                            <p><span><Link to = {auth.get_config()['connect_us_url']}>联系我们</Link></span></p>
                        </div>
                    </div>


                    <div id="u73" className="ax_paragraph">
                        <img id="u73_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u74" className="text">
                            <p><span>服务条款</span></p>
                        </div>
                    </div>


                    <div id="u75" className="ax_paragraph">
                        <img id="u75_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u76" className="text">
                            <p><span>媒体更新</span></p>
                        </div>
                        <div id="u82" class="ax_html_button">
                            <input />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});
export default User_index;