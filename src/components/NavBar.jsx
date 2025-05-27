import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-10 w-full p-4 flex justify-center space-x-8 bg-black bg-opacity-50">
      <a href="#about" className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300">About</a>
      <a href="#projects" className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300">Projects</a>
      <a href="#contact" className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300">Contact</a>
    </nav>
  );
};

export default Navbar;