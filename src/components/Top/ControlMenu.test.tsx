import React from 'react'
import { render, screen } from '@testing-library/react'

import { ControlMenu } from './ControlMenu'

describe('ControlMenu', () => {
  test('control menu rendering', () => {
    render(<ControlMenu />)
    expect(screen.getByRole('btnWrapper')).toBeInTheDocument()
  })
})
