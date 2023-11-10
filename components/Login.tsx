import React, { useState } from 'react';
import Image from 'next/image';

const Login = () => {
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = () => {
    setMessage('Thank You for your search');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Logo" height={92} width={272} className="mb-8" />
      <div className="max-w-md w-full">
        <input
          type="text"
          className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="mt-4 flex justify-between">
          <button onClick={handleSearch} className="w-full p-3 border border-gray-200 rounded-md hover:bg-gray-100 mr-2">
            Search
          </button>
          <button className="w-full p-3 border border-gray-200 rounded-md hover:bg-gray-100 ml-2">
            I&apos;m Feeling Lucky
          </button>
        </div>
        {message && <div className="mt-4 text-center">{message}</div>}
      </div>
      <footer className="w-full p-5 text-center border-t border-gray-200 absolute bottom-0">
        <a href="#" className="text-sm">Company Information</a>
        <a href="#" className="text-sm ml-4">Privacy</a>
        <a href="#" className="text-sm ml-4">Settings</a>
      </footer>
    </div>
  );
};

export default Login;