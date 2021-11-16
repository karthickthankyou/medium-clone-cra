import React from 'react'
import { render } from '@testing-library/react'
import Logo from './Logo'

describe('Logo Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Logo />)
    expect(asFragment()).toMatchSnapshot()
  })
})
