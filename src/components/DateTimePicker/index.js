import React, { useState } from 'react'

import CalendarPanel from '../DatePicker/CalendarPanel'
import TimeScroller from '../TimePicker/TimeScroller'
import calendar from '../DatePicker/calendar'
import clock from '../TimePicker/clock'

function DateTimePicker(props) {
  const {
    panel,
    onChange,
  } = props

  const now = new Date()
  const [{days, preD, nextD}, setDays] = useState(calendar.genDayOfMonth(now))
  const [isShow, setIsShow] = useState(false)
  const [chosenDate, setChosenDate] = useState(now)
  const [config, setConfig] = useState((panel||['H','M','S']).map(v => clock.configObject[v]))
  const [chosenTime, setChosenTime] = useState(clock.timeFormating(now, panel||['H','M','S']))
  
  // pick a date
  const handleChooseDate = (e) => {
    let chosenDay = e.target.getAttribute('data-date')
    let isPre = e.target.getAttribute('data-premonth')  // if users choose last month's days
    let isNext = e.target.getAttribute('data-nextmonth')// if users choose next month's days
    let [y, m, d] = calendar.dateFormating(chosenDate)
    m = m - 1
    if(isPre) {
      if(m === 0) {
        y = y - 1
        m = 11
      }
      else m = m - 1
    }
    else if(isNext) {
      if(m === 11) {
        y = y + 1
        m = 0
      }
      else m = m + 1 
    }

    let cD = new Date(y,m,chosenDay)

    setChosenDate(cD)
    setDays(calendar.genDayOfMonth(cD))
  }
  // year change
  const handleYearChange = (e) => {
    let [y, m, d] = calendar.dateFormating(chosenDate)
    m = m - 1
    y = e.target.getAttribute('data-direction') === 'pre' ? y - 1 : y + 1
    
    let cD = new Date(y, m, 1)

    setChosenDate(cD)
    setDays(calendar.genDayOfMonth(cD))
  }
  // month change
  const handleMonthChange = (e) => {
    let [y, m, d] = calendar.dateFormating(chosenDate)
    const flag = e.target.getAttribute('data-direction') === 'pre'
    m = m - 1
    if (flag && m === 0) {
      y = y - 1
      m = 11
    }
    else if (!flag && m === 11) {
      y = y + 1
      m = 0
    }
    else m = flag ? m - 1 : m + 1

    let cD = new Date(y, m, 1)

    setChosenDate(cD)
    setDays(calendar.genDayOfMonth(cD))
  }
  // show ?
  const showPanel = () => {
    setIsShow(!isShow)
  }
  // date pick
  const handleDatePick = () => {
    onChange && onChange(chosenDate)
    showPanel()
  }
  // back to now
  const back2Now = () => {
    let cD = new Date()
    setChosenDate(cD)
    setDays(calendar.genDayOfMonth(cD))
    setChosenTime(clock.timeFormating(cD, panel||['H','M','S']))
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
  const CalendarPanelProps = {
    showPanel: showPanel,
    isShow: isShow,
    days: days,
    preD: preD,
    nextD: nextD,
    chosenDate: chosenDate,
    handleChooseDate: handleChooseDate,
    handleYearChange: handleYearChange,
    handleMonthChange: handleMonthChange,
    today: now,
    handleDatePick: handleDatePick,
  }
  const TimeScrollerProps = {
    handleChooseTime: handleChooseTime,
    units: panel||['H','M','S'],
    chosenTime: chosenTime,
  }
  return (
    <div>
      <div
        className="w-auto cursor-pointer border-1 border-gray-200 hover:border-gray-400 hover:shadow rounded p-1 mb-0" 
        onClick={showPanel}>
        {`${chosenDate.toDateString()} ${chosenTime.join(' : ')}`}
      </div>
      <div className={`w-auto absolute flex-col border-1 bg-white shadow-md ${isShow ? '' : 'hidden'} rounded`}>
        <div className="w-full flex">
          <div className="border-r-1">
            <CalendarPanel {...CalendarPanelProps}/>
          </div>
          <div className="flex justify-between w-64">
            {config.map((v, i) => (<TimeScroller key={i} index={i} list={v} {...TimeScrollerProps}/>))}
          </div>
        </div>
        <div className="flex justify-between px-2">
          <div onClick={back2Now} className="cursor-pointer my-1 text-center text-gray-600">Now</div>
          <div onClick={showPanel} className="cursor-pointer my-1 text-center text-cyan">OK</div>
        </div>
      </div>
    </div>
  )
}

export default DateTimePicker