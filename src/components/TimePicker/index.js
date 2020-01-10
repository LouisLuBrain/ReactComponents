import React, { useState } from 'react'
import TimeScroller from './TimeScroller'
import clock from './clock'

import './index.css'

function TimePicker(props) {
  const {
    panel,
    hourType,
    onChange,
  } = props

  var now = new Date()
  const [config, setConfig] = useState((panel||['H','M','S']).map(v => clock.configObject[v]))
  const [chosenTime, setChosenTime] = useState(clock.timeFormating(now, panel||['H','M','S']))
  const [isShow, setIsShow] = useState(false)
  // show panel
  const showPanel = () => {
    setIsShow(!isShow)
  }
  const back2Now = () => {
    now = new Date()
    setChosenTime(clock.timeFormating(now, panel||['H','M','S']))
  }
  // choose
  const handleChooseTime = (e) => {
    const time = e.target.getAttribute('data-value')
    const unit = e.target.getAttribute('data-unit')
    let t = new Array(...chosenTime)
    switch (unit) {
      case 'H':
        t[0] = time
        break
      case 'M':
        t[1] = time
        break
      case 'S':
        t[2] = time
        break
      default: break
    }
    setChosenTime(t)
    onChange && onChange (chosenTime)
  }
  // props
  const timeScrollerProps = {
    handleChooseTime: handleChooseTime,
    units: panel||['H','M','S'],
    chosenTime: chosenTime,
  }
  const timeSpanProps = {
    showPanel: showPanel,
    chosenTime: chosenTime,
  }
  return (
    <div className="w-auto mx-1 relative">
      <TimeSpan {...timeSpanProps} />
      <div className={`w-64 absolute border-1 bg-white shadow-md ${isShow ? '' : 'hidden'} rounded`}>
        <div className={`flex justify-between w-full`}>
          {config.map((v, i) => (<TimeScroller key={i} index={i} list={v} {...timeScrollerProps}/>))}
        </div>
        <div className="flex justify-between px-2">
          <div onClick={back2Now} className="cursor-pointer my-1 text-center text-gray-600">Now</div>
          <div onClick={showPanel} className="cursor-pointer my-1 text-center text-cyan">OK</div>
        </div>
      </div>
    </div>
  )
}
// time spanner
function TimeSpan(props) {
  const {
    showPanel,
    chosenTime,
  } = props
  
  return (
    <div
      className="w-auto cursor-pointer border-1 border-gray-200 hover:border-gray-400 hover:shadow rounded p-1 mb-0"
      onClick={showPanel}>
        {chosenTime.join(' : ')}
    </div>
  )
}
export default TimePicker