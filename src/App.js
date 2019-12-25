import React from 'react';
import { Router, Route, NavLink, Switch } from 'react-router-dom';
import TopBar from './components/TopBar';
import './App.css';

function App(props) {
  return (
    <div className="App-container">
      <div className="sidebar">
        <div className="sidebar-header">Components</div>
        <div className="sidebar-nav">
          <div className="sidebar-nav-section">
            <NavLink exact activeClassName="link-active" to="/">Home</NavLink>
          </div>
          <div className="sidebar-nav-section">
            <NavLink activeClassName="link-active" to="/topbar">导航</NavLink>
          </div>
        </div>
        <div className="sidebar-link">
          <a className="sidebar-link-a"></a>
        </div>
      </div>
      <div className="viewer">
        <div className="viewer-card">
          <Switch>
            <Route path="/topbar" component={TopBar} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
