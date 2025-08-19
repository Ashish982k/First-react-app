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
    <>
      <Navbar />
      <Header />
      <About />
      <Products />
      <Cooler />
      <Contact />
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App;
