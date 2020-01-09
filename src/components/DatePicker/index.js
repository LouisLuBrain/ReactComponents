import React, { useState } from 'react'
import calendar from './calendar'

import './index.css'

function DatePicker(props) {
  const {
    onChange,
    limit,
  } = props
  const today = new Date()
  const [{days, preD, nextD}, setDays] = useState(calendar.genDayOfMonth(today))
  const [isShow, setIsshow] = useState(false)
  const [chosenDate, setChosenDate] = useState(today)
  
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
  // back to today
  const back2Today = () => {
    let cD = new Date()

    setChosenDate(cD)
    setDays(calendar.genDayOfMonth(cD))
  }
  // show ?
  const showPanel = () => {
    setIsshow(!isShow)
  }

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
    showPanel: showPanel,
    isShow: isShow,
    days: days,
    preD: preD,
    nextD: nextD,
    chosenDate: chosenDate,
    handleChooseDate: handleChooseDate,
    handleYearChange: handleYearChange,
    handleMonthChange: handleMonthChange,
    back2Today: back2Today,
    today: today,
    handleDatePick: handleDatePick,
  }

  return (
    <div className="">
      <DateSpan {...DateSpanProp} />
      <Calendar {...CalendarProp} />
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
// calendar
function Calendar(props) {
  const {isShow, handleDatePick, back2Today, handleYearChange, handleMonthChange, days, preD, nextD, chosenDate, handleChooseDate, today} = props
  const todayMark = (today.getFullYear() === chosenDate.getFullYear() && today.getMonth() === chosenDate.getMonth()) ? today.getDate() : 0 // get today and mark it

  const getClassNameByVI = (v, i) => {
    // TODO: color need config
    // today mark
    if (v === todayMark && i >= preD && i < nextD) return 'border-1 border-cyan font-semibold text-cyan'
    // chosen mark
    else if(chosenDate.getDate() === v && i >= preD && i < nextD) return 'bg-cyan text-white'
    // normal mark
    else {
      let color = 'text-'
      // weekday ?
      color += (i % 7 === 0 || i % 7 === 6) ? 'red-' : 'gray-'
      // this month ?
      color += (i < preD || i>= nextD) ? '200' : '600'
      return color
    }
  }

  return (
    <div
      className={`mx-1 w-64 ${isShow ? 'h-auto opacity-1' : 'h-0 opacity-0'} rounded border-gray-200 border-1 shadow-lg absolute left-0 top-0 bg-white`} style={{transition: '0.3s linear'}}>
      <div className={`m-2 ${isShow ? '' : 'hidden'}`}>
        <div className="flex justify-between mx-1 border-b-1">
          <div data-direction="pre" onClick={handleYearChange} className="outline-none cursor-pointer my-1 text-gray-400 calender-switch-btn-left">{'<<'}</div>
          <div data-direction="pre" onClick={handleMonthChange} className="outline-none cursor-pointer my-1 text-gray-400 calender-switch-btn-left">{'<'}</div>
          <div className="py-1 text-gray-800 font-semibold">{calendar.dateFormating(chosenDate).join('-')}</div>
          <div data-direction="next" onClick={handleMonthChange} className="outline-none cursor-pointer my-1 text-gray-400 calender-switch-btn-right">{'>'}</div>
          <div data-direction="next" onClick={handleYearChange} className="outline-none cursor-pointer my-1 text-gray-400 calender-switch-btn-right">{'>>'}</div>
        </div>
        <table className={`w-full table-fixed`}>
          <tbody>
            <tr className="text-center">
              <td className="py-2 text-red-600">Sun</td>
              <td className="py-2 text-gray-600">Mon</td>
              <td className="py-2 text-gray-600">Tue</td>
              <td className="py-2 text-gray-600">Wed</td>
              <td className="py-2 text-gray-600">Thr</td>
              <td className="py-2 text-gray-600">Fri</td>
              <td className="py-2 text-red-600">Sat</td>
            </tr>
            {days.map((v, i, a) => !(i % 7) && (
              <tr key={i} className="text-center">
                {a.slice(i, i + 7).map((v, idx) => 
                  // TODO: color need config
                  <td key={i + idx}>
                    <div
                      onClick={handleChooseDate}
                      data-date={v}
                      data-nextmonth={i + idx >= nextD ? '1' : ''}
                      data-premonth={i + idx < preD ? '1' : ''} 
                      className={`p-1 hover:bg-cyan hover:text-white hover:shadow border-1 border-white hover:border-cyan cursor-pointer rounded ${
                        getClassNameByVI(v, i + idx)
                      }`}>{v}</div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-auto m-1 pt-1 border-t-1 flex justify-between">
          <div className="text-center text-gray-600 w-8 cursor-pointer" onClick={back2Today}>Today</div>
          <div className="text-center text-cyan w-8 cursor-pointer" onClick={handleDatePick}>OK</div>
        </div>
      </div>
    </div>
  )
}

export default DatePicker