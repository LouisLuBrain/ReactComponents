import React, { useState, useContext, useReducer } from 'react';
import './TopBar.css';

function TopBar(props) {
  const sectionList = props.sectionList||[];
  const [selectedID, dispatch] = useReducer(reducer, 0);
  const [username] = useState(props.username||'Guset');
  return (
    <div className="topbar">
      <div className="topbar-list">
        <SelectContext.Provider value={{selectedID, dispatch}}>
          {sectionList.map((item,index)=>
            (
              <TopbarItem
                url={item.url||''}
                icon={item.icon}
                key={index}
                index={index}>
              {item.label||item}
              </TopbarItem>
            )
          )}
        </SelectContext.Provider>
      </div>
    </div>
  );
}
// topbar item
function TopbarItem(props) {
  const {selectedID, dispatch} = useContext(SelectContext);
  const index = props.index;

  return (
    <div
      onClick={()=> dispatch(index)}
      className={`topbar-item ${props.index === selectedID ? 'active':''}`}>
      <i className={`fa fa-${props.icon} topbar-item-icon`}></i>
      {props.children}
    </div>);
}
// context
const SelectContext = React.createContext(null)

// topbar item hook
function reducer(state, action) {
  return action;
}
export default TopBar; 
