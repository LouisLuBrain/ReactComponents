import React from 'react'

import CurrencyList from '../components/CurrencyList'
import Card from './Card'

function DatePickerView(props) {
  return (
    <div className="flex-col w-full">
      <Card title="货币汇率" props={{}}>
        <CurrencyList/>
      </Card>
    </div>
  )
}

export default DatePickerView