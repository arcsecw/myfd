import React from 'react';
import {
  Link,
} from 'react-router';
import {
    Grid,
    Col,
    List,
    ListItem,
    Image,
    Badge,
    
} from 'amazeui-react'
var Qbzz = React.createClass({
  render() {
     
    return (
      <div>
      <Grid>
        <Col sm={3} className = 'padding-left-rem'>
          <div className = 'w-bg-green'>
            <h1>全部症状</h1>
          </div>
        </Col>
        <Col sm={9} className = 'padding-right-rem'>
          <div className = 'height30'>
          &nbsp;
          </div>
          <div className = 'height10 w-bg-green'>
          &nbsp;
          </div>
        </Col>
        <Col sm={3} className = 'padding-left-rem'>
             <List className = 'list-green'> 
      <ListItem href="http://www.amazeui.org" >
        关节
      </ListItem>
      <ListItem href="http://www.amazeui.org">
        脊椎
      </ListItem>
      <ListItem href="http://www.amazeui.org">
        四肢
      </ListItem>
      <ListItem href="http://www.amazeui.org">
      脑袋
      </ListItem>
    </List>
        </Col>
        <Col sm={6} className = 'padding-right-rem'>
          <Image
      src="/i/touch/icon-128x128.png"
      width="100%"
      height="200"
      radius />
        </Col>
        <Col sm={3} className = 'padding-right-rem'>
          <List static border>
      <ListItem><Badge amStyle="success">10分钟</Badge>脱下长日的假面</ListItem>
      <ListItem><Badge amStyle="success">11分钟</Badge>奔向梦幻的疆界</ListItem>
      <ListItem><Badge amStyle="success">12分钟</Badge>南瓜马车的午夜</ListItem>
      <ListItem><Badge amStyle="success">13分钟</Badge>昨天太近　明天太远</ListItem>
    </List>
        </Col>
      </Grid>
      </div>  
    );
  }
});
export default Qbzz;