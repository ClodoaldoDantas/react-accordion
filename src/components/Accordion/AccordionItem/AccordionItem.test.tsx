import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AccordionItem } from '.'

describe('Accordion', () => {
  it('should render correctly', () => {
    render(<AccordionItem title="title test" content="content test" />)
    expect(screen.getByRole('listitem')).toBeInTheDocument()
  })

  it('should render title', () => {
    render(<AccordionItem title="title test" content="content test" />)
    expect(screen.getByText('title test')).toBeInTheDocument()
  })

  it('should toggle accordion', async () => {
    render(<AccordionItem title="title test" content="content test" />)

    expect(screen.queryByText('content test')).not.toBeInTheDocument()
    expect(screen.queryByTestId('icon-plus')).toBeInTheDocument()
    expect(screen.queryByTestId('icon-x')).not.toBeInTheDocument()

    const buttonToggle = screen.getByTestId('btn-toggle')
    await userEvent.click(buttonToggle)

    expect(screen.queryByText('content test')).toBeInTheDocument()
    expect(screen.queryByTestId('icon-plus')).not.toBeInTheDocument()
    expect(screen.queryByTestId('icon-x')).toBeInTheDocument()
  })
})
