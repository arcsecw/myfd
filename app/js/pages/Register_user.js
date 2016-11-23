import React from 'react'
import PageContainer from '../components/PageContainer';
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
import auth from '../components/auth'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

var path1 = "i/companyLogo.png";
var Register_user=withRouter(

React.createClass({
    getInitialState() {
        return {
            InterValObj: '',
            code: '',
            startTime: '',
            phoneNum: '',
            count:'60', //间隔函数，1秒执行
            curCount: '', //当前剩余秒数
            username: '',
            password: '',
            cfmPwd: '',
        };
    },
    submitForm() {	  
	    this.state.username = document.getElementById("u10_input").value;
        this.state.password = document.getElementById("u11_input").value;
        this.state.cfmPwd = document.getElementById("u12_input").value;
        this.state.phoneNum = document.getElementById("u21_input").value;
        this.state.code = document.getElementById("u23_input").value; //短信验证码
        this.handleSubmit();
    },
    handleSubmit:function(e){
        auth.myact({to:'regist.do',
            parms:[
                {key:'regist_username',value:this.state.username}, 
                {key:'regist_password',value:this.state.password}, 
                {key:'regist_confirmPwd',value:this.state.cfmPwd}, 
                {key:'regist_mobile',value:this.state.phoneNum}, 
                {key:'regist_validate',value:this.state.code}, 
                {key:'role',value:'1'}, 

            ]
            },(res)=>{
                if(res.regist_error){alert(res.regist_error)}else{
                    alert('注册申请已提交')
                    this.props.router.replace('/login')
                }
            })
    },
    queryCode() {
        auth.myact(
          { 
            to:'send.do',
            parms:[{'key':'phone', 'value': this.state.phoneNum},
                    {'key':'code', 'value': this.state.code},
                    {'key':'startTime', 'value': this.state.startTime},
                    ]
          },
            (res)=>{
                console.log(res)
            });
    },
    sendMessage() {        
        var codeLength = 6;//验证码长度
		this.state.curCount = this.state.count;
		this.state.phoneNum=document.getElementById("u21_input").value; //手机号码
		if(this.state.phoneNum.length > 0){
			//产生验证码
            this.state.code = '';
			for (var i = 0; i < codeLength; i++) {
				this.state.code += parseInt(Math.random() * 9).toString();
			}
			//设置button效果，开始计时
			$("#u24_input").attr("disabled", "true");
			$("#u24_input").val("请在" + this.state.curCount + "秒内输入验证码");
			this.state.InterValObj = window.setInterval(this.SetRemainTime, 1000); //启动计时器，1秒执行一次
			var myDate = new Date();
			this.state.startTime = myDate.getTime();
			//向后台发送处理数据
            console.log(this.state.phoneNum);
            console.log(this.state.code);
            this.queryCode();
		}else{
			alert("手机号码不能为空！");
		}
    },
    SetRemainTime() {
		if (this.state.curCount == 0) {
			window.clearInterval(this.state.InterValObj);//停止计时器
			$("#u24_input").removeAttr("disabled");//启用按钮
			$("#u24_input").val("重新发送验证码");
		}
		else {
			this.state.curCount--;
			$("#u24_input").val("请在" + this.state.curCount + "秒内输入验证码");
		}
	},
    render(){
        return(
         <PageContainer>
                <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
                <link href="i/css/register_person/styles.css" type="text/css" rel="stylesheet"/>
                <script type="text/babel">
                </script>
                <div id="base" className="">

                    <div id="u0" className="ax_shape">
                        <img id="u0_img" className="img " src="i/images/register_person/u0.png"/>

                        <div id="u1" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u2" className="ax_shape">
                        <img id="u2_img" className="img " src="i/images/register_person/u2.png"/>

                        <div id="u3" className="text">
                            <p><Link to = '/register_user'><span>我要寻医</span></Link></p>
                        </div>
                    </div>


                    <div id="u4" className="ax_shape">
                        <img id="u4_img" className="img " src="i/images/register_doctor/u74.png"/>

                        <div id="u5" className="text">
                            <p><Link to = '/register_doctor'><span>我是医生</span></Link></p>
                        </div>
                    </div>


                    <div id="u6" className="ax_shape">
                        <img id="u6_img" className="img " src="i/images/register_doctor/u74.png"/>

                        <div id="u7" className="text">
                            <p><Link to = '/register_hospital'><span>我是机构</span></Link></p>
                        </div>
                    </div>


                    <div id="u8" className="ax_paragraph">
                        <img id="u8_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u9" className="text">
                            <p><span>用户名</span></p>
                        </div>
                    </div>


                    <div id="u10" className="ax_text_field">
                        <input id="u10_input" type="text"  />
                    </div>


                    <div id="u11" className="ax_text_field">
                        <input id="u11_input" type="password"  />
                    </div>


                    <div id="u12" className="ax_text_field">
                        <input id="u12_input" type="password"  />
                    </div>


                    <div id="u13" className="ax_checkbox">
                        <label htmlFor="u13_input">

                            <div id="u14" className="text">
                                <p><span>我已阅读并同意<a href="#">&lt; 谷雨医生平台注册协议&gt;</a> </span></p>
                            </div>
                        </label>
                        <input id="u13_input" type="checkbox" value="checkbox"/>
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


                    <div id="u19" className="ax_shape" onClick={this.submitForm} >
                        <img id="u19_img" className="img " src="i/images/register_doctor/u68.png"/>

                        <div id="u20" className="text">
                            <p><span >立即注册</span></p>
                        </div>
                    </div>


                    <div id="u21" className="ax_text_field">
                        <input id="u21_input" type="text"  />
                    </div>


                    <div id="u22" className="ax_text_field">
                        <input id="u22_input"  type="text"  />
                    </div>


                    <div id="u23" className="ax_text_field">
                        <input id="u23_input" ref=""type="text"  />
                    </div>


                    <div id="u24" className="ax_html_button">
                        <input id="u24_input" type="submit" value="获取短信验证码" onClick={this.sendMessage}/>
                    </div>


                    <div id="u25" className="ax_paragraph">
                        <img id="u25_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u26" className="text">
                            <p><span>看不清？换一张</span></p>
                        </div>
                    </div>


                    <div id="u27" className="ax_paragraph">
                        <img id="u27_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u28" className="text">
                            <p><span>验证手机</span></p>
                        </div>
                    </div>

                    <div id="u29" className="ax_paragraph">
                        <img id="u29_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u30" className="text">
                            <p><span>验证码</span></p>
                        </div>
                    </div>


                    <div id="u31" className="ax_paragraph">
                        <img id="u31_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u32" className="text">
                            <p><span>短信验证码</span></p>
                        </div>
                    </div>


                    <div id="u33" className="ax_h1">
                        <img id="u33_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u34" className="text">
                            <p><span>欢迎注册</span></p>
                        </div>
                    </div>

<Link to = '/index_home'>
                    <div id="u35" className="ax_shape">
                        <img id="u35_img" className="img " src="i/images/register_person/u23.png"/>

                        <div id="u36" className="text">
                            <p><span></span></p>
                        </div>
                    </div>
</Link>

                    <div id="u37" className="ax_shape">
                        <img id="u37_img" className="img " src="i/images/register_person/u37.png"/>
                        <div id="u38" className="text">
                            <p><span>验证码</span></p>
                        </div>
                    </div>
                   
                </div>

            </PageContainer>
        );
    }
})
);
export default Register_user;