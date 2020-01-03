import React, { useState } from 'react'
import calendar from './calendar'

function DatePicker(props) {
  const [ days, setDays ] = useState(31)
  const [ isShow, setIsshow ] = useState(true)

  const handleChange = (e) => {
    const value = e.target.value
    setDays(calendar.getDayOfMonth(new Date().getFullYear(), new Date().getMonth()))
  }
  const showPanel = () => {
    setIsshow(!isShow)
  } 
  return (
    <div>
      <DateSpan showPanel={showPanel}/>
      <Calendar showPanel={showPanel} isShow={isShow}/>
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
function Calendar(props) {
  const [ date, setDate ] = useState(new Date())

  const numOfDays = calendar.getDayOfMonth(date.getFullYear(), date.getMonth())


  return (
    <div
      className={`mx-1 w-64 ${props.isShow?'h-64 opacity-1':'h-0 opacity-0'} rounded border-gray-200 border-1 shadow-lg absolute left-0 top-0 bg-white t-linear t-dur-1`}>
      <div className="m-2">
        <div></div>
        <div className="flex justify-around mb-1 text-center">
          <div className="w-auto text-red-600">Sun</div>
          <div className="w-auto">Mon</div>
          <div className="w-auto">Tue</div>
          <div className="w-auto">Wed</div>
          <div className="w-auto">Thr</div>
          <div className="w-auto">Fri</div>
          <div className="w-auto text-red-600">Sat</div>
        </div>
        <PickPanel numOfDays={numOfDays} today={date}></PickPanel>
      </div>
    </div>
  )
}

function PickPanel(props) {
  const d = [0,0,0,0,0,0,0]
  return (
    <div>
      {d.map(() => (
        <div className="flex justify-around my-1 text-center">
          <div className="w-auto">1</div>
          <div className="w-auto">2</div>
          <div className="w-auto">3</div>
          <div className="w-auto">4</div>
          <div className="w-auto">5</div>
          <div className="w-auto">6</div>
          <div className="w-auto">7</div>
        </div>
      ))}
    </div>
  )
}

// trans Date object
const Ddate = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    day: date.getDay()
  }
}
export default DatePicker