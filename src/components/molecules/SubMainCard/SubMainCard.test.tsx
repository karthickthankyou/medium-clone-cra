import React from 'react'
import { render } from '@testing-library/react'
import SubMainCard from './SubMainCard'

describe('SubMainCard Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<SubMainCard title='Hello' />)
    expect(asFragment()).toMatchSnapshot()
  })
})
