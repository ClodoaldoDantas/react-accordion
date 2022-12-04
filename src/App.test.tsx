import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('should render correctly', () => {
    render(<App />)

    expect(screen.getByText('📫 Perguntas e Respostas')).toBeInTheDocument()
    expect(screen.getByText('Tire suas dúvidas aqui.')).toBeInTheDocument()
    expect(
      screen.getByText('Desenvolvido por Clodoaldo Dantas 🦄'),
    ).toBeInTheDocument()
  })
})
