import React from 'react';
import TopBar from './components/TopBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar
        sectionList={[
          {
            url:'',
            icon:'user',
            label:'Users Manage'
          },
          {
            url:'',
            icon:'tasks',
            label:'Tasks Manage'
          },
          {
            url:'',
            icon:'users',
            label:'Member Manage'
          },
          {
            url:'',
            icon:'sitemap',
            label:'Organization Manage'
          }
          ]}></TopBar>
    </div>
  );
}

export default App;
