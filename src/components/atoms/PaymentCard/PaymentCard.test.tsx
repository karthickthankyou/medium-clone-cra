import React from 'react'
import { render } from '@testing-library/react'
import PaymentCard from './PaymentCard'

describe('PaymentCard Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<PaymentCard />)
    expect(asFragment()).toMatchSnapshot()
  })
})
