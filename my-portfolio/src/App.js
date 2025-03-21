import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MatrixBackground from './components/MatrixBackground'; // Import the new component
import './App.css';

function App() {
  return (
    <Router basename="/my-portfolio">
      <div className="container-fluid p-0" id="app">
        <MatrixBackground /> {/* Add the Matrix background */}
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;