import React from 'react'
import { render, screen } from '@testing-library/react'

import { GenerationCounter } from './GenerationCounter'

describe('GenerationCounter', () => {
  test('generation counter rendering', () => {
    render(<GenerationCounter />)
    expect(screen.getByRole('GenerationWrapper')).toBeInTheDocument()
  })
})
