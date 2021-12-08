import React, { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className="AuthPage">
        <img src="images/nw-logo.jpeg" alt="NW Logo"/>
        <p id="greeting">
          Welcome! <br/>
          Thanks for your interest in growing our local urban forest.
        </p>
        <hr />
        <div className="auth-forms">
          <div className="auth-toggle">
            <p id="toggle-desc">{showSignUp ? 'Already a user?' : 'Need to create an account?'}</p>
            <button className="auth-btn" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
          </div>
          { showSignUp ?
            <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser} />
          }
        </div>
    </main>
  );
}