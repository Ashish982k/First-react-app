import React from 'react'
import Navbar from './Components/navbar.jsx'
import Header from './Components/Header.jsx'
import About from './Components/About.jsx'
import Products from './Components/Products.jsx'
import Cooler from './Components/Cooler.jsx'
import Contact from './Components/Contact.jsx'
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer.jsx'


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Header/>
      <About/>
      <Products/>
      <Cooler/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
