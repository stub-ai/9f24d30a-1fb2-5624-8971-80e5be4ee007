import React from 'react';
import Image from 'next/image';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image src="/logo.png" alt="Logo" height={80} width={80} className="mb-8" />
      <div className="max-w-md w-full">
        <input
          type="text"
          className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search..."
        />
        <div className="mt-4 flex justify-between">
          <button className="w-full p-3 border border-gray-200 rounded-md hover:bg-gray-100 mr-2">
            Search
          </button>
          <button className="w-full p-3 border border-gray-200 rounded-md hover:bg-gray-100 ml-2">
            I&apos;m Feeling Lucky
          </button>
        </div>
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