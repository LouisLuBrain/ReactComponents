import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SubTree from './SubTree'

import './index.css'

export default class TreeItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      checked: props.checked||false,
      halfChecked: props.item.subTree ? false : null,
      expand: false,
    }
  }

  render() {
    const { item, index, checkable, showIcon, lined } = this.props  
    return (
      <div key={item.id||index}>
        <div className="tree-item">
          <div className={`tree-item-arch fa fa-caret-right ${this.state.expand ? 'expanded' : ''}`} onClick={() => this.handleExpand()}></div>
          {this.props.checkable && this.renderCheckbox(item.id||index)}
          {this.props.showIcon && this.renderIcon(item)}
          <div className="tree-item-label">
            {item.label}
          </div>
        </div>
        {item.subTree && (
          <SubTree
            lined={lined}
            checkable={checkable}
            showIcon={showIcon}
            expand={this.state.expand}
            objectTree={item.subTree} 
            parentIndex={index}/>
        )}
      </div>
    )
  }

  renderCheckbox = (key) => {
    return (
      <div className={`tree-item-checkbox fa fa-check ${this.state.checked ? 'checked' : 'unchecked'} `} onClick={() => this.handleCheck(key)}></div>
    )
  }

  renderIcon = ({icon, color}) => {
    return (
      <div className={`tree-item-icon ${icon}`} style={{color: color}}></div>
    )
  }

  handleCheck = (key) => {
    console.log(`${key} - ${this.state.checked}`)
    this.setState({
      checked: !this.state.checked
    })
  }

  handleExpand = () => {
    this.setState({
      expand: !this.state.expand
    })
  }
}
