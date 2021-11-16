import React from 'react'
import { render } from '@testing-library/react'
import CardFooter from './CardFooter'

describe('CardFooter Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(
      <CardFooter publishDate='Hello' readDuration={12} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
