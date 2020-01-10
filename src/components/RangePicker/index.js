import React, { useState } from 'react'

import CalendarPanel from '../DatePicker/CalendarPanel'
import TimeScroller from '../TimePicker/TimeScroller'
import calendar from '../DatePicker/calendar'
import clock from '../TimePicker/clock'

function RangePicker(props) {
  // const {
  //   panel,
  //   onChange,
  // } = props

  // const now = new Date()
  // const [{preDays, preD, nextD}, setPreDays] = useState(calendar.genDayOfMonth(now))
  // const [isShow, setIsShow] = useState(false)
  // const [preDate, setPreDate] = useState(now)
  // const [nextDate, setNextDate] = useState(now)
  
  // // pick a date
  // const handleChooseDate = (e) => {
  //   let chosenDay = e.target.getAttribute('data-date')
  //   let isPre = e.target.getAttribute('data-premonth')  // if users choose last month's days
  //   let isNext = e.target.getAttribute('data-nextmonth')// if users choose next month's days
  //   let [y, m, d] = calendar.dateFormating(chosenDate)
  //   m = m - 1
  //   if(isPre) {
  //     if(m === 0) {
  //       y = y - 1
  //       m = 11
  //     }
  //     else m = m - 1
  //   }
  //   else if(isNext) {
  //     if(m === 11) {
  //       y = y + 1
  //       m = 0
  //     }
  //     else m = m + 1 
  //   }

  //   let cD = new Date(y,m,chosenDay)

  //   setChosenDate(cD)
  //   setDays(calendar.genDayOfMonth(cD))
  // }
  // // year change
  // const handleYearChange = (e) => {
  //   let [y, m, d] = calendar.dateFormating(chosenDate)
  //   m = m - 1
  //   y = e.target.getAttribute('data-direction') === 'pre' ? y - 1 : y + 1
    
  //   let cD = new Date(y, m, 1)

  //   setChosenDate(cD)
  //   setDays(calendar.genDayOfMonth(cD))
  // }
  // // month change
  // const handleMonthChange = (e, panelID) => {
  //   let [y, m, d] = calendar.dateFormating(chosenDate)
  //   const flag = e.target.getAttribute('data-direction') === 'pre'
  //   m = m - 1
  //   if (flag && m === 0) {
  //     y = y - 1
  //     m = 11
  //   }
  //   else if (!flag && m === 11) {
  //     y = y + 1
  //     m = 0
  //   }
  //   else m = flag ? m - 1 : m + 1

  //   let cD = new Date(y, m, 1)
  //   if (panelID == 'pre') {
  //     setChosenDate(cD)
  //     setDays(calendar.genDayOfMonth(cD))
  //   }
  //   else {
  //     setChosenDate(cD)
  //     setDays(calendar.genDayOfMonth(cD))
  //   }
  // }
  // // show ?
  // const showPanel = () => {
  //   setIsShow(!isShow)
  // }
  // // date pick
  // const handleDatePick = () => {
  //   onChange && onChange(chosenDate)
  //   showPanel()
  // }
  // // choose
  // const CalendarPanelProps = {
  //   onPick: null,
  //   defaultDate: chosenDate,
  //   today: now,
  // }
  // return (
  //   <div>
  //     <div
  //       className="w-auto cursor-pointer border-1 border-gray-200 hover:border-gray-400 hover:shadow rounded p-1 mb-0" 
  //       onClick={showPanel}>
  //       {`${preDate.toDateString()} ~ ${nextDate.toDateString()}`}
  //     </div>
  //     <div className={`w-auto absolute flex-col border-1 bg-white shadow-md ${isShow ? '' : 'hidden'} rounded`}>
  //       <div className="w-full flex">
  //         <div className="border-r-1">
  //           <CalendarPanel {...CalendarPanelProps}/>
  //         </div>
  //         <div className="">
  //           <CalendarPanel {...CalendarPanelProps}/>
  //         </div>
  //       </div>
  //       <div className="flex justify-between px-2">
  //         <div onClick={showPanel} className="cursor-pointer my-1 text-center text-cyan">OK</div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default RangePicker