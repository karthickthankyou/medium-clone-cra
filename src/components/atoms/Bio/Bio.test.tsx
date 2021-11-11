import React from 'react'
import { render } from '@testing-library/react'
import Bio from './Bio'

describe('Bio Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Bio src='' author='Karthick' />)
    expect(asFragment()).toMatchSnapshot()
  })
})
