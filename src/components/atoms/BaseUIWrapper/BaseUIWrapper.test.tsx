import React from 'react'
import { render } from '@testing-library/react'
import BaseUIWrapper from './BaseUIWrapper'

describe('BaseUIWrapper Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<BaseUIWrapper />)
    expect(asFragment()).toMatchSnapshot()
  })
})
