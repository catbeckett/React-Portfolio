import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <route "/" element = {<Home />}>
        <route "/About" element = {<About/>}>
        <route "/Projects" element = {<ProjectGallery />}>
      </Routes>
    </Router>
)
}

export default App
