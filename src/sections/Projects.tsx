import { Project, ProjectType } from '../components/Project'

import ptBRProjects from '../projects/pt-BR'
import enUSProjects from '../projects/en-US'
import { useTranslation } from 'react-i18next'

export function Projects() {
  const { i18n } = useTranslation()

  let projects = [] as ProjectType[]

  if (i18n.language === 'en-US') {
    projects = enUSProjects
  }

  if (i18n.language === 'pt-BR') {
    projects = ptBRProjects
  }

  return (
    <section className="bg-neutral-300 pt-20" id="projects">
      {projects.map((project, i) => {
        return (
          <Project
            project={project}
            key={project.id}
            orientation={i % 2 ? 'right' : 'left'}
          />
        )
      })}
    </section>
  )
}
