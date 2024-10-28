import { render, screen, within } from "../tests/test-utils"
import { Projects } from "./Projects"

it('should render in left every other element in each category', async () => {
    render(<Projects />)

    const projects = screen.getAllByRole('article')

    const firstImg = within(projects[0]).getByRole('img')
    expect(firstImg).toHaveClass('block md:hidden')

    const segondImg = within(projects[1]).getByRole('img')
    expect(segondImg).not.toHaveClass('block md:hidden')
})