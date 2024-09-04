import React, { useState } from 'react';
import axios from 'axios';


function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState(''); //address

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual signup endpoint
      await axios.post('/signup', { email, password });
      // Handle successful signup (e.g., redirect to login)
      window.location.href = '/login'; // Redirect to login page
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
