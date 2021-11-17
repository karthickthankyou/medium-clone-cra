import React from 'react'
import { render } from '@testing-library/react'
import Nav from './Nav'
import { renderWithProviders } from 'src/utils/testUtils'

describe('Nav Component', () => {
  test('should render', () => {
    renderWithProviders(<Nav />)
  })
})
