import React from 'react';

import Topbar from '../components/TopBar';
import Card from './Card';

function NavigationView(props) {
  return (
    <div className="flex-col w-full">
      <Card title="顶栏" props={{sectionList:[
        {url:'/url1',icon:'user',label:'用户'},
        {url:'/url2',icon:'heart',label:'收藏'},
        {url:'/url3',icon:'sitemap',label:'组织'}
      ]}}>
        <Topbar sectionList={[
          {url:'/url1',icon:'user',label:'用户'},
          {url:'/url2',icon:'heart',label:'收藏'},
          {url:'/url3',icon:'sitemap',label:'组织'}
        ]}></Topbar>
      </Card>
    </div>
  );
}

export default NavigationView;
