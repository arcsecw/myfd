import React from 'react';
import {
  Link,
} from 'react-router';
import {
    Grid,
    Col,
    Container,
    Panel,
    Nav,
    NavItem,
    Button,
    Thumbnail,
    Form,
    Input,
    Image,
    
} from 'amazeui-react'
import SelectArea from './SelectArea'
//头部
var HeaderTop = React.createClass({
  render() {
    return (
      
      <Grid  >
      <Col sm = {4}>
     <SelectArea/>
     </Col>
     <Col sm = {5}>      
      <Nav pills>
    <NavItem active href="#">登录</NavItem>
    <NavItem href="#">手机app</NavItem>
    <NavItem href="#">客户服务</NavItem>
    <NavItem href="#">网站导航</NavItem>
    
  </Nav>
  </Col>
     </Grid>
    );
  }
});
var HeaderSearchBar = React.createClass({
  render(){
    return(
      <Grid >      
      <Col sm = {7}>
      <Form inline>
    <Input placeholder="搜索点什么东西吧" icon="search" />
    {'\u00a0'}
    <Input type="submit" amStyle="primary" value="搜索" standalone/>
  </Form>
      </Col>
      <Col sm = {5}>
      <Button amStyle="secondary">直接预约</Button>
      </Col>
      </Grid>
    )
  }
})
var HeaderLogo = React.createClass({
  render(){
    return (
       <Image
        standalone
        width = "120"
        heigth = "40"
        src="/i/logo.png"/>
    )
  }
})
var Header1 = React.createClass({
  render(){
    return (
      <div>
      <Grid>
      <Col sm = {12}>
      <HeaderTop/>
      </Col>
      </Grid>
      <Grid>
      <Col sm = {12}>
      <Image
      src="/i/touch/icon-128x128.png"
      width="100%"
      height="80"
      radius />
      </Col>
      </Grid>
       <Grid>
       <Col sm = {3}>
        <HeaderLogo/>
       </Col>
       <Col sm = {9} end >
       <HeaderSearchBar/>
       </Col>
       </Grid>
       </div>
    )
  }
})

export default Header1;