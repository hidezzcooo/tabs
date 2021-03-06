/* eslint react/no-multi-comp:0, no-console:0 */
import 'rc-tabs/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from '../src/SwipeableTabContent';
import SwipeableInkTabBar from '../src/SwipeableInkTabBar';

const contentStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px',
  backgroundColor: '#fff',
};

const makeTabPane = key => (
  <TabPane tab={`选项${key}`} key={key}>
    <div style={contentStyle}>
      {`选项${key}内容`}
    </div>
  </TabPane>
);

const makeMultiTabPane = (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(makeTabPane(i));
  }
  return result;
};

const Component = () => (
  <div>
    <h1>pageSize = 5, speed = 5</h1>
    <div>
      <Tabs
        renderTabBar={() =>
          <SwipeableInkTabBar
            pageSize={5}
            speed={5}
          />
        }
        renderTabContent={() => <TabContent />}
        defaultActiveKey="8"
      >
        {makeMultiTabPane(11)}
      </Tabs>
    </div>
    <h1>pageSize = 3, speed = 10</h1>
    <div>
      <Tabs
        renderTabBar={() =>
          <SwipeableInkTabBar
            pageSize={3}
            speed={10}
          />
        }
        renderTabContent={() => <TabContent/>}
        defaultActiveKey="2"
      >
        {makeMultiTabPane(7)}
      </Tabs>
    </div>
    <h1>pageSize = 3, speed = 10, tabBarPosition='bottom'</h1>
    <div>
      <Tabs
        tabBarPosition="bottom"
        renderTabBar={() =>
          <SwipeableInkTabBar
            pageSize={3}
            speed={10}
          />
        }
        renderTabContent={() => <TabContent/>}
        defaultActiveKey="2"
      >
        {makeMultiTabPane(7)}
      </Tabs>
    </div>
  </div>
);

ReactDOM.render(<Component />, document.getElementById('__react-content'));
