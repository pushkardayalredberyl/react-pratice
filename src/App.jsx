
import './App.css'
import About from './Component/About'
import Campus from './Component/Campus'
import Contact from './Component/Contact'
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import Programs from './Component/Programs'
import Testimonials from './Component/Testimonials'


import Title from './Component/Title'

function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>
     <div className="container">
      <Title subtitle={"Our Program"} titleheading={"What we offer"}/>
     <Programs/>
     <About/>
     <Title subtitle={"Our Galary"} titleheading={"Campus Photos"}/>
     <Campus/>
     <Title subtitle={"Testimonials"} titleheading={"What student says"}/>
     <Testimonials/>
     <Title subtitle={"Contact"} titleheading={"Get in touch"}/>
     <Contact/>
     </div>
     
     
     
    </>
  )
}

export default App
