import Home from "../Home"
import { render, screen, within } from "../tests/test-utils"
import { userEvent } from '@testing-library/user-event'

describe('Change languages', () => {
    it('should change presentation title language when user choose another language on dropdown', async () => {
        render(<Home />)
        const user = userEvent.setup()
        const header = screen.getByRole('banner')
    
        // verifica se o tiulo inicia com o conteúdo em inglês
        const presentationTitle = screen.getByRole('heading', {name: /who am i/i})
    
        const languageButton = within(header).getByRole('button', {name: /english/i})
        await user.click(languageButton)
        const changeToPortugueseButton = screen.getByRole('menuitem', {name: /português/i})
        await user.click(changeToPortugueseButton)
    
        // verifica se o tiulo inicia com o conteúdo em portugês
        expect(presentationTitle).toHaveTextContent(/quem sou eu/i)
    
        await user.click(languageButton)
        const changeToEnglishButton = screen.getByRole('menuitem', {name: /english/i})
        await user.click(changeToEnglishButton)
    
        // verifica se o tiulo volta com o conteúdo em inglês
        expect(presentationTitle).toHaveTextContent(/who am i/i)
        
    })

    it('should change more information button language when user choose another language on dropdown', async () => {
        render(<Home />)
        const user = userEvent.setup()
        const header = screen.getByRole('banner')
    
        // verifica se o botão inicia com o conteúdo em inglês
        const moreInformationButton = screen.getAllByRole('link', {name: /more information/i})[0]
    
        const languageButton = within(header).getByRole('button', {name: /english/i})
        await user.click(languageButton)
        const changeToPortugueseButton = screen.getByRole('menuitem', {name: /português/i})
        await user.click(changeToPortugueseButton)
    
        // verifica se o botão inicia com o conteúdo em portugês
        expect(moreInformationButton).toHaveTextContent(/mais infomrações/i)
    
        await user.click(languageButton)
        const changeToEnglishButton = screen.getByRole('menuitem', {name: /english/i})
        await user.click(changeToEnglishButton)
    
        // verifica se o botão volta com o conteúdo em inglês
        expect(moreInformationButton).toHaveTextContent(/more information/i)
        
    })

    it('should change technologies title language when user choose another language on dropdown', async () => {
        render(<Home />)
        const user = userEvent.setup()
        const header = screen.getByRole('banner')
    
        // verifica se o título inicia com o conteúdo em inglês
        const moreInformationButton = screen.getAllByRole('heading', {name: /technologies used/i})[0]
    
        const languageButton = within(header).getByRole('button', {name: /english/i})
        await user.click(languageButton)
        const changeToPortugueseButton = screen.getByRole('menuitem', {name: /português/i})
        await user.click(changeToPortugueseButton)
    
        // verifica se o título inicia com o conteúdo em portugês
        expect(moreInformationButton).toHaveTextContent(/Tecnologias Utilizadas/i)
    
        await user.click(languageButton)
        const changeToEnglishButton = screen.getByRole('menuitem', {name: /english/i})
        await user.click(changeToEnglishButton)
    
        // verifica se o título volta com o conteúdo em inglês
        expect(moreInformationButton).toHaveTextContent(/technologies used/i)
        
    })

})