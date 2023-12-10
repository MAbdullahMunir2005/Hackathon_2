"use client"

import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Submitted:', formData);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center border-b border-gray-300">
              <span className="text-gray-500">
                <FaUser />
              </span>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full py-2 px-3 text-gray-700 outline-none ml-2"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center border-b border-gray-300">
              <span className="text-gray-500">
                <FaLock />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full py-2 px-3 text-gray-700 outline-none ml-2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Sign up
          </button>
        </form>
      </div>
    </div> 
  );
};

export default SignInPage;
