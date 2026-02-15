import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Katas from './pages/Katas.tsx';
import Basics from './pages/Basics.tsx';
import Kumite from './pages/Kumite.tsx';
import Terminology from './pages/Terminology.tsx';
import Downloads from './pages/Downloads.tsx';
import Search from './pages/Search.tsx';
import Calendar from './pages/Calendar.tsx';
import Advanced from './pages/Advanced.tsx';
import About from './pages/About.tsx';

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
            <Route path="/advanced" element={<Advanced />} /> 
            <Route path="/kumite" element={<Kumite />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/terminology" element={<Terminology />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-lg font-semibold text-gray-300 mb-2">&copy; {new Date().getFullYear()} Shito-Ryu Portal</p>
            <p className="text-sm text-gray-500 mb-6">Organized for practitioner reference. Educational use only.</p>
            
            <div className="border-t border-gray-800 pt-6">
              <span className="text-sm font-medium text-gray-500 block mb-3">Video Content Courtesy of:</span>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="https://www.youtube.com/@AnthonyAu-c2e" target="_blank" rel="noreferrer" className="text-karate-red hover:text-white transition-colors flex items-center gap-1">
                  @AnthonyAu-c2e
                </a>
                <span className="text-gray-700 hidden sm:inline">•</span>
                <a href="https://www.youtube.com/@olafsteinbrecher9519" target="_blank" rel="noreferrer" className="text-karate-red hover:text-white transition-colors flex items-center gap-1">
                  @olafsteinbrecher9519
                </a>
                <span className="text-gray-700 hidden sm:inline">•</span>
                <a href="https://www.youtube.com/@hayashihakarate" target="_blank" rel="noreferrer" className="text-karate-red hover:text-white transition-colors flex items-center gap-1">
                  @hayashihakarate
                </a>
                 <span className="text-gray-700 hidden sm:inline">•</span>
                 <span className="text-gray-500">
                   And other dedicated contributors on YouTube
                 </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;