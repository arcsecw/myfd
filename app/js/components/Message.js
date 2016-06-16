import React from 'react';
import PageContainer from '../components/PageContainer';
import {
    Image
} from 'amazeui-react';
const Message = React.createClass({
  propTypes: {
    event: React.PropTypes.object,
  },

  renderDetail() {
    const event = this.props.event;

    if (event) {
      const {
        created_at,
        type,
        repo,
        actor,
        } = event;
      return (
        <div>
          <a
            href={`https://github.com/${actor.login}`}
            target="_blank"
            className="msg-avatar"
            
          >
            <Image
              src={actor.avatar_url}
              alt={actor.login}
              width = "140"
              height = "140"
              radius
            />
            <strong>{actor.login}</strong>
          </a>
          <ul>
            <li><em>日期：</em>{created_at}</li>
            <li><em>项目：</em>
              <a
                href={`https://github.com/${repo.name}`}
                target="_blank"
              >
                {repo.name}
              </a>
            </li>
            <li><em>操作：</em>{type}</li>
          </ul>
        </div>
      );
    }

    return (
      <p>
        Oops, 无法获取消息...
        <br />
        Message ID: {this.props.params.id}
      </p>
    );
  },

  render() {
    return (
      <div
        className="adm-msg-body"
      >
        <div className="adm-msg-content">
          {this.renderDetail()}
        </div>
      </div>
    );
  }
});
//公用message详情组件
export default Message;
