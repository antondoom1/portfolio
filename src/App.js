import './App.css'
import {Menu} from './components/c1-menu/Menu'
import {Header} from './components/c2-header/Header'
import {About} from './components/c3-about/About'
import {Services} from './components/c4-services/Services'
import {Projects} from './components/c5-projects/Projects'
import {Contacts} from './components/c6-contacts/Contacts'
import {Footer} from './components/c7-footer/Footer'
import {GoTopButton} from './components/c0-common/buttons/go-top-button/GoTopButton'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <About/>
      <Services/>
      <Projects/>
      <Contacts/>
      <Footer/>
      <GoTopButton/>
    </div>
  )
}

export default App
