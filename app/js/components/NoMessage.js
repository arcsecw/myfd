import React from 'react';
import {
  Icon,
} from 'amazeui-react';

const NoMessage = React.createClass({
  render() {
    return (
      <div className="adm-msg-default">
        <Icon icon="frown-o" />
        <div>
          未选取消息
        </div>
      </div>
    );
  }
});
// 没有消息的特殊页面
export default NoMessage;
