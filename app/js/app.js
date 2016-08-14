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

// style
//import '../less/app.less';

// components
import {
  Header,
  Message,
  NoMessage,
  Sidebar,
  PageContainer,
} from './components';
import auth from './components/auth'
import {
  Home,
  Messages,
  Profile,
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

const pages = {
  home: Home,
  profile: Profile,
  messages: Messages,
  order: Order,
  index_home: Index_home,
  login: Login,
  adminLogin: AdminLogin,
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
    auth.login()
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
    console.log(pages[page])
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

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="messages" component={Messages}>
        <Route path=":id" component={Message} />
        <IndexRoute component={NoMessage} />
      </Route>
      <Route path = "login" component = {Login}/>      
      <Route path = "logout" component = {Logout}/>      
      <Route path = "adminlogin" component = {AdminLogin}/>      
      <Route path = "register_user" component = {Register_user}/>      
      <Route path = "register_doctor" component = {Register_doctor}/>      
      <Route path = "register_hospital" component = {Register_hospital}/> 
      <Route path = "index_home" component = {Index_home}/>      
      <Route path = "query_result" component = {Query_result}/>      
      <Route path = "doctor_list" component = {Doctor_list}/>      
      <Route path = "institution_list" component = {Institution_list}/>      
      <Route path=":page" component={Page} onEnter={requireAuth}  />
      <IndexRoute component={Index_home} />
    </Route>
  </Router>
);
document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('app-root'));
});
