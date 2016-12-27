import React from 'react'
import { inject, observer } from 'mobx-react'
import { Select } from 'antd'

/** Make the component reactive and inject MobX stores. */
@inject('rates') @observer

class SelectCurrency extends React.Component {
  constructor (props) {
    super(props)
    this.rates = props.rates
    this.setLocalCurrency = this.setLocalCurrency.bind(this)
  }

  setLocalCurrency (value) {
    this.rates.setLocalCurrency(value)
  }

  render () {
    return (
      <Select
        showSearch
        style={{width: '80px'}}
        placeholder={this.rates.localCurrency}
        optionFilterProp='children'
        notFoundContent='Not found.'
        onChange={this.setLocalCurrency}
      >
        {
          this.rates.localCurrencies.map((currency) => (
            <Select.Option
              key={currency}
              value={currency}
            >
              {currency}
            </Select.Option>
          ))
        }
      </Select>
    )
  }
}

export default SelectCurrency