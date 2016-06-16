import React from 'react';
import {
  Link,
} from 'react-router';
import {
  Grid,
  Col,
  List,
  ListItem,
  Icon,
  Badge,
} from 'amazeui-react';
import PageContainer from '../components/PageContainer';
import MessageBar from '../components/MessageBar';

const Messages = React.createClass({
  getInitialState() {
    return {
      dataSource: [],
      event: null,
    };
  },

  componentWillMount() {
    if (!window.fetch) {
      return console.error('fetch API is not supported!');
    }

    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }

    fetch('https://api.github.com/orgs/amazeui/events')
      .then(checkStatus)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.updateDataSource(data);
      })
      .catch(error => {
        console.log('Request failed: ', error)
      });
  },

  updateDataSource(data) {
    this.setState({
      dataSource: data,
    })
  },

  formatDate(date) {
    date = new Date(date);

    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  },

  setEventData(event) {
    this.setState({
      event: event,
    });
  },

  renderEventType(type) {
    type = type.replace('Event', '');
    const styleMap = {
      Watch: 'success',
      Fork: 'secondary',
      Issues: 'danger',
      IssueComment: 'warning',
    };

    return (
      <Badge
        amStyle={styleMap[type]}
        round
      >
        {type}
      </Badge>
    );
  },

  renderList() {
    const { dataSource } = this.state;

    return dataSource.length ? (
      <List
        className="adm-msg-list"
      >
        {dataSource.map((event, index) => {
          const {
            id,
            type,
            created_at,
            actor,
            } = event;

          return (
            <ListItem
              key={`message-${id}`}
              onClick={this.setEventData.bind(this, event)}
              linkComponent={Link}
              linkProps={{
              to: `/messages/${id}`
            }}
            >
              <div
                className="adm-msg-list-main am-text-truncate"
              >
                {this.renderEventType(type)}
                {this.formatDate(created_at)} <em>by</em> {actor.login}
              </div>
              <Icon
                icon="chevron-right"
                className="adm-msg-icon"
              />
            </ListItem>
          )
        })}
      </List>
    ) : (
      <div
        className="adm-msg-loading"
      >
        <Icon spin icon="spinner" />
      </div>
    );
  },

  render() {
    const {
      children,
      params,
      ...props
      } = this.props;
    const hasId = params.id ? 'has-id' : '';

    return (
      <PageContainer
        {...props}
        noBreadcrumb
        className="adm-page-msg"
      >
        <Grid
          collapse
          className={hasId}
        >
          <Col
            sm={12}
            md={5}
            className={`adm-msg-col`}
          >
            <MessageBar>
              通知
            </MessageBar>
            {this.renderList()}
          </Col>
          <Col
            sm={12}
            md={7}
            className="adm-msg-detail"
          >
            <MessageBar>
              <Link
                to="/messages"
                className="am-show-sm-only"
              >
                <Icon icon="mail-reply" />
              </Link>
            </MessageBar>

            {children ? React.cloneElement(
              children,
              Object.assign(
                {},
                children.props,
                {
                  event: this.state.event
                }
              )
            ) : null}
          </Col>
        </Grid>
      </PageContainer>
    );
  }
});

export default Messages;
