import React, { useMemo, useState, useEffect } from 'react';
import { terminology } from '../data.ts';
import { Volume2, Square } from 'lucide-react';

const Terminology: React.FC = () => {
  const [playingCategory, setPlayingCategory] = useState<string | null>(null);

  // Group by category
  const categories = useMemo(() => {
    const groups: Record<string, typeof terminology> = {};
    terminology.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, []);

  // Custom sort order for categories
  const categoryOrder = ["Dojo Rules", "Numbers", "General", "Stances", "Techniques"];

  const handleSpeak = (category: string, items: typeof terminology) => {
    // If currently playing this category, stop it (Toggle behavior)
    if (playingCategory === category) {
      window.speechSynthesis.cancel();
      setPlayingCategory(null);
      return;
    }

    // Stop any other active speech
    window.speechSynthesis.cancel();
    setPlayingCategory(category);

    let textToSpeak = "";
    let lang = "en-US";

    if (category === "Dojo Rules") {
      // For Dojo Rules, read the English translations
      textToSpeak = "Dojo Rules. " + items.map(item => item.translation).join(". ");
      lang = "en-US";
    } else {
      // For terminology, read ONLY the Japanese terms, do NOT read translation
      // Add pause after each word by using ". "
      textToSpeak = items.map(item => item.term).join(". . . ");
      lang = "ja-JP"; // Set language to Japanese
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang;
    utterance.rate = 0.8; // Slower for clarity

    // Reset state when speech finishes
    utterance.onend = () => {
      setPlayingCategory(null);
    };

    // Reset state on error
    utterance.onerror = () => {
      setPlayingCategory(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const sortedCategories = Object.keys(categories).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.localeCompare(b);
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Karate Terminology</h1>
      
      <div className="space-y-12">
        {sortedCategories.map(category => (
          <div key={category} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold text-karate-red">{category}</h2>
              <button 
                onClick={() => handleSpeak(category, categories[category])}
                className={`flex items-center gap-2 px-3 py-1.5 border rounded-full text-sm font-medium transition-colors ${
                  playingCategory === category 
                    ? 'bg-karate-red text-white border-karate-red' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-karate-red'
                }`}
              >
                {playingCategory === category ? (
                  <>
                    <Square size={14} fill="currentColor" /> Stop
                  </>
                ) : (
                  <>
                    <Volume2 size={16} /> Listen
                  </>
                )}
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {categories[category].map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr_3fr] md:grid-cols-2 px-6 py-4 hover:bg-gray-50 transition-colors">
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