import React from 'react'
import { render } from '@testing-library/react'
import MainCard from './MainCard'
import { renderWithProviders } from 'src/utils/testUtils'

describe('MainCard Component', () => {
  test('should render', () => {
    renderWithProviders(<MainCard title='' desc='' />)
  })
})
