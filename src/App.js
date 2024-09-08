import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/About';
import { Footer } from './Components/Layout/Footer';
import { Nav } from './Components/Layout/Nav';
import { Blog } from './Components/Blog';
import { Contact } from './Components/Contact';
import { Cv } from './Components/Layout/Cv';
import React, { Component }  from 'react';
import DarkToggle from './Components/DarkToggle';
function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/me/" element={<About />} />
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
      <DarkToggle />
    </div>
  );
}

export default App;