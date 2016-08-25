import React from 'react';
import {
  Link,
} from 'react-router';
import {
  Topbar,
  CollapsibleNav,
  Nav,
  NavItem,
  Icon,
  Badge,
  Dropdown,
} from 'amazeui-react';
import auth from './auth'
import Logout from '../pages/Logout';
const Header = React.createClass({
  handleClick() {
    if (matchMedia && matchMedia('(max-width: 640px)').matches) {
      this.refs.topbar.handleToggle();
    }
  },

  render() {
    return (
      <Topbar
        brand="名医飞刀,一线名医在线预约平台"
        toggleNavKey="nav"
        inverse
        fluid
        ref="topbar"
      >
        <CollapsibleNav
          eventKey="nav"
        >
          <Nav
            className="am-topbar-right"
            topbar
          >
          <NavItem className = "am-dropdown" href = '#'>
          <Link to = '/index_home'>
          <Icon icon="home" /> {'网站首页'}
          </Link>
          </NavItem>
           
             {auth.loggedIn()?(
            <Dropdown
              title={[<Icon icon="group" key="hey" />, auth.getUsername()]}
              navItem
            >                     
              <Dropdown.Item
                closeOnClick
                linkComponent={Link}
                linkProps={{
                  to: {pathname: '/user_index'},
                  onClick: this.handleClick
                }}
              >
                <Icon icon="user" /> {'用户首页'}
              </Dropdown.Item>                             
            </Dropdown>):(<NavItem></NavItem>)}
            <NavItem
              className="am-dropdown"
              href="#"
            >
            {auth.loggedIn()?(
              <Link to = '/Logout'>
              <Icon icon="sign-out" /> {' 退出登录'}
              </Link>
            ) :(
              <Link to = '/login'>
              <Icon icon="sign-in" /> {' 登录'}
              </Link>)
            }
            
            </NavItem>
            
          </Nav>
        </CollapsibleNav>
      </Topbar>
    );
  }
});

export default Header;
