import React from 'react';
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
var path = "i/companyLogo.png";
var iconUser = <Icon icon="user" />;
var iconPwd = <Icon icon="lock" />;
var FindPassword = React.createClass({
  render() {
    return (
      <Grid>
        <Col sm={4}></Col>
        <Col sm={4}>
          <p><span><a href="#"> 找回密码</a></span></p>
        </Col>
      </Grid>
    );
  }
});
var Login = React.createClass({
  //   handleSubmit:function(e){
  //   e.preventDefault();
  //   var userName=this.refs.userName.getValue();
  //   var passWord=this.refs.password.getValue();
  //   var Role=this.refs.role.getValue();
  //  if(!userName||!passWord){
  //    alert("用户名或密码不可为空");
  //  }else{
  //    console.log(userName);
  //    console.log(passWord);
  //    console.log(Role);
  //    var url='http://211.82.97.30:8080/myfd/login.do?username'+'='+userName+'&'+'password'+'='+passWord+'&'+'role'+'='+Role;
  //     fetch(url)
  //     .then(res => {
  //         console.log(res.json());
  //       })
  //  }
  // },
  render() {
    return (
      <PageContainer>
      <div id="base" class="">
      <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
      <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
      <link href="i/css/user_login_page/styles.css" type="text/css" rel="stylesheet"/>


        <div id="u0" class="ax_shape">
          <img id="u0_img" class="img " src="i/images/user_login_page/u0.png"/>

          <div id="u1" class="text">
            <p><span></span></p>
          </div>
        </div>


        <div id="u2" class="ax_h1">
          <img id="u2_img" class="img " src="i/resources/images/transparent.gif"/>

          <div id="u3" class="text">
            <p><span>欢迎登录</span></p>
          </div>
        </div>

        <div id="u6" class="ax_shape">
          <img id="u6_img" class="img " src="i/images/user_login_page/u6.png"/>

          <div id="u7" class="text">
            <p><span></span></p>
          </div>
        </div>


        <div id="u8" class="ax_paragraph">
          <img id="u8_img" class="img " src="i/resources/images/transparent.gif"/>

          <div id="u9" class="text">
            <p><span>立即注册</span></p>
          </div>
        </div>


        <div id="u10" class="ax_text_field">
          <input id="u10_input" type="text" value=""/>
        </div>


        <div id="u11" class="ax_text_field">
          <input id="u11_input" type="password" value=""/>
        </div>


        <div id="u12" class="ax_shape">
          <img id="u12_img" class="img " src="i/images/user_login_page/u12.png"/>

          <div id="u13" class="text">
            <p><span>账号</span></p>
          </div>
        </div>


        <div id="u14" class="ax_shape">
          <img id="u14_img" class="img " src="i/images/user_login_page/u12.png"/>

          <div id="u15" class="text">
            <p><span>密码</span></p>
          </div>
        </div>


        <div id="u16" class="ax_paragraph">
          <img id="u16_img" class="img " src="i/resources/images/transparent.gif"/>

          <div id="u17" class="text">
            <p><span>找回密码</span></p>
          </div>
        </div>


        <div id="u18" class="ax_paragraph">
          <img id="u18_img" class="img " src="i/resources/images/transparent.gif"/>

          <div id="u19" class="text">
            <p><span>其他方式登录</span></p>
          </div>
        </div>


        <div id="u20" class="ax_paragraph">
          <img id="u20_img" class="img " src="i/resources/images/transparent.gif"/>

          <div id="u21" class="text">
            <p><span>微信</span></p>
          </div>
        </div>


        <div id="u22" class="ax_h3">
          <img id="u22_img" class="img " src="i/resources/images/transparent.gif"/>

          <div id="u23" class="text">
            <p><span>会员登录</span></p>
          </div>
        </div>


        <div id="u24" class="ax_shape">
          <img id="u24_img" class="img " src="i/images/user_check_operation_reservation_page/u23.png"/>

          <div id="u25" class="text">
            <p><span>公司主 Logo</span></p>
          </div>
        </div>


        <div id="u26" class="ax_shape">
          <img id="u26_img" class="img " src="i/images/user_login_page/u26.png"/>

          <div id="u27" class="text">
            <p ><span>登录</span></p>
          </div>
        </div>
      </div>
      </PageContainer>
    );
  }
});
export default Login;