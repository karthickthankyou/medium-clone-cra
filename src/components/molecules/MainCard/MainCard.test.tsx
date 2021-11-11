import React from 'react'
import { render } from '@testing-library/react'
import MainCard from './MainCard'

describe('MainCard Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<MainCard title='' desc='' />)
    expect(asFragment()).toMatchSnapshot()
  })
})
