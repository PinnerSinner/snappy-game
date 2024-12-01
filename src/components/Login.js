import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Example login logic (mock authentication)
      if (email === "test@example.com" && password === "password") {
        console.log("Login successful!", email, password);
        navigate("/dashboard"); // Redirect to Dashboard
      } else {
        throw new Error("Invalid login credentials");
      }
    } catch (error) {
      setError(error.message); // Display the error to the user
      console.error("Login failed:", error);
    }
  };

  const handleOAuthLogin = (provider) => {
    const authUrl = `https://snappy.pocketbase.io/api/oauth2/${provider}`;
    window.location.href = authUrl;
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
      <div className="oauth-buttons">
        <h3>Or login with:</h3>
        <button
          className="btn-google"
          onClick={() => handleOAuthLogin("google")}
        >
          <i className="fab fa-google"></i> Login with Google
        </button>
        <button
          className="btn-github"
          onClick={() => handleOAuthLogin("github")}
        >
          <i className="fab fa-github"></i> Login with GitHub
        </button>
      </div>
      <p className="signup-link">
        Don’t have an account? <Link to="/signup">Sign up here!</Link>
      </p>
    </div>
  );
}

export default Login;
