import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ProjectGallery from './Components/ProjectGallery';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="src/Components/Home.jsx" element={<Home />} />
        <Route path="src/Components/Project.jsx" element={<ProjectGallery />} />
        <Route path="src/Components/Contact.jsx" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
