import React from 'react';
import {
  Link,
} from 'react-router';
import {
  List,
  ListItem,
  Icon,
} from 'amazeui-react';

const navs = [
  {
    id:'price_manage',
    title:'价格管理',
    icon:'info',
  },
  {
    id:'account_manage',
    title:'账户管理',
    icon:'info',

  },
    {
    id:'user_manage',
    title:'用户管理',
    icon:'info'
  },
  
  {
    id: 'doctor_list',
    title: '医生列表',
    icon: 'info'
  },
  {
    id:'user_index',
    title:'用户首页',
    icon:'phone'
  },
   {
    id:'institution_list',
    title:'机构列表',
    icon:'phone',
  },
  {
    id: 'order',
    title: '订单管理',
    icon: 'info'
  },
  {
    id: 'index_home',
    title: '网站首页',
    icon: 'info'
  },
  {
    id: 'login',
    title: '用户登录',
    icon: 'info'
  },
  {
    id:'adminLogin',
    title:'管理员登录',
    icon: 'info'
    
  },
  {
    id:'register_user',
    title:'用户注册',
    icon:'info'
  },
  {
    id:'register_doctor',
    title:'医生注册',
    icon:'phone'
  },
   {
    id:'register_hospital',
    title:'机构注册',
    icon:'phone',
  },
  {
    id:'checkReservation',
    title:'用户核对预约',
    icon:'phone',
  }, 
  {
    id:'user_reservation',
    title:'用户预约',
    icon:'phone',
  },
  {
    id:'query_result',
    title:'查询结果',
    icon:'phone',
  },
  {
    id:'system_manage',
    title:'飞刀平台订单管理',
    icon:'phone',
  },
  {
    id:'manageRoot',
    title:'飞刀平台系统管理',
    icon:'info',
  }, 

];
const Siderbar = React.createClass({
  propTypes: {
    active: React.PropTypes.bool,
  },

  getInitialState() {
    return {
      activeIndex: null
    };
  },

  handleClick(index, e) {
    e.preventDefault();

      this.setState({
        activeIndex: this.state.activeIndex === index ? null: index,
      });
  },

  renderSubNavs(lenth) {
    let subNavs = [];

    for (let i = 0; i <= lenth; i++) {
      subNavs.push(
        <ListItem
          key={`subNav-${i}`}
        >
          <Link
            to={{pathname: `page-${i}`, query: {breadcrumb: `子页面 ${i}`}}}
            activeClassName="active"
          >
            <Icon icon="angle-right" />
            {` 子菜单 ${i}`}
          </Link>
        </ListItem>
      )
    }

    return (
      <List
        className="adm-sidebar-sub"
      >
        {subNavs}
      </List>
    );
  },

  renderItems() {
    return navs.map((nav, i) => {
      const {
        subNav,
        id,
        icon,
        title,
        } = nav;
      const subActive = this.state.activeIndex === i ? 'sub-active' : null;

      return (
        <ListItem
          key={`nav-${i}`}
          className={subActive}
        >
          <Link
            activeClassName="active"
            to={{pathname: `/${id}`, query: {breadcrumb: title}}}
            onClick={subNav ? this.handleClick.bind(this, i) : null}
          >
            <Icon icon={subActive ? 'folder-open' : icon} />
            {` ${title}`}
          </Link>
          {subNav ? this.renderSubNavs(subNav) : null}
        </ListItem>
      );
    });
  },

  render() {
    const active = this.props.active ? 'active' : '';

    return (
      <div
        className={`adm-sidebar ${active}`}
      >
        <List>
          {this.renderItems()}
        </List>
      </div>
    );
  }
});

export default Siderbar;
