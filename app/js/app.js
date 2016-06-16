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
  About,
  Home,
  Messages,
  Profile,
  Order,
  Index_home,
  Login,
  AdminLogin,
  Register,
  Reservation,
  CheckReservation,
} from './pages';

const pages = {
  home: Home,
  about: About,
  profile: Profile,
  messages: Messages,
  order:Order,
  index_home:Index_home,
  login:Login,
  adminLogin:AdminLogin,
  register:Register,
  reservation:Reservation,
  checkReservation:CheckReservation,
  
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
        <div className="adm-main">
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

    if (pages[page]) {
      return React.createElement(
        pages[page],
        {
          breadcrumb: breadcrumb
        }
      );
    }

    return (
      <PageContainer
        breadcrumb={breadcrumb}
      >
        你访问页面是: 「{this.props.params.page}」
      </PageContainer>
    );
  }
});
const Logout = React.createClass({
  componentDidMount() {
    auth.logout()
  },

  render() {
    return <p>You are now logged out</p>
  }
})

function requireAuth(nextState, replace) {
  console.log(auth.loggedIn())
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
      <Route path = "adminlogin" component = {AdminLogin}/>      
      <Route path = "logout" component = {Logout}/>      
      <Route path=":page" component={Page} onEnter={requireAuth}  />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('app-root'));
});
