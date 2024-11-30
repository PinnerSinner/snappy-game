import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';
import Login from './components/Login';
import './styles.css';

function App() {
  return (
    <Router>
      <nav>
        <a href="/">Home</a>
        <a href="/cards">Cards</a>
        <a href="/login">Login</a>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Snappy Game</h1>} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
