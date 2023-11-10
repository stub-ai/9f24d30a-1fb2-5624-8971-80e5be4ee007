import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="p-5 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" height={32} width={32} />
        <h1 className="font-semibold text-lg">Company Name</h1>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-sm">Gmail</a>
        <a href="#" className="text-sm">Images</a>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Image src="/grid.png" alt="Grid" height={20} width={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;