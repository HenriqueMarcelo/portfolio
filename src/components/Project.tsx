import { useTranslation } from 'react-i18next'

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
      <div className="grid grid-cals-1 gap-8 md:grid-cols-2 lg:gap-32 pb-16 md:pb-20">
        <div className={orientation === 'left' ? 'block md:hidden' : ''}>
          <img
            src={project.image}
            alt=""
            className="shadow-2xl shadow-neutral-500 w-full"
          />
        </div>
        <div className={`md:text-${orientation}`}>
          <h2 className="text-4xl lg:text-6xl">{project?.title}</h2>
          {/* <h3 className="text-4xl mt-6">lacus quis semper</h3> */}
          {project?.description && (
            <p className="leading-7 mt-6">{project.description}</p>
          )}
          {project?.technologies && (
            <>
              <h3 className="text-2xl lg:text-4xl mt-12">
                {t('technologiesUsed')}
              </h3>
              <p className="leading-7 mt-4 ">{project.technologies}</p>
            </>
          )}
          <div
            className={`flex gap-5 mt-12 ${
              orientation === 'right' && 'md:justify-end'
            }`}
          >
            {project?.github && (
              <a
                href={project.github}
                className="bg-neutral-900 text-white py-3.5 px-7 rounded-full cursor-pointer hover:bg-neutral-700 transition shadow-sm shadow-neutral-500"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}

            {project?.url && (
              <a
                href={project.url}
                className="bg-neutral-900 text-white py-3.5 px-7 rounded-full cursor-pointer hover:bg-neutral-700 transition shadow-sm shadow-neutral-500"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            )}
          </div>
        </div>
        {orientation === 'left' && (
          <div className="hidden md:block ">
            <img
              src={project.image}
              alt=""
              className="ml-auto shadow-2xl shadow-neutral-500"
            />
          </div>
        )}
      </div>
    </article>
  )
}
