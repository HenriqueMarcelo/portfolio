import { MobileAsideNav } from './components/MobileAsideNav'
import { Header } from './sections/Header'
import { Presentantion } from './sections/Presentation'
import { Projects } from './sections/Projects'

function Home() {
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
