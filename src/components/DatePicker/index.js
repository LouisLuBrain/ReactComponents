import React, { useState } from 'react'
import calendar from './calendar'

function DatePicker(props) {
  const [ days, setDays ] = useState(31)
  const [ isShow, setIsshow ] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value
    setDays(calendar.getDayOfMonth(new Date()))
  }
  const showPanel = () => {
    setIsshow(!isShow)
  } 
  return (
    <div>
      <DateSpan showPanel={showPanel}/>
      <PickPanel showPanel={showPanel} isShow={isShow}/>
    </div>
  )
}
// banner show the date
function DateSpan(props) {
  return (
    <div
      className="w-64 cursor-pointer border-1 border-gray-200 hover:border-gray-400 hover:shadow rounded p-1 m-1 mb-0 relative"
      onClick={props.showPanel}>123</div>
  )
}
// calendar
function PickPanel(props) {
  const [ date, setDate ] = useState(Ddate(new Date()))



  return (
    <div
     className={`mx-1 w-64 ${props.isShow?'h-64 opacity-1':'h-0 opacity-0'} rounded border-gray-200 border-1 shadow-lg absolute left-0 top-0 bg-white t-linear t-dur-1`}></div>
  )
}
const Ddate = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    day: date.getDay()
  }
}
export default DatePicker