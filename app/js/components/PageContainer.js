import React from 'react';
import {
  Link,
} from 'react-router';
import {
  Breadcrumb,
  Icon,
} from 'amazeui-react';

const BreadCrumbLink = React.createClass({
  render() {
    const {
      active,
      ...props,
      } = this.props;

    return (
      <Breadcrumb.Item
        active={active}
        linkComponent={Link}
        linkProps={props}
      >
        {this.props.children}
      </Breadcrumb.Item>
    );
  }
});

const PageContainer = React.createClass({
  propTypes: {
    breadcrumb: React.PropTypes.string,
    noBreadcrumb: React.PropTypes.bool,
  },

  renderBreadcrumb() {
    const {
      noBreadcrumb,
      breadcrumb,
      } = this.props;

    return noBreadcrumb ? null : (
      <Breadcrumb slash>
        <BreadCrumbLink
          to="/home"
          active={!!breadcrumb}
        >
          <Icon icon="home" />
          首页
        </BreadCrumbLink>

        {breadcrumb ? (
          <Breadcrumb.Item active>{breadcrumb}</Breadcrumb.Item>
        ) : null}
      </Breadcrumb>
    );
  },

  render() {
    return (
      <div
        className={`adm-page ${this.props.className}`}
      >
        {this.renderBreadcrumb()}
        {this.props.children}
      </div>
    );
  }
});

export default PageContainer;
