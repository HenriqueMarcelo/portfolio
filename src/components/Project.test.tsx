import { render, screen } from "../tests/test-utils"
import { Project } from "./Project"

describe('Project component', () => {
    const project = {
        id: 1,
        title: 'Título do projeto', // opicional
        description: 'Descricão do projeto', // opicional
        technologies: 'Tecnologias usadas', // opicional
        image: 'Imagem.png',
        github: 'https://github.com', // opicional
        url: 'https://url.com', // opicional
        info: 'Informações adicionais', // opicional
        category: 'laravel' as 'laravel',
    } as any

    it('should render correctly if passing all props of a project', () => {
        render(<Project project={project} />)

        expect(screen.getByRole('heading', { name: project.title} )).toBeInTheDocument()
        expect(screen.getAllByRole('paragraph')[0]).toHaveTextContent(project.description)
        expect(screen.getAllByRole('paragraph')[1]).toHaveTextContent(project.technologies)
        expect(screen.getAllByRole('presentation')[0].getAttribute('src')).toEqual(project.image)
        expect(screen.getByRole('link', {name: 'GitHub'})).toHaveAttribute('href', project.github)
        expect(screen.getByRole('link', {name: 'Link'})).toHaveAttribute('href', project.url)
        expect(screen.getByRole('link', {name: 'More information'})).toHaveAttribute('href', project.info)
    })

    it('should not render opcional props if not passed', () => {
        const projectWithOutProps = structuredClone(project);

        delete projectWithOutProps.title
        delete projectWithOutProps.description
        delete projectWithOutProps.technologies
        delete projectWithOutProps.github
        delete projectWithOutProps.url
        delete projectWithOutProps.info

        render(<Project project={projectWithOutProps} />)
       
        expect(screen.queryByRole('heading', { name: project.title} )).not.toBeInTheDocument()
        expect(screen.queryByRole('paragraph')).not.toBeInTheDocument()
        expect(screen.queryByRole('link', {name: 'GitHub'})).not.toBeInTheDocument()
        expect(screen.queryByRole('link', {name: 'Link'})).not.toBeInTheDocument()
        expect(screen.queryByRole('link', {name: 'More information'})).not.toBeInTheDocument()
    })

    it('should not render second image and first image must be shown when orientation is right', () => {
        render(<Project project={project} orientation="right"/>)
        
        expect(screen.getAllByRole('presentation')).toHaveLength(1)
        expect(screen.getByRole('img')).not.toHaveClass('block md:hidden')
    })

    it('should not show first image if orientation is left', () => {
        render(<Project project={project} orientation="left"/>)

        expect(screen.getAllByRole('presentation')).toHaveLength(2)
        expect(screen.getByRole('img')).toHaveClass('block md:hidden')

    })
})