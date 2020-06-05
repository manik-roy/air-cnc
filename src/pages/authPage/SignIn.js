import React, { useRef, useEffect, useState } from 'react';
import './signin.scss';
import InputItem from '../../components/inputItem/InputItem';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const loginRef = useRef(null);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if(loginRef) {
      loginRef.current.focus();
    }
  }, [])

  const submitHandler = e => {
    e.preventDefault();
  }

  const handleInput = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const { email, password } = formData;

  return (
    <div className="sign-up-area">
      <form onSubmit={submitHandler} >

        <InputItem
          onChange={handleInput}
          name="email"
          type="email"
          label="Email"
          ref={loginRef}
          value={email}
          placeholder="example@gmail.com"
        />

        <InputItem
          onChange={handleInput}
          name="password"
          type="password"
          value={password}
          label="Password"
          placeholder="******"
        />

        <button className="input-item ">Login</button>
      </form>
      <div className="text-center py-2">
        <p>Don't have an account? <Link to="/signup">Sign Up here</Link></p>
      </div>
    </div>
  );
};

export default SignIn;