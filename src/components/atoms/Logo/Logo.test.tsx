import React from 'react'
import Logo from './Logo'
import { renderWithProviders } from 'src/utils/testUtils'

describe('Logo Component', () => {
  test('should render', () => {
    renderWithProviders(<Logo />)
  })
})
