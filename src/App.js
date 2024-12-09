import React, { useState } from 'react';
import FullPage from './components/FullPage'

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login function
  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true); // Set user as logged in
    } else {
      alert('Invalid credentials'); // Alert if credentials are incorrect
    }
  };

  // Login Page UI with inline styles
  const LoginPage = () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#121212'
    }}>
      <div style={{
        backgroundColor: '#1E1E1E',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        width: '300px'
      }}>
        <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>Login</h2>
        <form id="login-form">
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color:'white' }}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              style={{
                width: '90%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #444',
                backgroundColor: '#333',
                color: '#fff'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color:'white' }}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{
                width: '90%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #444',
                backgroundColor: '#333',
                color: '#fff'
              }}
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4CAF50',
              border: 'none',
              color: '#fff',
              fontSize: '16px',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );


  return (
    <div>
      {isLoggedIn ? <FullPage /> : <LoginPage />}
    </div>
  );
};

export default App;
