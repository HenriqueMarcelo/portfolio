import { useTranslation } from 'react-i18next'
import maroon from '../assets/maroon.jpg'
import silver from '../assets/silver.png'

export function Presentantion() {
  const { t } = useTranslation()

  return (
    <section className="bg-neutral-900 pb-16 sm:pb-20" id="presentation">
      <article className="container mx-auto ">
        <div className="p-8 md:p-14 lg:p-24 bg-neutral-300 rounded-lg mx-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 lg:gap-16">
            <div className="col-span-2 md:col-span-1">
              <img src={silver} className="md:hidden" />
              <img
                src={maroon}
                className="hidden md:block shadow-2xl shadow-neutral-500"
              />
            </div>
            <div className="col-span-2 md:text-right flex items-center justify-end">
              <div className="">
                <h2 className="text-4xl lg:text-6xl">{t('title')}</h2>
                <hr className="h-1 w-32 my-4 bg-orange-600 border-0 mr-0 md:ml-auto"></hr>
                <div className="flex">
                  <div className="leading-7">
                    <p className="mb-4">{t('description1')}</p>
                    <p className="mb-4">{t('description2')}</p>
                    <p className="mb-4">{t('description3')}</p>
                    <span className="flex gap-4 justify-end mt-8">
                      <a
                        href="https://www.linkedin.com/in/marcelo-henrique-fonseca/"
                        className="text-orange-600 font-bold text-lg hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Linkedin
                      </a>
                      <a
                        href="https://github.com/HenriqueMarcelo"
                        className="text-orange-600 font-bold text-lg hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
