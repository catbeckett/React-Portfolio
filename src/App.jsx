import React from 'react';
import '../src/App.css';
import Header from '../src/Components/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Components/Home.jsx';
import ProjectGallery from '../src/Components/ProjectGallery.jsx';
import Contact from '../src/Components/Contact.jsx';

function App() {
  return (
    <Router>
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
