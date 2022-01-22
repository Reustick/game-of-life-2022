import React from 'react'
import { render, screen } from '@testing-library/react'

import { DescriptionOfRules } from './DescriptionOfRules'

describe('DescriptionOfRules', () => {
  test('description rendering', () => {
    render(<DescriptionOfRules />)
    expect(screen.getByRole('description')).toBeInTheDocument()
  })
})
