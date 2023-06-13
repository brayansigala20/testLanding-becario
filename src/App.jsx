import '../src/index.css'
import Footer from './components/Footer'
import InfoPanel from './components/InfoPanel'
import PersuationData from './components/PersuationData'
import SchedulleSection from './components/SchedulleSection'
import MainPage from './pages/MainPage'

function App() {

  return (
    <>
      <MainPage />
      <InfoPanel />
      <PersuationData />
      <SchedulleSection />
      <Footer />
    </>
  )
}

export default App
