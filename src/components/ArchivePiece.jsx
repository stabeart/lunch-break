import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout';
import { getSpecialById } from '../data/weeklySpecials';

const ArchivePiece = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const piece = getSpecialById(id);
  
  // Handle case where piece is not found
  if (!piece) {
    return (
      <PageLayout title="Piece Not Found">
        <div className="text-center">
          <p className="mb-6">Sorry, the requested piece was not found.</p>
          <Link 
            to="/archive" 
            className="text-lg hover:opacity-30 transition-opacity underline"
          >
            Return to archive
          </Link>
        </div>
      </PageLayout>
    );
  }

  // Different rendering based on content type
  const renderContent = () => {
    if (piece.type === 'poetry') {
      // For poetry, preserve line breaks
      const contentLines = piece.content.trim().split('\n');
      return (
        <div className="text-left mx-auto">
          {contentLines.map((line, index) => (
            <p key={index} className={`mb-2 ${line.trim() === "" ? "mb-6" : ""}`}>
              {line.trim() === "" ? <br /> : line}
            </p>
          ))}
        </div>
      );
    } else {
      // For prose, split into paragraphs with more robust regex
      const paragraphs = piece.content.trim().split(/\n\s*\n/);
      return (
        <div className="text-left mx-auto prose prose-lg">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6 text-base leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      );
    }
  };

  // Determine layout based on content type
  const contentSize = piece.type === 'prose' ? 'full' : 'wide';
  const showDecorativeImages = piece.type !== 'prose';

  return (
    <PageLayout 
      contentSize={contentSize}
      showDecorativeImages={showDecorativeImages}
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl mb-1">{piece.title}</h2>
        <p className="mb-6 text-lg">by {piece.author}</p>
        <p className="mb-8 text-sm">{piece.date}</p>
      </div>
      
      {renderContent()}
      
      <div className="mt-16 mb-8 border-t border-gray-200 pt-8 text-left mx-auto">
        <h3 className="text-xl mb-4">About the Author</h3>
        <p className="text-base leading-relaxed mb-4">{piece.authorBio}</p>
        {piece.authorWebsite && (
          <p className="text-sm mt-4">
            <a 
              href={piece.authorWebsite} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:opacity-70 transition-opacity underline"
            >
              Visit {piece.author}'s Website
            </a>
          </p>
        )}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          to="/archive" 
          className="text-lg hover:text-amber-800 transition-color mr-6"
        >
          Back to archive
        </Link>
        <Link 
          to="/weekly" 
          className="text-lg hover:text-amber-800 transition-color"
        >
          View our current feature
        </Link>
      </div>
    </PageLayout>
  );
};

export default ArchivePiece;
