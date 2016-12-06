import React from 'react';
import PageContainer from '../components/PageContainer';
import { render } from 'react-dom'

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

const About_us = withRouter(
  React.createClass({
  
  render() {
    return (
      <div>
      <div id="base" class="">
      <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
      <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
      <link href="i/css/user_login_page/styles.css" type="text/css" rel="stylesheet"/>

      <form onSubmit={this.handleSubmit}>
        <div id="u0" class="ax_shape">
          <img id="u0_img" class="img " src="i/images/about_us/about.png"/>

          <div id="u1" class="text">
            <p><span></span></p>
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


    

<Link to = '/index_home'>
        <div id="u24" class="ax_shape">
          <img id="u24_img" class="img " src="i/images/user_check_operation_reservation_page/u23.png"/>

          <div id="u25" class="text">
            <p><span></span></p>
          </div>
        </div>
</Link>

       
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
                    <p><span><a href = 'http://www.miitbeian.gov.cn'>京ICP备案16059247号</a></span></p>
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
export default About_us;