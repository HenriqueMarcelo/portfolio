import { Project, ProjectType } from '../components/Project'

import projectsJson from '../projects'
import { useTranslation } from 'react-i18next'
import { Fragment } from 'react'

export function Projects() {
  const { i18n, t } = useTranslation()

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

  const categoriesWithProjects = projects.reduce(
    (acc: any, project: ProjectType) => {
      if (acc[project.category]) {
        acc[project.category].push(project)
      } else {
        acc[project.category] = [project]
      }
      return acc
    },
    {},
  )

  return (
    <section className="bg-neutral-300 pt-16 sm:pt-20" id="projects">
      {Object.keys(categoriesWithProjects).map((category) => {
        return (
          <Fragment key={category}>
            <h2 className="text-center text-6xl lg:text-8xl font-medium lg:mb-36 mb-16">
              {t(category)}
              <hr className="h-1 w-64 my-4 bg-orange-600 border-0 mx-auto"></hr>
            </h2>
            {categoriesWithProjects[category].map(
              (project: ProjectType, i: number) => {
                return (
                  <Project
                    project={project}
                    key={project.id}
                    orientation={i % 2 ? 'right' : 'left'}
                  />
                )
              },
            )}
          </Fragment>
        )
      })}
    </section>
  )
}
