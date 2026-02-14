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

// Simple Advanced Page Component since we added the button in index.html but maybe not the file in previous turns
// If Advanced.tsx doesn't exist, we'll create a simple inline one here or rely on the user having it. 
// For safety, I'll assume Advanced.tsx might not be fully fleshed out in the file list provided, so I'll map it to Katas or similar if needed, 
// but based on previous turns I should actually create the Advanced page if it's missing. 
// However, I will register the route here assuming the file exists or I'll create it now.
// Actually, looking at the file list, `pages/Advanced.tsx` was NOT in the provided "existing files". 
// I must create it. I will add it to the changeset.

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
            {/* If Advanced.tsx is not created, I will use a placeholder or the same structure as basics */}
            <Route path="/advanced" element={<Advanced />} /> 
            <Route path="/kumite" element={<Kumite />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/terminology" element={<Terminology />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Shito-Ryu Portal. Organized for practitioner reference.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-2 text-sm">
              <span>Videos courtesy of:</span>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@AnthonyAu-c2e" target="_blank" rel="noreferrer" className="text-karate-red hover:underline">@AnthonyAu-c2e</a>
                <span className="text-gray-600">•</span>
                <a href="https://www.youtube.com/@olafsteinbrecher9519" target="_blank" rel="noreferrer" className="text-karate-red hover:underline">@olafsteinbrecher9519</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;