import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import NavigationView from './views/NavigationView';
import DatePickerView from './views/DatePickerView';
import ListView from './views/ListView'
import TreeView from './views/TreeView'
import './App.css';

function App(props) {
  return (
    <div className="w-full h-full flex font-sans">
      <div className="sm:hidden w-1/8 h-screen shadow-md p-1 flex flex-col fixed">
        <span className="w-full block my-6 text-cyan text-center font-bold">Components</span>
        <div className="pl-2 flex flex-col items-start">
          <NavLink exact activeClassName="after after:bg-cyan after:absolute after:inset-y-0 after:-left-2 after:w-1 after:h-full text-cyan" className="inline-block font-bold relative text-gray-500 my-2" to="/">Home</NavLink>
          <NavLink exact activeClassName="after after:bg-cyan after:absolute after:inset-y-0 after:-left-2 after:w-1 after:h-full text-cyan" className="inline-block font-bold relative text-gray-500 my-2" to="/navigation">Navs</NavLink>
          <NavLink exact activeClassName="after after:bg-cyan after:absolute after:inset-y-0 after:-left-2 after:w-1 after:h-full text-cyan" className="inline-block font-bold relative text-gray-500 my-2" to="/datepicker">DatePicker</NavLink>
          <NavLink exact activeClassName="after after:bg-cyan after:absolute after:inset-y-0 after:-left-2 after:w-1 after:h-full text-cyan" className="inline-block font-bold relative text-gray-500 my-2" to="/currency">Currency</NavLink>
          <NavLink exact activeClassName="after after:bg-cyan after:absolute after:inset-y-0 after:-left-2 after:w-1 after:h-full text-cyan" className="inline-block font-bold relative text-gray-500 my-2" to="/tree">Tree</NavLink>
        </div>
        <div className="flex-grow text-cyan text-center flex justify-center items-end py-2 fa fa-github">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/LouisLuBrain/ReactComponents" className="sidebar-link-a">github</a>
        </div>
      </div>
      <div className="h-full relative w-3/4" style={{margin: 'auto'}}>
        <div className="viewer-card">
          <Switch>
            <Route path="/navigation" render={()=><NavigationView />} />
            <Route path="/datepicker" render={()=><DatePickerView />} />
            <Route path="/currency" render={()=><ListView />} />
            <Route path="/tree" render={()=><TreeView />} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
