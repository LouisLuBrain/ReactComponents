import React, { useEffect, useState } from 'react'
import clock from './clock'
import './index.css'

const configObject = {
  H: 24,
  M: 60,
  S: 60,
}

function TimePicker(props) {
  const {
    panel,
    hourType,
    onChange,
  } = props

  var now = new Date()
  const [config, setConfig] = useState((panel||['H','M','S']).map(v => configObject[v]))
  const [chosenTime, setChosenTime] = useState(clock.timeFormating(now, panel||['H','M','S']))
  const [isShow, setIsShow] = useState(false)
  // show panel
  const showPanel = () => {
    setIsShow(!isShow)
  }
  const back2Now = () => {
    now = new Date
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
    }
    console.log(t)
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

function TimeScroller(props) {
  const {
    handleClick,
    list,
    index,
    handleChooseTime,
    units,
    chosenTime,
  } = props
  
  let refDom;
  
  // data list
  const genArray = (list) => {
    let array = []
    array.push('-', '-')
    for(;list;list--) {
      array.unshift(list < 10 ? `0${list}` : `${list}` )
    }
    array.unshift('-', '-', '00')
    return array
  }
  useEffect(() => {
    refDom && refDom.scrollTo(0, (chosenTime[index]) * 30)
  })
  return (
    <div className={`flex-grow ${index ? 'border-l-1' : ''}`} style={{transition: '0.3s linear'}}>
      <div className="text-center pr-4">{units[index]}</div>
      <div
        ref={(node) => refDom = node}
        className="flex-grow overflow-y-auto h-40" 
        style={{boxShadow: '0px 5px 5px -7px rgba(100, 100, 100, 0.5) inset, 0px -5px 5px -7px rgba(100, 100, 100, 0.5) inset'}}>
        <div
          className={`flex-col text-center px-2 py-1`}
          >
          {genArray(list).map((v, i) => (
            <div 
              onClick={handleChooseTime}
              data-value={v}
              data-unit={units[index]}
              key={i}
              className={`hover:bg-cyan hover:text-white border-1 border-white cursor-pointer my-1 w-auto rounded ${
                v === chosenTime[index] ? 'border-cyan' : ''
              }`}>{v}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default TimePicker