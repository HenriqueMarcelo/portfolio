import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { MobileAsideNav } from './components/MobileAsideNav'
import { Header } from './sections/Header'
import { Presentantion } from './sections/Presentation'
import { Projects } from './sections/Projects'
// import { Skills } from './sections/Skills'

function Home() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('pageTitle')
  }, [t])

  return (
    <div>
      <Header />
      <Presentantion />
      {/* <Skills /> */}
      <Projects />
      <MobileAsideNav />
    </div>
  )
}

export default Home
