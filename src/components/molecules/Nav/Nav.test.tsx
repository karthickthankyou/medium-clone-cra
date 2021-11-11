import React from 'react'
import { render } from '@testing-library/react'
import Nav from './Nav'

describe('Nav Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Nav />)
    expect(asFragment()).toMatchSnapshot()
  })
})
