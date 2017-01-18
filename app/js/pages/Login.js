import React from 'react';
import PageContainer from '../components/PageContainer';
import { render } from 'react-dom'
import {
  AboutUs
} from '../components/FontComponents'
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
  Modal,
  ModalTrigger,
} from 'amazeui-react';
import auth from '../components/auth'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

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
const role_index = {
                  '5':'user_manage',
                  '4':'index_home',
                  '3':'index_home',
                    '2':'order',
                    '1':'index_home',
                    '0':'index_home',
}
const Login = withRouter(
  React.createClass({
  getInitialState() {
      return {
        error: false
      }
    },
    handleSubmit:function(e){
     e.preventDefault();
      const email = this.refs.email.value
      const pass = this.refs.pass.value
      const role = '1'
      if(!email||!pass){
      alert("用户名或密码不可为空");
    }else{
      auth.logout()
      auth.user_login(email, pass, (loggedIn) => {
        if (!loggedIn){
          
          console.log(email+pass)
          return this.setState({ error: true })
      }

        const { location } = this.props

        if (location.state && location.state.nextPathname) {
          this.props.router.replace(location.state.nextPathname)
        } else {
          this.props.router.replace(role_index[auth.getRole()])
        }
      })
    }
   },
  render() {
    return (
      <div>
      <div id="base" class="">
      <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
      <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
      <link href="i/css/user_login_page/styles.css" type="text/css" rel="stylesheet"/>

      <form onSubmit={this.handleSubmit}>
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
          <Link to = '/register_user'>
          <div id="u9" class="text">
            <p><span>立即注册</span></p>
          </div>
          </Link>
        </div>


        <div id="u10" class="ax_text_field">
          <input  ref="email"  id="u10_input" type="text"/>
        </div>


        <div id="u11" class="ax_text_field">
          <input  ref="pass"  id="u11_input" type="password" />
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
            <p><span></span></p>
          </div>
        </div>


        <div id="u20" class="ax_paragraph">
          <img id="u20_img" class="img " src="i/resources/images/transparent.gif"/>

          <div id="u21" class="text">
            <p><span></span></p>
          </div>
        </div>


        <div id="u22" class="ax_h3">
          <img id="u22_img" class="img " src="i/resources/images/transparent.gif"/>

          <div id="u23" class="text">
            <p><span>会员登录</span></p>
          </div>
        </div>

<Link to = '/index_home'>
        <div id="u24" class="ax_shape">
          <img id="u24_img" class="img " src="i/images/user_check_operation_reservation_page/u23.png"/>

          <div id="u25" class="text">
            <p><span></span></p>
          </div>
        </div>
</Link>

        <div id="u26" class="ax_shape"  onClick={this.handleSubmit} >
          <img id="u26_img" class="img " src="i/images/user_login_page/u26.png"/>

          <div id="u27" class="text">
            <p ><span >登录</span></p>
          </div>      
        </div>
          </form>     

          <div id="u170" className="ax_paragraph">
            <img id="u170_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u171" className="text">
              <p><span><Link to = {auth.get_config()['about_us_url']}>关于我们</Link></span></p>
            </div>
          </div>


          <div id="u172" className="ax_paragraph">
            <img id="u172_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u173" className="text">
              <p><span><Link to = {auth.get_config()['connect_us_url']}>联系我们</Link></span></p>
            </div>
          </div>


          <div id="u174" className="ax_paragraph">
            <img id="u174_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u175" className="text">
              <p><span>服务条款</span></p>
            </div>
          </div>

          <div id="u888" className="ax_paragraph" style = {{
                            'position':'absolute',
                            'left':'450px',
                            'top':'530px',
                            'width':'200px',
                            'height':'1px',
                            'font-size':'14px',
                            'color':'#666666'
                    }}>
                    <img id="u125_img" className="img " src="i/resources/images/transparent.gif"/>

                    <div id="u126" className="text">
                                  <p><span><a href = 'http://www.miitbeian.gov.cn'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 京ICP备案16059247号</a></span></p>

                    <p><span><img src = 'http://www.beian.gov.cn/img/ghs.png'/><a href = 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802022799'>京公网安备 11010802022799号</a></span></p>
                    
                    </div>
                    </div>

          <div id="u176" className="ax_paragraph">
            <img id="u176_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u177" className="text">
              <p><span>媒体更新</span></p>
            </div>
            <div id="u194" class="ax_html_button">
              <input />
            </div>

          </div>
          </div>   

      </div>
    );
  }
}));
export default Login;