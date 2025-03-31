import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout';
import { getCurrentSpecial } from '../data/weeklySpecials';

const WeeklySpecials = () => {
  const navigate = useNavigate();
  const featuredPiece = getCurrentSpecial();

  // If it's prose, redirect to the prose view
  React.useEffect(() => {
    if (featuredPiece.type === 'prose') {
      navigate('/weekly/prose');
    }
  }, [featuredPiece, navigate]);

  // Only render for poetry/default type
  if (featuredPiece.type === 'prose') {
    return null; // Will redirect via useEffect
  }

  // Split the content at newlines to create proper paragraphs for poetry
  const contentLines = featuredPiece.content.trim().split('\n');

  return (
    <PageLayout 
      title="Weekly Feature" 
      contentSize="wide"
      showDecorativeImages={true}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl mb-1">{featuredPiece.title}</h2>
        <p className="mb-6 text-lg italic">by {featuredPiece.author}</p>
        <p className="mb-8 text-sm">{featuredPiece.date}</p>
      </div>
      
      <div className="text-left max-w-prose mx-auto" style={{ 
        
        fontSize: '1.125rem',
        lineHeight: '1.75'
      }}>
        {contentLines.map((line, index) => (
          <p key={index} className={`mb-0.5 ${line.trim() === "" ? "mb-2" : ""}`}>
            {line.trim() === "" ? <br /> : line}
          </p>
        ))}
      </div>
      
      <div className="mt-12 mb-8 border-t border-gray-200 pt-8 text-left max-w-prose mx-auto">
        <h3 className="text-xl mb-3">About the Author</h3>
        <p className="text-base leading-relaxed mb-2">{featuredPiece.authorBio}</p>
        {featuredPiece.authorWebsite && (
          <p className="text-sm mt-4">
            <a 
              href={featuredPiece.authorWebsite} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:opacity-70 transition-opacity underline"
            >
              Visit {featuredPiece.author}'s Website
            </a>
          </p>
        )}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          to="/archive" 
          className="text-lg hover:opacity-30 transition-opacity underline"
        >
          View past weekly features
        </Link>
      </div>
    </PageLayout>
  );
};

export default WeeklySpecials;