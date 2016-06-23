import React from 'react';
import PageContainer from '../components/PageContainer';
import Header1 from '../components/FontComponents/Header';
import Qbzz from '../components/FontComponents/Qbzz';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
import auth from '../components/auth'

var Register_doctor = React.createClass({
    handleSubmit:function(e){
    auth.myact({to:'regist.do',
               parms:[
               {key:'regist_username',value:this.refs.regist_username.value}, 
               {key:'regist_confirmPwd',value:this.refs.regist_confirmPwd.value}, 
               {key:'regist_password',value:this.refs.regist_password.value}, 
               {key:'regist_mobile',value:this.refs.regist_mobile.value}, 
               {key:'department',value:this.refs.department.value}, 
               {key:'province',value:this.refs.province.value}, 
               {key:'hospital',value:this.refs.hospital.value}, 
               {key:'title',value:this.refs.title.value}, 
               {key:'excel',value:this.refs.excel.value}, 
               {key:'experience',value:this.refs.experience.value}, 
               {key:'honor',value:this.refs.honor.value}, 
               {key:'team',value:this.refs.team.value},                
               {key:'role',value:'3'}, 
               ]
                },(res)=>{
                        if(res.regist_error){alert(res.regist_error)}else{
                            alert ('success')
                        }
                })
  },
    render() {
        return (
            <PageContainer>
                <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
                <link href="i/css/register_doctor/styles.css" type="text/css" rel="stylesheet"/>
                <div id="base" className="">
                    <div id="u0" className="ax_shape">
                        <img id="u0_img" className="img " src="i/images/register_doctor/u0.png"/>

                        <div id="u1" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u2" className="ax_paragraph">
                        <img id="u2_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u3" className="text">
                            <p><span>用户名</span></p>
                        </div>
                    </div>

                    <div id="u4" className="ax_text_field">
                         <input ref="regist_username"  id="u4_input" type="text"  />
                    </div>


                    <div id="u5" className="ax_text_field">
                         <input ref="regist_password"  id="u5_input" type="text"  />
                    </div>


                    <div id="u6" className="ax_text_field">
                         <input ref="regist_confirmPwd"  id="u6_input" type="text"  />
                    </div>


                    <div id="u7" className="ax_text_field">
                         <input ref="regist_mobile"  id="u7_input" type="text"  />
                    </div>


                    <div id="u8" className="ax_text_field">
                         <input ref=""  id="u8_input" type="text"  />
                    </div>


                    <div id="u9" className="ax_text_field">
                         <input ref=""  id="u9_input" type="text"  />
                    </div>


                    <div id="u10" className="ax_html_button">
                         <input ref=""  id="u10_input" type="submit" value="获取短信验证码"/>
                    </div>


                    <div id="u11" className="ax_image">
                        <img id="u11_img" className="img " src="i/images/register_doctor/u11.png"/>

                        <div id="u12" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u13" className="ax_paragraph">
                        <img id="u13_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u14" className="text">
                            <p><span>看不清？换一张</span></p>
                        </div>
                    </div>


                    <div id="u15" className="ax_paragraph">
                        <img id="u15_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u16" className="text">
                            <p><span>密码</span></p>
                        </div>
                    </div>


                    <div id="u17" className="ax_paragraph">
                        <img id="u17_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u18" className="text">
                            <p><span>确认密码</span></p>
                        </div>
                    </div>


                    <div id="u19" className="ax_paragraph">
                        <img id="u19_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u20" className="text">
                            <p><span>验证手机</span></p>
                        </div>
                    </div>


                    <div id="u21" className="ax_paragraph">
                        <img id="u21_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u22" className="text">
                            <p><span>验证码</span></p>
                        </div>
                    </div>


                    <div id="u23" className="ax_paragraph">
                        <img id="u23_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u24" className="text">
                            <p><span>短信验证码</span></p>
                        </div>
                    </div>


                    <div id="u25" className="ax_h3">
                        <img id="u25_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u26" className="text">
                            <p><span>账户信息</span></p>
                        </div>
                    </div>


                    <div id="u27" className="ax_h3">
                        <img id="u27_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u28" className="text">
                            <p><span>专业信息</span></p>
                        </div>
                    </div>

                    <div id="u29" className="ax_paragraph">
                        <img id="u29_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u30" className="text">
                            <p><span>第一执业医院</span></p>
                        </div>
                    </div>


                 <div id="u31" className="ax_droplist">
                        <select id="u31_input" ref = "province">
                            <option selected value="北京">北京</option>
                            <option value="上海">上海</option>
                            <option value="广州">广州</option>
                        </select>
                    </div>


                    <div id="u32" className="ax_droplist">
                        <select id="u32_input" ref = "hospital">
                            <option selected value="积水潭医院">积水潭医院</option>
                            <option value="协和">协和</option>
                            <option value="北医三院">北医三院</option>
                        </select>
                    </div>


                    <div id="u33" className="ax_droplist">
                        <select id="u33_input" ref="department">
                            <option selected value="骨科">骨科</option>
                        </select>
                    </div>


                    <div id="u34" className="ax_droplist">
                        <select id="u34_input" ref = "title">
                            <option selected value="主任医师教授">主任医师教授</option>
                            <option value="主任医师">主任医师</option>
                            <option value="副主任">副主任</option>
                        </select>
                    </div>


                    <div id="u35" className="ax_paragraph">
                        <img id="u35_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u36" className="text">
                            <p><span>科室</span></p>
                        </div>
                    </div>

                    <div id="u37" className="ax_paragraph">
                        <img id="u37_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u38" className="text">
                            <p><span>职称</span></p>
                        </div>
                    </div>


                    <div id="u39" className="ax_text_area">
                        <textarea id="u39_input" ref = "excel"></textarea>
                    </div>


                    <div id="u40" className="ax_text_area">
                        <textarea id="u40_input"ref="experience"></textarea>
                    </div>


                    <div id="u41" className="ax_text_area">
                        <textarea id="u41_input" ref = "honor"></textarea>
                    </div>


                    <div id="u42" className="ax_paragraph">
                        <img id="u42_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u43" className="text">
                            <p><span>擅长</span></p>
                        </div>
                    </div>


                    <div id="u44" className="ax_paragraph">
                        <img id="u44_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u45" className="text">
                            <p><span>执业经历</span></p>
                        </div>
                    </div>


                    <div id="u46" className="ax_paragraph">
                        <img id="u46_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u47" className="text">
                            <p><span>荣誉</span></p>
                        </div>
                    </div>


                    <div id="u48" className="ax_paragraph">
                        <img id="u48_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u49" className="text">
                            <p><span>上传本人执业证书，职称等图片</span></p>
                        </div>
                    </div>


                    <div id="u50" className="ax_paragraph">
                        <img id="u50_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u51" className="text">
                            <p><span>文件名</span></p>
                        </div>
                    </div>


                    <div id="u52" className="ax_text_field">
                         <input ref=""  id="u52_input" type="text"  />
                    </div>


                    <div id="u53" className="ax_html_button">
                         <input ref=""  id="u53_input" type="submit" value="浏览"/>
                    </div>


                    <div id="u54" className="ax_h3">
                        <img id="u54_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u55" className="text">
                            <p><span>团队信息</span></p>
                        </div>
                    </div>


                    <div id="u56" className="ax_paragraph">
                        <img id="u56_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u57" className="text">
                            <p><span>我有自己的</span></p>
                        </div>
                    </div>


                    <div id="u58" className="ax_checkbox">
                        <label for="u58_input">

                            <div id="u59" className="text">
                                <p><span>助理</span></p>
                            </div>
                        </label>
                         <input ref="team"  id="u58_input" type="checkbox" value="checkbox"/>
                    </div>


                    <div id="u60" className="ax_checkbox">
                        <label for="u60_input">

                            <div id="u61" className="text">
                                <p><span>麻醉师</span></p>
                            </div>
                        </label>
                         <input ref=""  id="u60_input" type="checkbox" value="checkbox"/>
                    </div>


                    <div id="u62" className="ax_checkbox">
                        <label for="u62_input">

                            <div id="u63" className="text">
                                <p><span>护士</span></p>
                            </div>
                        </label>
                         <input ref=""  id="u62_input" type="checkbox" value="checkbox"/>
                    </div>


                    <div id="u64" className="ax_checkbox">
                        <label for="u64_input">

                            <div id="u65" className="text">
                                <p><span>跟台</span></p>
                            </div>
                        </label>
                         <input ref=""  id="u64_input" type="checkbox" value="checkbox"/>
                    </div>


                    <div id="u66" className="ax_checkbox">
                        <label for="u66_input">

                            <div id="u67" className="text">
                                <p><span>我已阅读并同意 <a href="">&lt;飞刀平台注册协议&gt;</a> </span></p>
                            </div>
                        </label>
                         <input ref=""  id="u66_input" type="checkbox" value="checkbox"/>
                    </div>


                    <div id="u68" className="ax_shape">
                        <img id="u68_img" className="img " src="i/images/register_doctor/u68.png"/>

                        <div id="u69" className="text">
                            <p><span onClick={this.handleSubmit}>立即注册</span></p>
                        </div>
                    </div>


                    <div id="u70" className="ax_h1">
                        <img id="u70_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u71" className="text">
                            <p><span>欢迎注册</span></p>
                        </div>
                    </div>


                    <div id="u72" className="ax_shape">
                        <img id="u72_img" className="img " src="i/images/user_check_operation_reservation_page/u23.png"/>

                        <div id="u73" className="text">
                            <p><span>公司主 Logo</span></p>
                        </div>
                    </div>

                    <div id="u74" className="ax_shape">
                        <img id="u74_img" className="img " src="i/images/register_doctor/u74.png"/>

                        <div id="u75" className="text">
                            <p><Link to = '/register_user'><span>我要寻医</span></Link></p>
                            
                        </div>
                    </div>


                    <div id="u76" className="ax_shape">
                        <img id="u76_img" className="img " src="i/images/register_doctor/u76.png"/>

                        <div id="u77" className="text">
                            <p><Link to = '/register_doctor'><span>我是医生</span></Link></p>
                            
                        </div>
                    </div>


                    <div id="u78" className="ax_shape">
                        <img id="u78_img" className="img " src="i/images/register_doctor/u74.png"/>

                        <div id="u79" className="text">
                            <p><Link to = '/register_hospital'><span>我是机构</span></Link></p>
                            
                        </div>
                    </div>


                    <div id="u80" className="ax_horizontal_line">
                        <img id="u80_start" className="img " src="i/resources/images/transparent.gif" alt="u80_start"/>
                        <img id="u80_end" className="img " src="i/resources/images/transparent.gif" alt="u80_end"/>
                        <img id="u80_line" className="img " src="i/images/user_home/u68_line.png" alt="u80_line"/>
                    </div>


                    <div id="u81" className="ax_horizontal_line">
                        <img id="u81_start" className="img " src="i/resources/images/transparent.gif" alt="u81_start"/>
                        <img id="u81_end" className="img " src="i/resources/images/transparent.gif" alt="u81_end"/>
                        <img id="u81_line" className="img " src="i/images/user_home/u68_line.png" alt="u81_line"/>
                    </div>


                    <div id="u82" className="ax_horizontal_line">
                        <img id="u82_start" className="img " src="i/resources/images/transparent.gif" alt="u82_start"/>
                        <img id="u82_end" className="img " src="i/resources/images/transparent.gif" alt="u82_end"/>
                        <img id="u82_line" className="img " src="i/images/user_home/u68_line.png" alt="u82_line"/>
                    </div>


                    <div id="u83" className="ax_horizontal_line">
                        <img id="u83_start" className="img " src="i/resources/images/transparent.gif" alt="u83_start"/>
                        <img id="u83_end" className="img " src="i/resources/images/transparent.gif" alt="u83_end"/>
                        <img id="u83_line" className="img " src="i/images/user_home/u68_line.png" alt="u83_line"/>
                    </div>


                    <div id="u84" className="ax_horizontal_line">
                        <img id="u84_start" className="img " src="i/resources/images/transparent.gif" alt="u84_start"/>
                        <img id="u84_end" className="img " src="i/resources/images/transparent.gif" alt="u84_end"/>
                        <img id="u84_line" className="img " src="i/images/user_home/u68_line.png" alt="u84_line"/>
                    </div>
                    <div>
                    <br/>
                    <hr/>
                    </div>
                </div>
            </PageContainer>
        );
    }

});
export default Register_doctor;