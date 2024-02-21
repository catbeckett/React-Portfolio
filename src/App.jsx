import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ProjectGallery from './Components/ProjectGallery';
import Contact from './Components/Contact';

function App() {
  return (
    <Router basename="/React-Portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<ProjectGallery />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
