import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import { getArchivedSpecials } from '../data/weeklySpecials';

const Archive = () => {
  const archivedPieces = getArchivedSpecials();

  // Function to create an excerpt for display
  const createExcerpt = (content, type, maxLength = 120) => {
    // For poetry, just take the first few lines
    if (type === 'poetry') {
      const lines = content.split('\n').slice(0, 2);
      return lines.join('\n') + (lines.length < content.split('\n').length ? '...' : '');
    } 
    
    // For prose, take the first paragraph and truncate
    let excerpt = content.split('\n\n')[0];
    if (excerpt.length > maxLength) {
      excerpt = excerpt.substring(0, maxLength) + '...';
    }
    return excerpt;
  };

  return (
    <PageLayout 
      title="Archive" 
      contentSize="archive" // New content size for archive grid
      showDecorativeImages={false}
      showTipJar={false}
      showTitle={false}
    >
      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {archivedPieces.map((piece) => (
          <div 
            key={piece.id} 
            className="group cursor-pointer"
          >
            <Link to={`/archive/${piece.id}`} className="block h-full">
              <div 
                className="bg-white border-2 border-gray-300 rounded-lg p-6 h-full 
                           shadow-sm hover:shadow-md transition-all duration-300 
                           hover:border-gray-400 hover:-translate-y-1
                           flex flex-col justify-center items-center text-center"
                style={{
                  background: 'linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%)',
                  minHeight: '200px'
                }}
              >
                {/* Title */}
                <h2 className="text-xl font-medium mb-3 group-hover:text-amber-800 transition-colors">
                  {piece.title}
                </h2>
                
                {/* Author */}
                <p className="text-lg text-gray-700 mb-2">
                  {piece.author}
                </p>
                
                {/* Date and Type inline */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <p className="text-sm text-gray-500">
                    {piece.date}
                  </p>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600 font-medium">
                    {piece.type || 'poetry'}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {/* Navigation */}
      <div className="text-center pt-6 border-t border-gray-200">
        <Link 
          to="/weekly" 
          className="text-lg hover:opacity-30 transition-opacity underline"
        >
          View our current feature
        </Link>
      </div>
    </PageLayout>
  );
};

export default Archive;