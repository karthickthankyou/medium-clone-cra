import React from 'react'
import { render } from '@testing-library/react'
import Callout1 from './Callout1'

describe('Callout1 Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Callout1 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
