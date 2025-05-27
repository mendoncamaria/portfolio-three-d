import React from 'react';
import ThreeDPortfolio from './components/ThreeDPortfolio';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-900 text-white">
      <Navbar />
      <ThreeDPortfolio />
      {/* Overlay for 2D UI elements like scroll indicators, loading screens etc. */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Your 2D UI elements can go here. For example, a scroll indicator or section titles. */}
        {/* Make them pointer-events-auto if they need interaction, otherwise keep pointer-events-none */}
      </div>
    </div>
  );
}

export default App;