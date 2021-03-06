import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import SiteHeader from '../header/index';
import DailyStatistics from '../dailyStatistics/index';
import LiveStatistics from '../liveStatistics/index';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;
import styles from './index.css';

const SiteHeaderWithRouter = withRouter(SiteHeader);

export default class App extends React.Component {
  render() {
    return ( <div>
      
        <Layout className="layout">
          <SiteHeaderWithRouter />
          <Content style={{ padding: '25px 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Route exact path="/" component={LiveStatistics} />
              <Route path="/daily" component={DailyStatistics} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      
  </div> );
  }
}
