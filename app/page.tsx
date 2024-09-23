import Nav from "./Components/Nav";
import HeroSection from './Components/HeroSection'
import QuickInfo from './Components/QuickInfo'
import AboutPage from './Components/AboutUs'
import ProgramsPage from './Components/Programs'
import TrainersPage from './Components/Trainers'
import GalleryPage from './Components/Gallery'
import SchedulePage from './Components/Schedule'
import ContactPage from './Components/Contact'

function Home() {
  return (
    <div >
      <Nav/>
     <HeroSection/>
     <QuickInfo/> 
     <GalleryPage/>
     <TrainersPage/>
     <ProgramsPage/>
     <SchedulePage/>
     <AboutPage/>
     <ContactPage/>
    </div>
  )
}

export default Home
