import React from 'react'
import { render } from '@testing-library/react'
import HScroll from './HScroll'

describe('HScroll Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<HScroll>{[]}</HScroll>)
    expect(asFragment()).toMatchSnapshot()
  })
})
