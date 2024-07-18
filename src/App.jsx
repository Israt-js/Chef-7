import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Banner from './Banner';
import Recipe from './Recipe';
import Footer from './Footer';
import './App.css';
import About from './About';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

