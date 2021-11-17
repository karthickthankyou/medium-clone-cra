import React from 'react'
import App from './App'
import { renderWithProviders } from './utils/testUtils'

test('renders learn react link', () => {
  renderWithProviders(<App />)
})
