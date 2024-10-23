import React, { useState } from "react";
import axios from "axios";
import {API_URL} from "../constants";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to the backend
      const response = await axios.post(`${API_URL}/user/login`, { email, password });

      // Get the token from the response data
      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem('token', token);
      
      // Redirect to the homepage or dashboard after successful login  
      window.location.href = "/"; 
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };   

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <p>Please login, by using your email and password:</p>
      <form onSubmit={handleSubmit} className="form-styling">
        <label>
          Email:
          <input
            className="input-styling"
             placeholder='Please enter your email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            className="input-styling"
             placeholder='Please enter your password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="signup-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
