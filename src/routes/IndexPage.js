import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
// import { Button } from 'antd';
// import Button from 'antd/lib/button';
import SiderMenu from '../components/SiderMenu';
import { Layout, Icon } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';

const { Header, Content } = Layout;

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class App extends React.Component {
  componentDidMount() {
    this.enquireHandler = enquireScreen(mobile => {
      this.setState({
        isMobile: mobile,
      });
    });
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  // true 的时候默认不可见, false 的时候可见
  state = {
    collapsed: isMobile ? true : false,
    isMobile
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
    const { isMobile, collapsed } = this.state;
    console.log(isMobile);
    return (
      <Layout>
        <SiderMenu
          isMobile={ isMobile }
          collapsed={ collapsed }
          onClose={ this.onClose }
        />
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
