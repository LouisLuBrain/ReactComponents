import React from 'react'
import PropTypes from 'prop-types'

import './index.css'
import TreeItem from './TreeItem'
import SubTree from './SubTree'

class Tree extends React.Component {
  static propTypes = {
    treeObject: PropTypes.array.isRequired,
    checkable: PropTypes.bool,
    autoExpand: PropTypes.bool,
    disabled: PropTypes.bool,
    mutiple: PropTypes.bool,
    showIcon: PropTypes.bool,
    lined: PropTypes.bool,
    fontStyle: PropTypes.object,
  }

  static defaultProps = {
    checkable: false,
    autoExpand: false,
    disabled: false,
    mutiple: false,
    showIcon: false,
    lined: true,
    fontStyle: {},
  }

  constructor(props) {
    super(props)
    this.state = {
      checkList: []
    }
  }

  render() {
    const { treeObject, showIcon, checkable, lined } = this.props
    return (
      <div className="tree-container">
        {treeObject.map((item, index) => (
          <TreeItem
            lined={lined}
            key={index}
            showIcon={showIcon}
            checkable={checkable} 
            item={item}
            index={index}/>
        ))}
      </div>
    )
  }

  // renderSubTree = (list, parentIndex) => {
  //   const thisLevel = list
  //   return (
  //       <div className={`tree-sub-container ${this.props.lined ? 'lined' : ''}`}>
  //         {thisLevel.map((item, index) => {
  //           return this.renderTreeItem(item, `${parentIndex}-${index}`)
  //         })}
  //       </div>
  //   )
  // }

  // renderTreeItem = (item, index) => {
  //   const treeItem = item
  //   return (
  //     <div key={item.id||index}>
  //       <div className="tree-item">
  //         <div className="tree-item-arch fa fa-caret-right"></div>
  //         {this.props.checkable && this.renderCheckbox(item.id||index)}
  //         {this.props.showIcon && this.renderIcon(treeItem)}
  //         <div className="tree-item-label">
  //           {treeItem.label}
  //         </div>
  //       </div>
  //       {treeItem.subTree && this.renderSubTree(treeItem.subTree, index)}
  //     </div>
  //   )
  // }
  // renderCheckbox = (key) => {
  //   return (
  //     <div className="tree-item-checkbox" onClick={this.handleCheck(key)}></div>
  //   )
  // }
  // renderIcon = ({icon, color}) => {
  //   return (
  //     <div className={`tree-item-icon ${icon}`} style={{color: color}}></div>
  //   )
  // }
  // handleCheck = (key) => {

  // }

}

export default Tree
