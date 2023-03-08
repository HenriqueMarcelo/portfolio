import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { MobileAsideNav } from './components/MobileAsideNav'
import { Header } from './sections/Header'
import { Presentantion } from './sections/Presentation'
import { Projects } from './sections/Projects'

function Home() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('pageTitle')
  }, [])

  return (
    <div>
      <Header />
      <Presentantion />
      <Projects />
      <MobileAsideNav />
    </div>
  )
}

export default Home
