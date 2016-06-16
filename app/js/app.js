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
  
} from './pages';

const pages = {
  home: Home,
  profile: Profile,
  messages: Messages,
  order:Order,
  index_home:Index_home,
  login:Login,
  adminLogin:AdminLogin,
  register_user:Register_user,
  register_doctor:Register_doctor,
  checkReservation:CheckReservation,
  register_hospital:Register_hospital,
  manageRoot:ManageRoot,
  user_reservation:User_reservation,
  doctor_list:Doctor_list,
  institution_list:Institution_list,
  query_result:Query_result,
  system_manage:System_manage,
  
};

var App = React.createClass({
  getInitialState() {
    return {
      sidebarActive: false,
    };
  },

  toggleSidebar() {
    this.setState({
      sidebarActive: !this.state.sidebarActive
    });
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

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="messages" component={Messages}>
        <Route path=":id" component={Message} />
        <IndexRoute component={NoMessage} />
      </Route>
      <Route path=":page" component={Page} />
      <IndexRoute component={Home} />
      
    </Route>
  </Router>
);
document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('app-root'));
});
