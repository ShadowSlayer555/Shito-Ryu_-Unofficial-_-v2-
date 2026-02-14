import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Katas from './pages/Katas.tsx';
import Basics from './pages/Basics.tsx';
import Kumite from './pages/Kumite.tsx';
import Terminology from './pages/Terminology.tsx';
import Downloads from './pages/Downloads.tsx';
import Search from './pages/Search.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/katas" element={<Katas />} />
            <Route path="/basics" element={<Basics />} />
            <Route path="/kumite" element={<Kumite />} />
            <Route path="/terminology" element={<Terminology />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Shito-Ryu Portal. Organized for practitioner reference.</p>
            <p className="text-sm mt-2">Videos courtesy of <a href="https://www.youtube.com/@AnthonyAu-c2e" target="_blank" rel="noreferrer" className="text-karate-red hover:underline">@AnthonyAu-c2e</a></p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;