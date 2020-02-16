import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './index.css'
import TreeItem from './TreeItem'

export default class SubTree extends Component {

  render() {
    const { objectTree, parentIndex, lined, checkable, showIcon } = this.props
    return (
      <div className={`tree-sub-container lined ${this.props.expand ? 'expanded' : ''}`}>
        {objectTree.map((item, index) => (
          <TreeItem
            lined={lined}
            checkable={checkable}
            showIcon={showIcon}
            key={`${parentIndex}-${index}`}
            item={item}
            parentIndex={index}
            index={`${parentIndex}-${index}`}/>
        ))}
      </div>
  )
  }
}
