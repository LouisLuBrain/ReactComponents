import React from 'react';
import './TopBar.css';
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username||"Guset",
      sectionList: props.sectionList
        ? props.sectionList.map((item) => {
            item.active = false;
            return item;
          })
        : []
    };
    
    this.handleClick = (e) => {
      let idx = e.target.getAttribute('index');
      
      const sectionList = this.state.sectionList.map((item) => {
        item.active=false;
        return item;
      });

      sectionList[idx].active = true;
      this.setState({sectionList: sectionList});
    };
  }

  render() {
    return (
      <div className="topbar">
        <div className="topbar-logo iconfont icon-logo"></div>
        <div className="topbar-list">
          {this.state.sectionList.map((item,index)=>
            (
              <TopbarItem
                url={item.url||''}
                active={item.active||false}
                icon={item.icon}
                key={index}
                index={index}
                handleClick={this.handleClick}
              >{item.label||item}</TopbarItem>
            )
          )}
        </div>
        <div className="topbar-user">
          <div className="topbar-user-avatar">
            <img className="topbar-user-avatar-img" alt="pic missing" url=""/>
          </div>
          <span className="topbar-user-name">{this.state.username}</span>
        </div>
      </div>
    );
  }

}
function TopbarItem(props) {
  return (
    <div
      onClick={props.handleClick}
      index={props.index}
      className={`topbar-item ${props.active?'active':''}`}>
    <i className={`fa fa-${props.icon} topbar-item-icon`}></i>
    {props.children}
    </div>);
}
export default TopBar; 