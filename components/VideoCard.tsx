import React, { useState } from 'react';
import { VideoItem } from '../types.ts';
import { PlayCircle, AlertCircle } from 'lucide-react';

interface VideoCardProps {
  video: VideoItem;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // If there is no video ID, show a placeholder
  if (!video.id) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 opacity-90">
        <div className="relative aspect-video bg-gray-100 flex flex-col items-center justify-center text-gray-400 border-b border-gray-200">
           <AlertCircle size={48} className="mb-2 opacity-50" />
           <span className="text-sm font-semibold">Video Source Needed</span>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-800 leading-tight">{video.title}</h3>
            {video.belt && (
              <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-600 whitespace-nowrap ml-2">
                {video.belt}
              </span>
            )}
          </div>
          {video.description && (
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{video.description}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video bg-gray-900 group">
        {!isPlaying ? (
          <button
            onClick={() => setIsPlaying(true)}
            className="w-full h-full flex items-center justify-center relative"
            aria-label={`Play ${video.title}`}
          >
            <img 
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
              alt={video.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="z-10 text-white opacity-90 group-hover:opacity-100 transform group-hover:scale-110 transition-all">
              <PlayCircle size={64} fill="red" className="text-white" />
            </div>
          </button>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800 leading-tight">{video.title}</h3>
          {video.belt && (
            <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-600 whitespace-nowrap ml-2">
              {video.belt}
            </span>
          )}
        </div>
        {video.description && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{video.description}</p>
        )}
      </div>
    </div>
  );
};

export default VideoCard;