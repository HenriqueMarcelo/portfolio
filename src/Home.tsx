import { Header } from './pages/Header'
import { Presentantion } from './pages/Presentation'
import { Project } from './pages/Project'

function Home() {
  return (
    <div>
      <Header />
      <Presentantion />
      <Project />
      <Project orientation="right" />
    </div>
  )
}

export default Home
