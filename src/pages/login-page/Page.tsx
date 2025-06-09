import React, { useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();

    const payload = {
      email: email,
      password: password,
    };
    console.log(`data entered`, payload);

    axios.post('https://api.escuelajs.co/api/v1/auth/login', payload)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.access_token));
        console.log('logged in', res);
        alert('Login Succesful');
        navigate('/profile');
      })
      .catch((err) => {
        console.log('Error occurred', err)
      })
  }

  return (

    <div className='form-container bg-sky-300 w-100 rounded-xl'>

      <form className='flex flex-col p-10'>

        <label className='text-left font-bold mb-2'>Email:</label>
        <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email...' className='bg-sky-50 text-black p-2 rounded custom-focus' />

        <label className='text-left mt-5 font-bold mb-2'>Password:</label>
        <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter password' className='bg-sky-50 text-black p-2 rounded custom-focus' />

        <button onClick={handleSubmit} type='submit' className='bg-blue-600 hover:bg-blue-500 mt-10'>Sign in</button>

      </form>

    </div>

  )

}

export default LoginPage
