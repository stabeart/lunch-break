import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout';
import { getCurrentSpecial } from '../data/weeklySpecials';

const ProseSpecials = () => {
  const navigate = useNavigate();
  const featuredPiece = getCurrentSpecial();

  // If it's not prose, redirect to the poetry view
  useEffect(() => {
    if (featuredPiece.type !== 'prose') {
      navigate('/weekly');
    }
  }, [featuredPiece, navigate]);

  // Only render for prose type
  if (featuredPiece.type !== 'prose') {
    return null; // Will redirect via useEffect
  }

  // Split the content into paragraphs using a more robust regex
  // This will handle different line ending types and multiple spaces
  const paragraphs = featuredPiece.content.trim().split(/\n\s*\n/);

  return (
    <PageLayout 
      contentSize="full"
      showDecorativeImages={false}
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl mb-1">{featuredPiece.title}</h2>
        <p className="mb-2 text-lg italic"> {featuredPiece.author}</p>
        <p className="mb-8 text-sm">{featuredPiece.date}</p>
      </div>
      
      <div className="text-left mx-auto prose prose-lg">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-2 text-base leading-relaxed">
            {paragraph.trim()}
          </p>
        ))}
      </div>
      
      <div className="mt-16 mb-8 border-t border-gray-200 pt-8 text-left mx-auto">
        <h3 className="text-xl mb-4">About the Author</h3>
        <p className="text-base leading-relaxed mb-4">{featuredPiece.authorBio}</p>
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
      
      <div className="mt-12 text-center">
        <Link 
          to="/archive" 
          className="text-lg hover:opacity-30 transition-opacity underline"
        >
          View past features
        </Link>
      </div>
    </PageLayout>
  );
};

export default ProseSpecials;