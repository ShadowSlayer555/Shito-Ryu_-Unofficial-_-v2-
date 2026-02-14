import React from 'react';
import { videos } from '../data.ts';
import { VideoCategory } from '../types.ts';
import VideoCard from '../components/VideoCard.tsx';

const Basics: React.FC = () => {
  const basicVideos = videos.filter(v => v.category === VideoCategory.Basics);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Basic Techniques</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Fundamental blocks, strikes, kicks, and stances. Mastery of these basics is essential 
        for strong Kata and Kumite performance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {basicVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      
      {basicVideos.length === 0 && (
        <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">Basic technique videos coming soon.</p>
        </div>
      )}
    </div>
  );
};

export default Basics;