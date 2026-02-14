import React, { useState } from 'react';
import { VideoItem } from '../types.ts';
import { PlayCircle, AlertCircle } from 'lucide-react';

interface VideoCardProps {
  video: VideoItem;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  // Helper to extract ID from potential full URL
  const getYoutubeId = (urlOrId: string) => {
    if (!urlOrId) return '';
    const match = urlOrId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : urlOrId;
  };

  const mainId = getYoutubeId(video.id);
  const secondaryId = video.secondaryId ? getYoutubeId(video.secondaryId) : undefined;

  // If no ID, show placeholder
  if (!mainId) {
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

  // Active state tracks which video is playing: 'main', 'secondary', or null
  const [activeVideo, setActiveVideo] = useState<'main' | 'secondary' | null>(null);

  // If playing, render the iframe
  if (activeVideo) {
    const videoId = activeVideo === 'main' ? mainId : secondaryId;
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-video bg-gray-900 group">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-80 transition"
          >
             <span className="sr-only">Close Video</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div className="p-4">
           <h3 className="text-lg font-bold text-gray-800 leading-tight">{video.title}</h3>
           <p className="text-xs text-gray-500 mt-1">Playing: {activeVideo === 'main' ? 'Primary' : 'Alternative'} Version</p>
        </div>
      </div>
    );
  }

  // Render Thumbnail (Handle Split View if secondaryId exists)
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video bg-gray-900">
        
        {secondaryId ? (
          <>
             {/* Main Video (Top-Left Triangle) */}
             <button
                onClick={() => setActiveVideo('main')}
                className="absolute inset-0 w-full h-full group overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)', zIndex: 10 }}
                aria-label={`Play Main Video: ${video.title}`}
              >
                <img 
                  src={`https://img.youtube.com/vi/${mainId}/hqdefault.jpg`} 
                  alt={video.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <PlayCircle size={48} fill="red" className="text-white opacity-90 group-hover:scale-110 transition-transform shadow-xl" />
                </div>
                {/* Divider Line Visual hack */}
                <div className="absolute bottom-0 right-0 w-[200%] h-[2px] bg-white transform -rotate-45 origin-bottom-right"></div>
             </button>

             {/* Secondary Video (Bottom-Right Triangle) */}
             <button
                onClick={() => setActiveVideo('secondary')}
                className="absolute inset-0 w-full h-full group overflow-hidden"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', zIndex: 10 }}
                aria-label={`Play Alternate Video: ${video.title}`}
              >
                <img 
                  src={`https://img.youtube.com/vi/${secondaryId}/hqdefault.jpg`} 
                  alt={video.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                 <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 z-20 pointer-events-none">
                  <PlayCircle size={48} fill="blue" className="text-white opacity-90 group-hover:scale-110 transition-transform shadow-xl" />
                </div>
             </button>

             {/* Diagonal Divider Line */}
             <div className="absolute inset-0 pointer-events-none z-20" style={{
                 background: 'linear-gradient(to top right, transparent 49.5%, white 49.5%, white 50.5%, transparent 50.5%)'
             }}></div>
          </>
        ) : (
          /* Standard Single Video */
          <button
            onClick={() => setActiveVideo('main')}
            className="w-full h-full flex items-center justify-center relative group"
            aria-label={`Play ${video.title}`}
          >
            <img 
              src={`https://img.youtube.com/vi/${mainId}/hqdefault.jpg`} 
              alt={video.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="z-10 text-white opacity-90 group-hover:opacity-100 transform group-hover:scale-110 transition-all">
              <PlayCircle size={64} fill="red" className="text-white" />
            </div>
          </button>
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