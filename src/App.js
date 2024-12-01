import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cards from "./components/Cards";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import "./styles.css";
import PocketBase from "pocketbase";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const pb = new PocketBase("https://snappy.pockethost.io");

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = pb.authStore.model;
    if (storedUser) {
      setUser(storedUser);
    }
    pb.authStore.onChange(() => setUser(pb.authStore.model));
  }, []);
  

  return (
    <Router>
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
        <Route path="/cards" element={user ? <Cards /> : <h1>Please log in to view the cards.</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
