import React, { useState } from 'react';
import './Login.css'; // Note the change to .css
import Nav from '../components/Nav';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const toggleForms = (formType) => {
    if (formType === 'login') {
      setShowLogin(true);
      setShowSignup(false);
    } else if (formType === 'signup') {
      setShowLogin(false);
      setShowSignup(true);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted');
  };

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="toggleButtons">
          <button
            className={`toggleButton ${showLogin ? 'active' : ''}`}
            onClick={() => toggleForms('login')}
          >
            Login
          </button>
          <button
            className={`toggleButton ${showSignup ? 'active' : ''}`}
            onClick={() => toggleForms('signup')}
          >
            Signup
          </button>
        </div>
        <div className="forms">
          {showLogin && (
            <form className="form" onSubmit={handleLoginSubmit}>
              <h2>Login</h2>
              <label>
                Username:
                <input type="text" />
              </label>
              <label>
                Password:
                <input type="password" />
              </label>
              <button type="submit">Login</button>
            </form>
          )}
          {showSignup && (
            <form className="form" onSubmit={handleSignupSubmit}>
              <h2>Signup</h2>
              <label>
                Username:
                <input type="text" />
              </label>
              <label>
                Email:
                <input type="email" />
              </label>
              <label>
                Password:
                <input type="password" />
              </label>
              <button type="submit">Signup</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
