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
var AdminLogin = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    var url = "http://211.82.97.30:8080/myfd/login.do?" + "username" + "=" + username + "&" + "password" + "=" + password + "&" + "role=1"
    console.log(username);
    console.log(password);
    if (!username || !password) {
      alert("账户或密码不可以为空");
      return;
    }
    fetch(url)
  },
  render() {
    return (
      <div id="base" class="">
        <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
        <link href="i/css/system_manage_login_page/styles.css" type="text/css" rel="stylesheet"/>
        <div id="u0" class="ax_shape">
          <img id="u0_img" class="img " src="i/images/system_manage_login_page/u0.png"/>
          <div id="u1" class="text">
            <p><span></span></p>
          </div>
        </div>
        <Form className="commentForm" onSubmit={this.handleSubmit}>
          <div id="u2" className="ax_text_field" data-label="AdminUserName">
            <Input id="u2_input" type="text" value="" ref="username"/>
          </div>


          <div id="u3" className="ax_text_field">
            <Input id="u3_input" type="text" value="" ref="password"/>
          </div>


          <div id="u4" className="ax_h1">
            <img id="u4_img" class="img " src="i/resources/images/transparent.gif"/>
            <div id="u5" class="text">
              <p><span>管理登录</span></p>
            </div>
          </div>

          <div id="u6" class="ax_paragraph">
            <img id="u6_img" class="img " src="i/resources/images/transparent.gif"/>
            <div id="u7" class="text">
              <p><span>用户名</span></p>
            </div>
          </div>
          <div id="u8" className="ax_paragraph">
            <img id="u8_img" class="img " src="i/resources/images/transparent.gif"/>
            <div id="u9" className="text">
              <p><span>密码</span></p>
            </div>
          </div>
          <div id="u10" className="ax_html_button">
            <input id="u10_input" type="submit" value="提交"/>
          </div>
        </Form>
      </div>
    );
  }
});
export default AdminLogin;
