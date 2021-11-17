import React from 'react'
import Bio from './Bio'
import { renderWithProviders } from 'src/utils/testUtils'

describe('Bio Component', () => {
  test('should render', () => {
    renderWithProviders(<Bio src='' author='Karthick' />)
  })
})
