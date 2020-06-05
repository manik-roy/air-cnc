import React, { useRef, useEffect, useState } from 'react';
import './signup.scss';
import InputItem from '../../components/inputItem/InputItem';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const signUpRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });

  useEffect(() => {
    signUpRef.current.focus();
  }, [])

  const submitHandler = e => {
    e.preventDefault();
  }

  const handleInput = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const { firstName, lastName, email, password, phone } = formData;

  return (
    <div className="sign-up-area">
      <form onSubmit={submitHandler} >
        <InputItem
          onChange={handleInput}
          ref={signUpRef}
          name="firstName"
          type="text"
          label="First Name"
          value={firstName}
          placeholder="Ema"
        />
        <InputItem
          onChange={handleInput}
          name="lastName"
          type="text"
          label="Last Name"
          value={lastName}
          placeholder="Watson"
        />
        <InputItem
          onChange={handleInput}
          name="email"
          type="email"
          label="Email"
          value={email}
          placeholder="example@gmail.com"
        />
        <InputItem
          onChange={handleInput}
          name="phone"
          type="Phone"
          label="Phone"
          value={phone}
          placeholder="0170000 . . . ."
          pattern="^(?:\+88|01)?(?:\d{11}|\d{13})$"
        />
        <InputItem
          onChange={handleInput}
          name="password"
          type="password"
          value={password}
          label="Password"
          placeholder="******"
        />

        <button className="inputItem ">Sign Up</button>
      </form>
      <div className="text-center py-2">
        <p>You have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default SignUp;