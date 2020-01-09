import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const RATELIST =gql`
  {
    rates(currency: "USD") {
      currency
      name
      rate
    }
  }
`

function CurrencyList(props) {
  const { loading, error, data } = useQuery(RATELIST)
  if (loading) return <span className="text-gray-500">Loading data ...</span>
  if (error) return <span className="text-red-500">ERROR!</span>
  return (
    <div>
      <table>
        <tbody>
          {data.rates.map((i) => (
            <tr key={i.currency}>
              <td className="mx-2 text-red-500">{i.name}</td>
              <td className="mx-2 text-gray-500">{i.currency}</td>
              <td className="mx-3 text-gray-500 bold">{i.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CurrencyList