import React from 'react';
import PageLayout from './PageLayout';

const DonatePage = () => {
  return (
    <PageLayout title="Donate">
      <div className="text-center">
        <div className="space-y-8">
          <p className="mb-6 text-xl">
            We are a fledgling, not-for-profit magazine run by a handful of college students. 
            Your generous donation will go towards maintaining our website and covering 
            the cost of printing.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              <a 
                href="https://paypal.me/lunchbreakrvw"
                className="px-8 py-3 bg-[#0070BA] text-white rounded-md hover:bg-opacity-90 transition-opacity w-full max-w-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate via PayPal
              </a>
              
              <a 
                href="https://venmo.com/lunchbreakreview"
                className="px-8 py-3 bg-[#008CFF] text-white rounded-md hover:bg-opacity-90 transition-opacity w-full max-w-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate via Venmo
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DonatePage;