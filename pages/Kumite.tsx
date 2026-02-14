import React from 'react';
import { videos } from '../data.ts';
import { VideoCategory } from '../types.ts';
import VideoCard from '../components/VideoCard.tsx';

const Kumite: React.FC = () => {
  const kumiteVideos = videos.filter(v => v.category === VideoCategory.Kumite);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Basic Kumite</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Pre-arranged sparring drills designed to teach distance, timing, and application of technique.
        Videos are ordered by progression.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kumiteVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {kumiteVideos.length === 0 && (
        <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">Kumite videos coming soon.</p>
        </div>
      )}
    </div>
  );
};

export default Kumite;