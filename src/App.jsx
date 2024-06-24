import Navbar from './Componentes/Navbar'
import Presentation from './Componentes/Presentation'
import Projects from './Componentes/Projetos'
import AboutMe from './Componentes/AboutMe'
import Footer from './Componentes/Footer'

function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <Presentation/>
      <Projects/>
      <AboutMe/>
      <Footer/>
    </div>
  )
}

export default App
