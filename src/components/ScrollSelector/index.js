import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class index extends Component {
  static propTypes = {
    selectOptions: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      clickHandler: PropTypes.func,
      selected: PropTypes.bool,
    })).isRequired,
    IconSpan: PropTypes.element,
    labelStyle: PropTypes.object,
    selectedStyle: PropTypes.object,
    ComponentId: PropTypes.string, 
  }

  constructor(props) {
    super(props)
    this.state = {
      list: props.selectOptions
    }
  }

  // componentDidMount() {
  //   document.getElementById('123').addEventListener('scroll', this.scrollHandler)
  // }

  scrollHandler = (event) => {
    event.persist()
    const tempList = this.state.list
    if (event.deltaY < 0) {
      tempList.unshift(tempList.pop())
      this.setState({list: tempList})
    } else {
      tempList.push(tempList.shift())
      this.setState({list: tempList})
    }
    
  }

  render() {
    return (
      <div id='123' className="scroll-select-container">
        <div className="scroll-select-icon-span">{this.props.IconSpan}</div>
        <div className="select-option-container" onWheel={this.scrollHandler}>
          {this.state.list.map(( option, index ) => 
            index > 2 ? null : (<div key={option.label} className="scroll-select-label-container" onClick={() => option.clickHandler && option.clickHandler(index) }>
                <span className={`scroll-select-label ${index == 1  ? this.props.selectedStyle || 'default-selected' : ''}`} style={this.props.labelStyle}>{option.label}</span>
              </div>)
          )}
        </div>
      </div>
    )
  }
}
