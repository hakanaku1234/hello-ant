import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import logo from '../assets/logo.svg';
import { Link } from 'dva/router';
// import { Button } from 'antd';
// import Button from 'antd/lib/button';
import { Layout, Menu, Icon, Drawer } from 'antd';

const SubMenu = Menu.SubMenu;

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  // true 的时候默认不可见, false 的时候可见
  state = {
    collapsed: true,
  };

  // 切换布尔值，true 变成 false，false 变成 true
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onClose = () => {
    this.setState({
      collapsed: true,
    });
  };

  render() {
    return (
      <Layout>
        <Drawer
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={!this.state.collapsed}
          style={{
            padding: 0,
          }}
        >
          <Sider
            collapsed={this.state.collapsed}
            trigger={null}
            collapsible
            breakpoint="lg"
            width={256}
            className={styles.sider}
          >
            <div className={styles.logo} key="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
                <h1>Ant Design Pro</h1>
              </Link>
            </div>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
              style={{ padding: '16px 0', width: '100%' }}
            >
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="inbox" />
                <span>Option 3</span>
              </Menu.Item>
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </Sider>
        </Drawer>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {
};

export default connect()(App);
