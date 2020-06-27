import React from 'react'
import './App.css'

// Components
import Container from './components/container/Container'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Realtors from './components/realtors/Realtors'
import Features from './components/features/Features'
import Story from './components/story/Story'
import Homes from './components/homes/Homes'
import Gallery from './components/gallery/Gallery'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </Container>
  )
}

export default App
