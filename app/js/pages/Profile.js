import React from 'react';
import PageContainer from '../components/PageContainer';
import {
  Grid,
  Col,
  Form,
  Input,
  FormGroup,
  Progress,
  Panel,
} from 'amazeui-react';

const Profile = React.createClass({
  render() {
    return (
      <PageContainer
        {...this.props}
      >
        <h2>个人资料</h2>
        <hr />

        <Grid>
          <Col
            sm={12}
            lg={4}
            lgPush={8}
          >
            <Panel>
              <p>
                <img
                  className="am-circle am-img-thumbnail am-img-responsive"
                  src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/120/h/120/q/80" alt="" />
              </p>
              <p>你可以使用 <a href="http://gravatar.com" target="_blank">
                Gravatar</a> 提供的头像或者使用本地上传头像。 </p>
              <Form>
                <Input
                  type="file"
                  help="选择一个文件"
                />
                <Input
                  type="submit"
                  amStyle="primary"
                  value="上传"
                />
              </Form>
            </Panel>
          </Col>

          <Col
            sm={12}
            lg={8}
            lgPull={4}
          >
            <Form horizontal>
              <Input
                label="用户名"
                placeholder="User name"
              />
              <Input
                label="Email"
                type="email"
                placeholder="Your email"
              />
              <Input
                label="密码"
                type="password"
                placeholder="Your password"
              />
              <Input
                type="textarea"
                label="简介"
                placeholder="BIO"
              />
              <Input
                type="submit"
                amStyle="primary"
                value="保存"
              />
            </Form>
          </Col>
        </Grid>
      </PageContainer>
    );
  }
});

export default Profile;
