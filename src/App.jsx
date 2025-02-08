import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;