import React from 'react'

import DatePicker from '../components/DatePicker'
import Card from './Card'

function DatePickerView(props) {
  return (
    <div className="flex-col w-full">
      <Card title="日期选择器" props={{}}>
        <DatePicker/>
      </Card>
    </div>
  )
}

export default DatePickerView