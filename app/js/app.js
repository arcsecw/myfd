import React from 'react';
import {render} from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
} from 'react-router';
import {
  Icon,
} from 'amazeui-react';
import 'whatwg-fetch'
// style
//import '../less/app.less';

// components
import {
  Header,
  Sidebar,
  PageContainer,
} from './components';
import auth from './components/auth'
import {
  Order,
  Index_home,
  Login,
  AdminLogin,
  Register_user,
  Register_doctor,
  CheckReservation,
  Register_hospital,
  ManageRoot,
  User_reservation,
  Doctor_list,
  Institution_list,
  Query_result,
  System_manage,
  User_manage,
  Price_manage,
  Account_manage,
  User_index,
} from './pages';
//所有页面必须要import才有能被正确处理 ps 想要import from 文件夹 需要在文件夹的index.js 里export一下
const pages = {
  order: Order,
  index_home: Index_home,
  login: Login,
  register_user: Register_user,
  register_doctor: Register_doctor,
  checkReservation: CheckReservation,
  register_hospital: Register_hospital,
  manageRoot: ManageRoot,
  user_reservation: User_reservation,
  doctor_list: Doctor_list,
  institution_list: Institution_list,
  query_result: Query_result,
  system_manage: System_manage,
  user_manage: User_manage,
  price_manage: Price_manage,
  account_manage: Account_manage,
  user_index:User_index,
};

//下面的router里面有一个遍历这个map的操作，将map里所有的页面加载到router中 也就是说不在这个数组里声明一下的话，必须要在下面的router组里写一遍，否则无法通过url访问到对应的组件
//1个人2医生助理3医生4医疗机构5系统管理员
const auth_map = {
                    order:                ['2'],
                    index_home:           ['5','4','3','1','0'],
                    '':           ['5','4','3','1','0'],
                    login:                ['5','4','3','2','1','0'],
                    register_user:        ['5','4','3','2','1','0'],
                    register_doctor:      ['5','4','3','2','1','0'],
                    checkReservation:     ['1'],
                    register_hospital:    ['5','4','3','2','1','0'],
                    manageRoot:           ['5'],
                    user_reservation:     ['1'],
                    doctor_list:          ['5','4','3','0','1'],
                    institution_list:     ['5','4','3','0','1'],
                    query_result:         ['5','4','3','0','1'],
                    system_manage:        ['5'],
                    user_manage:          ['5'],
                    price_manage:         ['5'],
                    account_manage:       ['5'],
                    user_index:           ['1'],
                    adminlogin:           ['5','4','3','2','1','0'],
                 }
const role_replace = {
                    '5':'user_manage',
                    '4':'index_home',
                    '3':'index_home',
                    '2':'order',
                    '1':'index_home',
                    '0':'login',
                 }

//存储了页面的访问权限
var App = React.createClass({
  getInitialState() {
    return {
      sidebarActive: false,
      loggedIn: auth.loggedIn(),
    };
  },
  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },
  toggleSidebar() {
    this.setState({
      sidebarActive: !this.state.sidebarActive
    });
  },
  componentWillMount() {
    auth.onChange = this.updateAuth
  },
  render() {
    const {
      sidebarActive,
    } = this.state;

    return (
      <div className="adm-container">
        <Header />
        <Sidebar active={sidebarActive} />
        <div className="adm-main12">
          {this.props.children}
        </div>
        <Icon
          button
          amStyle="primary"
          icon={sidebarActive ? 'close' : 'bars'}
          className="adm-sidebar-toggle am-show-sm-only"
          onClick={this.toggleSidebar}
          />
      </div>
    );
  },
});

const Page = React.createClass({
  render() {
    const page = this.props.params.page;
    const {query} = this.props.location;
    const breadcrumb = query && query.breadcrumb;
    const location = this.props.location
    if (pages[page]) {
      return React.createElement(
        pages[page],
        {
          breadcrumb: breadcrumb,
          query: query
        }
      );
    }

    return (
      <PageContainer
        query = {query}
        breadcrumb={breadcrumb}

        >
        你访问页面是: 「{this.props.params.page}」
      </PageContainer>
    );
  }
});
const Logout =  React.createClass({
  componentDidMount() {
    console.log("logout")
    auth.logout()
  },

  render() {
    return <p>You are now logged out</p>
  }
})
//根据每个页面的访问控制表以及未授权用户访问强制跳转表控制页面权限
function requireAuth(nextState, replace) {
  var pathname = nextState.location.pathname
  if(pathname!=undefined){pathname = pathname.replace('/','') } 
  var role = auth.getRole()
  
  if (auth_map[pathname]!=undefined && auth_map[pathname].indexOf(role)!=-1) {
  }
  else{
    console.log(pathname)
    console.log(role)
    alert("您无权访问此页面")
    replace({
      pathname: role_replace[role],
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
var index_component = Index_home
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}  >
      <Route path = "login" component = {Login} />      
      <Route path = "logout" component = {Logout} />      
      <Route path = "adminlogin" component = {AdminLogin} onEnter={requireAuth}  />      
      <Route path = "register_user" component = {Register_user} onEnter={requireAuth} />      
      <Route path = "register_doctor" component = {Register_doctor} onEnter={requireAuth} />      
      <Route path = "register_hospital" component = {Register_hospital} onEnter={requireAuth} /> 
      <Route path = "index_home" component = {Index_home} onEnter={requireAuth} />      
      <Route path = "query_result" component = {Query_result}onEnter={requireAuth}  />      
      <Route path = "doctor_list" component = {Doctor_list} onEnter={requireAuth} />      
      <Route path = "institution_list" component = {Institution_list} onEnter={requireAuth} />      
      <Route path=":page" component={Page} onEnter={requireAuth}  />
      <IndexRoute component={Index_home} onEnter={requireAuth} />
    </Route>
  </Router>
);
document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('app-root'));
});
