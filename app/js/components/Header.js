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
            <Dropdown
              title={[<Icon icon="group" key="hey" />, ' Hey, Jude']}
              navItem
            >
              <Dropdown.Item
                closeOnClick
                linkComponent={Link}
                linkProps={{
                  to: {pathname: '/profile', query: {breadcrumb: '个人资料'}},
                  onClick: this.handleClick
                }}
              >
                <Icon icon="user" /> {' 个人资料'}
              </Dropdown.Item>
              <Dropdown.Item>
                <Icon icon="cog" /> {' 系统设置'}
              </Dropdown.Item>
            </Dropdown>
            <NavItem
              linkComponent={Link}
              linkProps={{
                to: {
                  pathname: '/messages',
                  query: {breadcrumb: '通知'}
                },
                onClick: this.handleClick
              }}
            >
              <Icon icon="envelope-o" />
              {' 通知 '}
              <Badge
                amStyle="warning"
                round
              >
                7
              </Badge>
            </NavItem>
            <NavItem
              className="am-dropdown"
              href="#"
            >
              <Icon icon="sign-out" /> {' 退出登录'}
            </NavItem>
          </Nav>
        </CollapsibleNav>
      </Topbar>
    );
  }
});

export default Header;
