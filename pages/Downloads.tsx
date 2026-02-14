import React from 'react';
import { downloads } from '../data.ts';
import { FileText, ExternalLink } from 'lucide-react';

const Downloads: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Downloads & Resources</h1>
      
      <div className="grid gap-6">
        {downloads.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row md:items-center justify-between hover:border-karate-red transition-all">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-3 mb-1">
                <FileText className="text-karate-red" size={24} />
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm ml-9">{item.description}</p>
              <p className="text-xs text-gray-400 ml-9 mt-1">Updated: {item.date}</p>
            </div>
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-karate-red hover:text-white transition-colors gap-2"
            >
              Open File <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Downloads;