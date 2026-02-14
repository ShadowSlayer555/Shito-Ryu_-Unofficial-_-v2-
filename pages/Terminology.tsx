import React, { useMemo } from 'react';
import { terminology } from '../data.ts';

const Terminology: React.FC = () => {
  // Group by category
  const categories = useMemo(() => {
    const groups: Record<string, typeof terminology> = {};
    terminology.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Karate Terminology</h1>
      
      <div className="space-y-12">
        {Object.keys(categories).map(category => (
          <div key={category} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-karate-red">{category}</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {categories[category].map((item, index) => (
                <div key={index} className="grid grid-cols-2 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="font-bold text-gray-800">{item.term}</div>
                  <div className="text-gray-600">{item.translation}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminology;