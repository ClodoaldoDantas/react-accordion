import { render, screen } from '@testing-library/react'
import { Accordion } from '.'

describe('Accordion', () => {
  it('should render correctly', () => {
    render(
      <Accordion>
        <li>content</li>
      </Accordion>,
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
  })
})
