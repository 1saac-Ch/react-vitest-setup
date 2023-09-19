import { render, screen, userEvent } from '@/utils/test-utils'
import SomeComponent from '../SomeComponent'

describe('Input', async () => {
  it('should foo', () => {
    render(<SomeComponent />)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })
})
