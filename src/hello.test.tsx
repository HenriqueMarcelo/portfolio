import { render, screen } from '@testing-library/react'

function Componente() {
  return <hr />
}

test('olá mundo', () => {
  render(<Componente />)
  const hr = screen.getByRole('separator')
  expect(hr).toBeInTheDocument()
})
