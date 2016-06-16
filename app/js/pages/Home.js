import React from 'react';
import PageContainer from '../components/PageContainer';
import {
  Grid,
  Col,
  AvgGrid,
  Icon,
  Table,
  Badge,
  Dropdown,
  Panel,
  List,
  ListItem,
  Progress,
  ButtonGroup,
  Button,
  ButtonToolbar,
} from 'amazeui-react';

const Home = React.createClass({
  renderIntroList() {
    const list = [
      {
        color: 'success',
        icon: 'file-text',
        title: '新增页面',
        number: 2300
      },
      {
        color: 'warning',
        icon: 'briefcase',
        title: '成交订单',
        number: 308
      },
      {
        color: 'danger',
        icon: 'group',
        title: '昨日访问',
        number: 800223
      },
      {
        color: 'secondary',
        icon: 'desktop',
        title: '在线用户',
        number: 3200
      }
    ];

    return list.map((item, index) => {
      const {
        color,
        icon,
        title,
        number
        } = item;
      const handleClick = (title, e) => {
        e.preventDefault();
        console.log(`点击了：【${title}】`);
      }

      return (
        <li
          key={index}
          className="am-text-center"
        >
          <a
            href="#"
            className={`am-text-${color}`}
            onClick={handleClick.bind(null, title)}
          >
            <Icon button icon={icon} />
            <br />
            {title}
            <br />
            {number}
          </a>
        </li>
      );
    });
  },

  renderTable() {
    const data = [
      {
        user: 'John Clark',
        task: 'Business management',
        orders: '20',
      },
      {
        user: '样清风',
        task: '公司 Logo 设计',
        orders: '2',
        last: true,
      },
      {
        user: '詹姆斯',
        task: '业务数据软件开发',
        orders: '10',
      },
      {
        user: '菲尔德',
        task: '适配所有网站',
        orders: '50',
      },
      {
        user: '贺绿汀',
        task: '费尔多操心',
        orders: '22',
      },
    ];

    return (
      <Table striped className="am-margin-bottom">
        <thead>
        <tr>
          <th>ID</th>
          <th>用户名</th>
          <th>最后任务</th>
          <th>成交订单</th>
          <th>管理</th>
        </tr>
        </thead>
        <tbody>
        {
          data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.user}</td>
                <td>{item.task}</td>
                <td>
                  <Badge
                    amStyle={item.last ? 'danger' : 'secondary'}
                  >
                    {item.orders}
                  </Badge>
                </td>
                <td>
                  <Dropdown
                    title={<Icon icon="cog" />}
                    btnStyle="default"
                    btnSize="xs"
                  >
                    <Dropdown.Item>编辑</Dropdown.Item>
                    <Dropdown.Item>删除</Dropdown.Item>
                  </Dropdown>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </Table>
    );
  },

  renderPanles() {
    const toolbar = (
      <div className="am-cf">
        <ButtonToolbar className="am-fl">
          <ButtonGroup>
            <Button amSize="xs">
              <Icon icon="check" />
            </Button>
            <Button amSize="xs">
              <Icon icon="pencil" />
            </Button>
            <Button amSize="xs">
              <Icon icon="times" />
            </Button>
          </ButtonGroup>
        </ButtonToolbar>

        <div className="am-fr">
          <Button
            amSize="xs"
          >
            删除
          </Button>
        </div>
      </div>
    );

    return (
      <Grid
        className="adm-home-panels"
        collapse
      >
        <Col
          sm={12}
          md={6}
        >
          <Panel
            header= {[<Icon icon="angle-down" className="am-fr" key="uploadIcon" />, '文件上传']}
            collapsible
            defaultExpanded
          >
            <List
              className="adm-up-list"
            >
              <ListItem>
                <h3>
                  <Icon icon="upload" />
                  Kong-cetian.mp3
                </h3>
                <p>3.3 of 5MB - 5 mins - 1MB/Sec</p>
                <Progress now={50} active amStyle="secondary" amSize="sm" />
              </ListItem>
              <ListItem>
                <h3>
                  <Icon icon="check" />
                  好人-cetian.mp3
                </h3>
                <p>3.3 of 5MB - 5 mins - 3MB/Sec</p>
              </ListItem>
              <ListItem>
                <h3>
                  <Icon icon="check" />
                  其实都没有.mp3
                </h3>
                <p>3.3 of 5MB - 5 mins - 3MB/Sec</p>
              </ListItem>
            </List>
          </Panel>
        </Col>

        <Col
          sm={12}
          md={6}
        >
          <Panel
            header= {[<Icon icon="bars" className="am-fr" key="uploadIcon" />, '任务列表']}
            collapsible
            defaultExpanded
          >
            <List className="adm-home-tasks">
              <ListItem>
                <div className="adm-task-meta"> Posted on 25/1/2120 by John Clark</div>
                <div className="adm-task-bd">
                  The starting place for exploring business management; helping new managers get started and experienced managers get better.
                </div>
                {toolbar}
              </ListItem>
              <ListItem>
                <div className="adm-task-meta"> Posted on 25/1/2120 by 呵呵呵</div>
                <div className="adm-task-bd">
                  基兰和狗熊出现在不同阵营时。基兰会获得BUFF，“装甲熊憎恨者”。狗熊会获得BUFF，“时光老人憎恨者”。
                </div>
                {toolbar}
              </ListItem>
            </List>
          </Panel>
        </Col>
      </Grid>
    );
  },

  render() {
    return (
      <PageContainer>
        <AvgGrid
          sm={2}
          md={4}
          className="am-margin-bottom am-padding-vertical am-text-center adm-intro-list"
        >
          {this.renderIntroList()}
        </AvgGrid>
        {this.renderTable()}
        {this.renderPanles()}
      </PageContainer>
    );
  }
});

export default Home;
