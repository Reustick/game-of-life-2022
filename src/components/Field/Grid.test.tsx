import React from 'react'
import { render, screen } from '@testing-library/react'

import { Grid } from './Grid'

describe('Render wrapper', () => {
  test('renders wrapper component', () => {
    render(
      <Grid
        x={0}
        y={0}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onClick={function (x: number, y: number): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
    expect(screen.getByRole('wrapper')).toBeInTheDocument()
  })
})
