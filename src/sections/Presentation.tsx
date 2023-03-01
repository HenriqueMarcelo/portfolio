import { useTranslation } from 'react-i18next'
import maroon from '../assets/maroon.png'
import silver from '../assets/silver.png'

export function Presentantion() {
  const { t } = useTranslation()

  return (
    <section className="bg-neutral-900 pb-20" id="presentation">
      <article className="container mx-auto ">
        <div className="p-8 md:p-24 bg-neutral-300 rounded-lg mx-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16">
            <div className="col-span-2 md:col-span-1">
              <img src={silver} className="md:hidden" />
              <img src={maroon} className="hidden md:block" />
            </div>
            <div className="col-span-2 md:text-right flex items-center justify-end">
              <div className="">
                <h2 className="text-4xl md:text-6xl">{t('title')}</h2>
                <hr className="h-1 w-32 my-4 bg-orange-600 border-0 mr-0 md:ml-auto"></hr>
                <div className="flex">
                  <p className="leading-7">
                    {t('description')}
                    <span className="flex gap-4 justify-end mt-8">
                      <a
                        href=""
                        className="text-orange-600 font-bold text-lg hover:underline"
                      >
                        Linkedin
                      </a>
                      <a
                        href=""
                        className="text-orange-600 font-bold text-lg hover:underline"
                      >
                        Github
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
