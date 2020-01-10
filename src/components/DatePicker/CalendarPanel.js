import React, { useState, useEffect } from 'react'
import calendar from './calendar'

import './index.css'

// calendar
function CalendarPanel(props) {
  const { onPick, today, chosenDate, setChosenDate, showPanel } = props  

  const [{days, preD, nextD}, setDays] = useState(calendar.genDayOfMonth(today))
  const [displayDay, setDisplayDay] = useState(chosenDate)
  // get today's mark
  const todayMark = (today.getFullYear() === displayDay.getFullYear() && today.getMonth() === displayDay.getMonth()) ? today.getDate() : 0 // get today and mark it

  // year changed
  const handleYearChange = (e) => {
    let [y, m, d] = calendar.dateFormating(displayDay)
    m = m - 1
    y = e.target.getAttribute('data-direction') === 'pre' ? y - 1 : y + 1
    
    let cD = new Date(y, m, 1)

    setDisplayDay(cD)
    setDays(calendar.genDayOfMonth(cD))
  }
  // month changed
  const handleMonthChange = (e) => {
    let [y, m, d] = calendar.dateFormating(displayDay)
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

    setDisplayDay(cD)
    setDays(calendar.genDayOfMonth(cD))
  }
  // pick a date
  const handleChooseDate = (e) => {
    let chosenDay = e.target.getAttribute('data-date')
    let isPre = e.target.getAttribute('data-premonth')  // if users choose last month's days
    let isNext = e.target.getAttribute('data-nextmonth')// if users choose next month's days
    let [y, m, d] = calendar.dateFormating(displayDay)
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

    let cD = new Date(y, m, chosenDay)
    
    setDisplayDay(cD)
    setChosenDate(cD)
    setDays(calendar.genDayOfMonth(cD))

    onPick && onPick(cD)
    showPanel && showPanel()
  }

  const getClassNameByVI = (v, i) => {
    // TODO: color need config
    // today mark
    if (v === todayMark && i >= preD && i < nextD) return 'border-1 border-cyan font-semibold text-cyan'
    // chosen mark
    else if(displayDay.getDate() === v && i >= preD && i < nextD) return 'bg-cyan text-white'
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
    <div className="w-64">
      <div className="flex justify-between px-1 h-8">
        <div data-direction="pre" onClick={handleYearChange} className="outline-none cursor-pointer my-1 text-gray-400 calender-switch-btn-left">{'<<'}</div>
        <div data-direction="pre" onClick={handleMonthChange} className="outline-none cursor-pointer my-1 text-gray-400 calender-switch-btn-left">{'<'}</div>
        <div className="py-1 text-gray-800 font-semibold">{calendar.dateFormating(displayDay).join('-')}</div>
        <div data-direction="next" onClick={handleMonthChange} className="outline-none cursor-pointer my-1 text-gray-400 calender-switch-btn-right">{'>'}</div>
        <div data-direction="next" onClick={handleYearChange} className="outline-none cursor-pointer my-1 text-gray-400 calender-switch-btn-right">{'>>'}</div>
      </div>
      <table
        style={{height: '16rem',boxShadow: 'rgba(100, 100, 100, 0.5) 0px 5px 5px -7px inset, rgba(100, 100, 100, 0.5) 0px -5px 5px -7px inset'}} 
        className={`w-full table-fixed`}>
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
    </div>
  )
}

export default CalendarPanel