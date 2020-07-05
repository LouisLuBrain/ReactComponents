import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollSelector from '../components/ScrollSelector'

export default class ScrollSelectorView extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="flex-col w-full">
        <ScrollSelector selectOptions={[
          {
            label: 'item-one',
            clickHandler: (index) => { console.log(index) },
            selected: false
          },
          {
            label: 'item-two',
            clickHandler: (index) => { console.log(index) },
            selected: true
          },
          {
            label: 'item-three',
            clickHandler: (index) => { console.log(index) },
            selected: false
          },
          {
            label: 'item-four',
            clickHandler: (index) => { console.log(index) },
            selected: false
          },
        ]}
        IconSpan={(<span className="fa fa-list"></span>)}
        />
      </div>
    )
  }
}
