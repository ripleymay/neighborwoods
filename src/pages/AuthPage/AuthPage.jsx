import React, { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className="AuthPage">
        <img src="images/nw-logo.jpeg" alt="NW Logo"/>
        <h4>Get a tree!</h4>
        <div className="auth-forms">
          <div className="auth-toggle">
            <p>{showSignUp ? 'Already a user?' : 'Need to create an account?'}</p>
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