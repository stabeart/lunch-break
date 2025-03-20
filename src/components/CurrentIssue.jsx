import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

const CurrentIssue = () => {
  return (
    <PageLayout title="Current Issue">
      <div className="space-y-1">
        <p className="text-xl">
          Please excuse our meager display; </p><p className="text-xl"> Our first issue is on its way! </p> <br></br><p>Send your submissions to{' '}
          <a 
            href="mailto:editors@lunchbreak.com"
            className="hover:opacity-30 transition-opacity underline"
          >
            editors@lunchbreak.com
          </a>
          .
        </p>
        <br></br>
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