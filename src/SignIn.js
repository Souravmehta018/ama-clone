import React, { useState } from 'react';
import './CSS/SignIn.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firebaseApp } from './Firebase';


function LogIn() {
    const navigat = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user credentials>>>>>", userCredential);
        // Successfully signed in
        if (userCredential){
            navigat('/')
        }
      })
      .catch((error) => alert(error.message));
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully created the user
        if (userCredential){
            navigat('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signin">
      <Link to="/">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
          alt=""
          className="signin__logo"
        />
      </Link>
      <div className="signin__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <button className="signin__signup" onClick={signUp}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LogIn;
