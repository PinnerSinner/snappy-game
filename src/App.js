import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';
import Login from './components/Login';
import './styles.css';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="bg-blue-500 p-4">
        <div className="flex justify-center space-x-4">
          <a href="/" className="text-white text-lg font-semibold hover:underline">
            Home
          </a>
          <a href="/cards" className="text-white text-lg font-semibold hover:underline">
            Cards
          </a>
          <a href="/login" className="text-white text-lg font-semibold hover:underline">
            Login
          </a>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
              <h1 className="text-5xl font-bold text-blue-600 mb-4">
                Welcome to Snappy Game
              </h1>
              <p className="text-lg text-gray-700">
                Spot the matches, outplay your opponent, and have fun!
              </p>
              <a
                href="/cards"
                className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
              >
                Get Started
              </a>
            </div>
          }
        />
        <Route path="/cards" element={<Cards />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
