import React from 'react'
import { render } from '@testing-library/react'
import Editor from './Editor'

describe('Editor Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Editor />)
    expect(asFragment()).toMatchSnapshot()
  })
})
