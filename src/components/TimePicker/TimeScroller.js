import React, { useEffect } from 'react'

import './index.css'

// time scroller $ picker
function TimeScroller(props) {
  const {
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
    array.push('', '-', '-', '-', '-', '-', '-', '-')
    for(;list;list--) {
      array.unshift(list < 10 ? `0${list}` : `${list}` )
    }
    array.unshift('00')
    return array
  }
  useEffect(() => {
    refDom && refDom.scrollTo({
      top: (chosenTime[index]) * 30,
      behavior: 'smooth'
    })
  })
  return (
    <div className={`flex-grow flex-col ${index ? 'border-l-1' : ''}`} style={{transition: '0.3s linear'}}>
      <div
        style={{lineHeight: '2rem'}} 
        className="h-8 text-center pr-4">
          {units[index]}
      </div>
      <div
        ref={(node) => refDom = node}
        className="flex-grow overflow-y-auto"
        style={{height: '16rem',boxShadow: '0px 5px 5px -7px rgba(100, 100, 100, 0.5) inset, 0px -5px 5px -7px rgba(100, 100, 100, 0.5) inset'}}>
        <div
          className={`flex-col text-center px-2 py-1`}>
          {genArray(list).map((v, i) => 
            v =='-'
            ? (<div
                key={i}
                className={`border-1 border-white text-white select-none my-1 w-auto`}>{v}</div>)
            : (<div
                onClick={(e) => handleChooseTime(e)}
                data-value={v}
                data-unit={units[index]}
                key={i}
                className={`hover:bg-cyan hover:text-white border-1 border-white cursor-pointer my-1 w-auto rounded ${
                  v === chosenTime[index] ? 'border-cyan text-cyan' : ''
                }`}>{v}</div>)
          )}
        </div>
      </div>
    </div>
  )
}

export default TimeScroller