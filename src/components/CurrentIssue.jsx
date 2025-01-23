import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

const CurrentIssue = () => {
  return (
    <PageLayout title="Current Issue">
      <div className="space-y-6">
        <p className="text-xl">
          Our first issue is on its way! Send your submissions to{' '}
          <a 
            href="mailto:editors@lunchbreak.com"
            className="hover:opacity-30 transition-opacity underline"
          >
            editors@lunchbreak.com
          </a>
          .
        </p>
        <p>
          <Link 
            to="/submissions" 
            className="text-lg hover:opacity-30 transition-opacity underline"
          >
            View submission guidelines
          </Link>
        </p>
      </div>
    </PageLayout>
  );
};

export default CurrentIssue;