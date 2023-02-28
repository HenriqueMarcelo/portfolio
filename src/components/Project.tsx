import { useTranslation } from 'react-i18next'
import silver from '../assets/silver.png'

export interface ProjectType {
  id: number
  title?: string
  description?: string
  technologies?: string
  image: string
  github?: string
  url?: string
}

interface ProjectProps {
  orientation?: 'right' | 'left'
  project: ProjectType
}

export function Project({ orientation = 'left', project }: ProjectProps) {
  const { t } = useTranslation()

  return (
    <article className="container mx-auto px-8">
      <div className="grid grid-cals-1 gap-8 sm:grid-cols-2 sm:gap-32 pb-20">
        <div className={orientation === 'left' ? 'block sm:hidden' : ''}>
          <img src={project.image} alt="" />
        </div>
        <div className={`sm:text-${orientation}`}>
          <h2 className="text-6xl mb-6">{project?.title}</h2>
          {/* <h3 className="text-4xl mb-4">lacus quis semper</h3> */}
          {project?.description && (
            <p className="leading-7 mb-12">{project.description}</p>
          )}
          {project?.technologies && (
            <>
              <h3 className="text-4xl mb-4">{t('technologiesUsed')}</h3>
              <p className="leading-7 mb-12">{project.technologies}</p>
            </>
          )}
          <div
            className={`flex gap-5 ${
              orientation === 'right' && 'sm:justify-end'
            }`}
          >
            {project?.github && (
              <a
                href={project.github}
                className="bg-neutral-900 text-white py-3.5 px-7 rounded-full cursor-pointer hover:bg-neutral-700 transition"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}

            {project?.url && (
              <a
                href={project.url}
                className="bg-neutral-900 text-white py-3.5 px-7 rounded-full cursor-pointer hover:bg-neutral-700 transition"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            )}
          </div>
        </div>
        {orientation === 'left' && (
          <div className="hidden sm:block">
            <img src={silver} alt="" className="ml-auto" />
          </div>
        )}
      </div>
    </article>
  )
}
