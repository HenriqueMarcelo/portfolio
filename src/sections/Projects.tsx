import { Project, ProjectType } from '../components/Project'

import projectsJson from '../projects'
import { useTranslation } from 'react-i18next'

export function Projects() {
  const { i18n } = useTranslation()

  let projects = [] as ProjectType[]

  projects = projectsJson.map((projectI18n) => {
    let description = '' as string | undefined
    let technologies = '' as string | undefined

    if (i18n.language === 'pt-BR') {
      description = projectI18n.ptBR.description
      technologies = projectI18n.ptBR.technologies
    }

    if (i18n.language === 'en-US') {
      description = projectI18n.enUS.description
      technologies = projectI18n.enUS.technologies
    }

    return {
      description,
      technologies,
      ...projectI18n,
    }
  })

  return (
    <section className="bg-neutral-300 pt-16 sm:pt-20" id="projects">
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
