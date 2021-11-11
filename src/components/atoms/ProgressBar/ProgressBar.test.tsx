import React from 'react'
import { render } from '@testing-library/react'
import ProgressBar from './ProgressBar'

describe('ProgressBar Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ProgressBar />)
    expect(asFragment()).toMatchSnapshot()
  })
})
