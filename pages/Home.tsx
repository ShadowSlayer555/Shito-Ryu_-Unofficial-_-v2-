import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Shield, Award, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-karate-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.shitoryu.net/wp-content/uploads/2016/02/shitu-stance-4-sm.jpg')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Shito-Ryu Karate <span className="text-karate-red">Portal</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Access curriculum videos, katas, kumite drills, and terminology anytime, anywhere. 
            Organized for students of all levels.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/katas" className="px-8 py-3 bg-karate-red text-white font-bold rounded-full hover:bg-red-700 transition transform hover:scale-105 shadow-lg">
              Start Training
            </Link>
            <Link to="/downloads" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition transform hover:scale-105">
              Resources
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Training Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <Link to="/basics" className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-karate-red">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-karate-red mb-4 group-hover:bg-karate-red group-hover:text-white transition-colors">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Basic Techniques</h3>
            <p className="text-gray-600 text-sm">Master the fundamental blocks, punches, kicks, and stances of Shito-Ryu.</p>
          </Link>

          <Link to="/katas" className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-karate-red">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-karate-red mb-4 group-hover:bg-karate-red group-hover:text-white transition-colors">
              <Video size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Kata Library</h3>
            <p className="text-gray-600 text-sm">Comprehensive video guide of Katas organized by belt level from White to Black.</p>
          </Link>

          <Link to="/kumite" className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-karate-red">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-karate-red mb-4 group-hover:bg-karate-red group-hover:text-white transition-colors">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Kumite Drills</h3>
            <p className="text-gray-600 text-sm">Step-by-step breakdown of basic kumite (sparring) sequences and applications.</p>
          </Link>

          <Link to="/terminology" className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-karate-red">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-karate-red mb-4 group-hover:bg-karate-red group-hover:text-white transition-colors">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Terminology</h3>
            <p className="text-gray-600 text-sm">Essential Japanese terms, numbers, and commands used in the dojo.</p>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;