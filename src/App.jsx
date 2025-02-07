import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import Popular from './components/Popular'
import OurService from './components/OurService'
import ClientSaid from './components/ClientSaid'
import EventUpcoming from './components/Event'
import Footer from './components/Footer'
import ResVSearch from './components/ResVSearch'

function App() {

  return (
    <>  
      <NavBar/>
      <Carousel/>
      <Popular/>
      <ResVSearch/>
      <OurService/>
      <ClientSaid/>
      <EventUpcoming/>
      <Footer/>
    </>
  )
}

export default App
