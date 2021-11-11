import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'

describe('Card Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
  })
})
