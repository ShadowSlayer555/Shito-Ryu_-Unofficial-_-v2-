import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { videos } from '../data';
import VideoCard from '../components/VideoCard';

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = videos.filter(video => 
    video.title.toLowerCase().includes(query.toLowerCase()) || 
    video.category.toLowerCase().includes(query.toLowerCase()) ||
    video.belt?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Search Results for "{query}"
      </h1>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg">No matches found.</p>
          <p className="text-gray-400 mt-2">Try searching for a specific kata name or belt color.</p>
        </div>
      )}
    </div>
  );
};

export default Search;