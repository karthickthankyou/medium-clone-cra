import { useState } from 'react'
import { PaymentCard } from 'baseui/payment-card'
import BaseUI from '../BaseUIWrapper'

export default () => {
  const [value, setValue] = useState('')
  return (
    <BaseUI>
      <PaymentCard
        value={value}
        /* @ts-ignore */
        onChange={(e) => setValue(e.target.value)}
        clearOnEscape
        placeholder='Please enter your credit card number...'
      />
    </BaseUI>
  )
}
