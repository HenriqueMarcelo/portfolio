import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

function Componente() {
  return <hr />
}

test('olá mundo', () => {
  render(<Componente />)
  const hr = screen.getByRole('separator')
  expect(hr).toBeInTheDocument()
})
