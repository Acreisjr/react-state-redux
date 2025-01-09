import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CommunicationPage from './pages/CommunicationPage/CommunicationPage';

function App() {
  
  return (
    <Router>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/communication" element={<CommunicationPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
