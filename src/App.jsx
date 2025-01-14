import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Works } from './components';

const App = () => { 

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#030303]"> 
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience/>
        <Works/>
        <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
