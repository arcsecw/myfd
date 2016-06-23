import React from 'react';
import PageContainer from '../components/PageContainer';
import {
  Form,
  Input,
  FormGroup,
  Button,
  Icon,
  span,
  Grid,
  Col,
  UCheck,
  ButtonToolbar,
  ButtonGroup,
  ButtonCheck,
  Image,
  Thumbnail,
  Article,
  List,
  ListItem,
  DateTimeInput,
  PopoverTrigger,
  Popover,
  caption,
  Thumbnails,
  Text,
  View,
  Panel
}from 'amazeui-react';
var iconUser = <Icon icon="user" />;
var iconPwd = <Icon icon="lock" />;
var path1 = "i/companyLogo.png";
var Protocal = React.createClass({
  render() {
    return (
      <span><a href="#">《飞刀平台注册协议》</a></span>
    );
  }
});
var About = React.createClass({
  render() {
    return (
      <Col sm={6}>
        <div>
          <Form onSubmit={this.handleSubmit} horizontal>
            <Input label="用户" labelClassName="am-u-sm-3" wrapperClassName="am-u-sm-7" amSize="sm" ref="userName"/>
            <Input label="密码" labelClassName="am-u-sm-3" wrapperClassName="am-u-sm-7" amSize="sm" ref="passWord"/>
            <Input label="确认密码" labelClassName="am-u-sm-3" wrapperClassName="am-u-sm-7" amSize="sm" ref="repassWord" />
            <Input label="验证手机" labelClassName="am-u-sm-3" wrapperClassName="am-u-sm-7" amSize="sm" ref="verificatePhone"/>
            <Input label="验证码" labelClassName="am-u-sm-3" wrapperClassName="am-u-sm-7" amSize="sm" ref="verificateCode" inline/>
            <Grid>
              <Col>
                <Input label="短信验证" labelClassName="am-u-sm-3" wrapperClassName="am-u-sm-3" amSize="sm" ref="messageVerification" inline/>
              </Col>
              <Col sm={2}>
              <Button amSize="sm">获取短信验证码</Button>
              </Col>
            </Grid>
            <Grid>
              <Col sm={7}></Col>
              <Col sm={9}>
                <Input type="checkbox" name="doc-checkbox-2" label="我已阅读并同意"  inline/><a href="#" amSize="sm">《飞刀平台注册协议》</a>
              </Col>

            </Grid>

            <Grid>
              <Col sm={2}></Col>
              <Col sm={4}>
                <Input type="submit" value="提交" amStyle="success" amSize="sm"/>
              </Col>
            </Grid>
          </Form>
        </div>
      </Col>

    );
  }
});
export default About;

