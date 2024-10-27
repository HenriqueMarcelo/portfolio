import userEvent from "@testing-library/user-event"
import Home from "../Home"
import { render, screen } from "../tests/test-utils"

describe('Mobile aside menu', () => {
    it('should show and aside menu when hamburguer button is clicked', async () => {
        render(<Home />)
        const user = userEvent.setup()
    
        const navMenu = screen.getAllByRole('navigation')[1]
        expect(navMenu).toHaveClass('translate-x-full')
    
        const hamburguerButton = screen.getByLabelText('Open the menu')
        await user.click(hamburguerButton)
    
        expect(navMenu).not.toHaveClass('translate-x-full')    
    })

    it('should hide aside menu when x button is clicked', async () => {
        render(<Home />)
        const user = userEvent.setup()
    
        const hamburguerButton = screen.getByLabelText('Open the menu')
        await user.click(hamburguerButton)

        const xButton = screen.getByLabelText('Close the menu')
        await user.click(xButton)
        
        const navMenu = screen.getAllByRole('navigation')[1]
        expect(navMenu).toHaveClass('translate-x-full')
    })

})