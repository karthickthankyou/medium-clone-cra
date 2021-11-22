import React from 'react'
import { render } from '@testing-library/react'
import SubMainCard from './SubMainCard'
import { renderWithProviders } from 'src/utils/testUtils'

describe('SubMainCard Component', () => {
  test('should render', () => {
    renderWithProviders(<SubMainCard title='Hello' />)
  })
})
