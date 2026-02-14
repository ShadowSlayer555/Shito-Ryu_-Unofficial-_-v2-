import React, { useState } from 'react';
import { videos } from '../data';
import { VideoCategory, BeltLevel } from '../types';
import VideoCard from '../components/VideoCard';

const Katas: React.FC = () => {
  const [activeBelt, setActiveBelt] = useState<BeltLevel | 'All'>('All');

  const kataVideos = videos.filter(v => v.category === VideoCategory.Kata);
  
  const filteredVideos = activeBelt === 'All' 
    ? kataVideos 
    : kataVideos.filter(v => v.belt === activeBelt);

  // Extract unique belt levels available in Katas
  const availableBelts = Array.from(new Set(kataVideos.map(v => v.belt).filter(Boolean))) as BeltLevel[];
  
  // Custom sort order for belts
  const beltOrder = [
    BeltLevel.White, BeltLevel.Yellow, BeltLevel.Orange, 
    BeltLevel.Green, BeltLevel.Blue, BeltLevel.Brown, BeltLevel.Black
  ];
  
  availableBelts.sort((a, b) => beltOrder.indexOf(a) - beltOrder.indexOf(b));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Kata Library</h1>
      <p className="text-gray-600 mb-8">Select your belt level to view required forms.</p>

      {/* Belt Filter */}
      <div className="flex flex-wrap gap-2 mb-8 sticky top-20 z-40 bg-gray-50 py-2 -mx-2 px-2 shadow-sm rounded-lg border border-gray-100">
        <button
          onClick={() => setActiveBelt('All')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            activeBelt === 'All' 
              ? 'bg-gray-900 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
          }`}
        >
          All
        </button>
        {availableBelts.map(belt => (
          <button
            key={belt}
            onClick={() => setActiveBelt(belt)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
              activeBelt === belt
                ? 'bg-karate-red text-white border-karate-red'
                : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'
            }`}
          >
            {belt}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">No katas found for this selection.</p>
        </div>
      )}
    </div>
  );
};

export default Katas;