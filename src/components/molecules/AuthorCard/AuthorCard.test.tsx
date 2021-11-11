import React from 'react'
import { render } from '@testing-library/react'
import AuthorCard from './AuthorCard'

describe('AuthorCard Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(
      <AuthorCard displayName='hello' about='hello' src='hello' />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
