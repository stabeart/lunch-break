import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import { getArchivedSpecials } from '../data/weeklySpecials';

const Archive = () => {
  const archivedPieces = getArchivedSpecials();

  // Function to create an excerpt for display
  const createExcerpt = (content, type, maxLength = 150) => {
    // For poetry, just take the first few lines
    if (type === 'poetry') {
      const lines = content.split('\n').slice(0, 3);
      return lines.join('\n') + '...';
    } 
    
    // For prose, take the first paragraph and truncate
    let excerpt = content.split('\n\n')[0];
    if (excerpt.length > maxLength) {
      excerpt = excerpt.substring(0, maxLength) + '...';
    }
    return excerpt;
  };

  return (
    <PageLayout title="Archive">
      <div className="space-y-12">
        <div className="space-y-12">
          {archivedPieces.map((piece) => (
            <div key={piece.id} className="text-left border-b border-gray-200 pb-8">
              <h2 className="text-2xl mb-1">{piece.title}</h2>
              <p className="mb-2 italic">by {piece.author}</p>
              <p className="mb-4 text-sm">{piece.date}</p>
              <div className="mb-4">
                {piece.type === 'poetry' ? (
                  // For poetry, preserve line breaks
                  createExcerpt(piece.content, piece.type).split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))
                ) : (
                  // For prose, display as regular paragraph
                  <p>{createExcerpt(piece.content, piece.type)}</p>
                )}
              </div>
              <div className="mb-4">
                <p className="text-sm italic">
                  {createExcerpt(piece.authorBio, 'prose', 100)}
                  {piece.authorWebsite && (
                    <span> · <a 
                      href={piece.authorWebsite} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:opacity-70 transition-opacity underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Website
                    </a></span>
                  )}
                </p>
              </div>
              <Link 
                to={`/archive/${piece.id}`} 
                className="text-base hover:opacity-30 transition-opacity underline"
              >
                Read full piece
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="/weekly" 
            className="text-lg hover:opacity-30 transition-opacity underline"
          >
            This week's special
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Archive;