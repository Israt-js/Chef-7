import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Banner from './Banner';
import Recipe from './Recipe';
import Footer from './Footer';
import About from './About';
import Register from './Register';
import Catagory from './Catagory';
import './App.css';
import Login from './Login';

function App() {
  return (
    <div className="min-h-screen bg-white"> {/* Ensures full height and white background */}
      <Nav />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catagory" element={<Catagory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
