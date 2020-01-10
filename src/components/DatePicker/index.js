import React, { useState } from 'react'
import calendar from './calendar'
import CalendarPanel from './CalendarPanel'

import './index.css'

function DatePicker(props) {
  const {
    onChange,
    limit,
  } = props
  const [today, setToday] = useState(new Date())
  const [isShow, setIsShow] = useState(false)
  const [chosenDate, setChosenDate] = useState(new Date())
  
  const onPick = (date) => {
    setChosenDate(date)
  }
  // back to today
  const back2Today = () => {
    let cD = new Date()
    setToday(cD)
    setChosenDate(cD)
  }
  // show ?
  const showPanel = () => {
    setIsShow(!isShow)
  }
  // confirm and export the data
  const handleDatePick = () => {
    onChange && onChange(chosenDate)
    showPanel()
  }

  // props pass down
  const DateSpanProp = {
    showPanel: showPanel,
    chosenDate: chosenDate,
  }
  const CalendarProp = {
    onPick: onPick,
    today: today,
    chosenDate: chosenDate,
    setChosenDate: setChosenDate,
    showPanel: showPanel,
  }

  return (
    <div className="">
      <DateSpan {...DateSpanProp} />
      <div className={`mx-1 w-64 rounded border-gray-200 border-1 shadow-lg absolute left-0 top-0 bg-white ${isShow ? '' : 'hidden'}`}>
        <CalendarPanel {...CalendarProp} />
        <div className="w-auto m-1 pt-1 flex justify-between">
          <div className="text-center text-gray-600 w-8 cursor-pointer" onClick={back2Today}>Today</div>
        </div>
      </div>
    </div>
  )
}
// banner show the date
function DateSpan(props) {
  const { showPanel, chosenDate } = props
  return (
    <div
      className="w-auto cursor-pointer border-1 border-gray-200 hover:border-gray-400 hover:shadow rounded p-1 m-1 mb-0 relative"
      onClick={props.showPanel}>{chosenDate.toDateString()}</div>
  )
}

export default DatePicker