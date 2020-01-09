import React, { useState } from 'react'

import DatePicker from '../components/DatePicker'
import TimePicker from '../components/TimePicker'
import DateTimePicker from '../components/DateTimePicker'
import Card from './Card'

function DatePickerView(props) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const logDate = (e) => {
    setDate(e)
  }
  const logTime = (e) => {
    setTime(e)
  }
  return (
    <div className="flex-col w-full">
      <Card title="Date Picker" props={'onChange: {function} handle the picked date, pass a {Date} arg'}>
        <DatePicker onChange={logDate}/>
        <div className="p-1">{`you picked ${date.toString()}`}</div>
      </Card>
      <Card title="Time Picker" props={''}>
        <TimePicker onChange={logTime} panel={['H', 'M']}/>
        <div className="p-1">{`you picked ${time.toString()}`}</div>
      </Card>
      <Card>
        <DateTimePicker />
      </Card>
    </div>
  )
}

export default DatePickerView