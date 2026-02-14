import React from 'react';
import { Calendar as CalendarIcon, ExternalLink } from 'lucide-react';

const Calendar: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-3 mb-6">
        <CalendarIcon className="text-karate-red" size={32} />
        <h1 className="text-3xl font-bold text-gray-900">Events Calendar</h1>
      </div>
      
      <p className="text-gray-600 mb-8 max-w-3xl">
        Stay updated with upcoming tournaments, seminars, and grading dates. 
        We align our schedule with Karate BC events.
      </p>

      {/* Events Card Container */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        
        {/* Banner / Header */}
        <div className="bg-gray-50 p-8 border-b border-gray-200 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Official Karate BC Calendar</h2>
            <p className="text-gray-600 mb-6">
                For the most up-to-date list of provincial tournaments, technical seminars, and official events, 
                please refer to the Karate BC website.
            </p>
            <a 
                href="https://www.karatebc.org/calendar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-karate-red text-white font-bold rounded-full hover:bg-red-700 transition transform hover:scale-105 shadow-md"
            >
                View Full Calendar <ExternalLink size={18} className="ml-2" />
            </a>
        </div>

        {/* Placeholder / Embed Mockup */}
        <div className="p-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Upcoming Highlights</h3>
            <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-karate-red transition-colors">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 text-karate-red rounded-lg flex flex-col items-center justify-center font-bold">
                        <span className="text-xs uppercase">NOV</span>
                        <span className="text-2xl">16</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Karate BC Provincial Championships</h4>
                        <p className="text-sm text-gray-600">Richmond Olympic Oval • 9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-gray-500 mt-1">The premier provincial tournament for all age categories.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-karate-red transition-colors">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex flex-col items-center justify-center font-bold">
                        <span className="text-xs uppercase">DEC</span>
                        <span className="text-2xl">02</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Black Belt Grading (Dan Testing)</h4>
                        <p className="text-sm text-gray-600">Satokai Honbu Dojo • 10:00 AM</p>
                        <p className="text-sm text-gray-500 mt-1">Invitational grading for Shodan and above candidates.</p>
                    </div>
                </div>

                 <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-karate-red transition-colors">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 text-gray-700 rounded-lg flex flex-col items-center justify-center font-bold">
                        <span className="text-xs uppercase">JAN</span>
                        <span className="text-2xl">15</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Winter Training Seminar</h4>
                        <p className="text-sm text-gray-600">Burnaby Mountain Dojo • 1:00 PM - 4:00 PM</p>
                        <p className="text-sm text-gray-500 mt-1">Focus on advanced kumite drills and conditioning.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Calendar;