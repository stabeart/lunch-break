import React from 'react';
import PageLayout from './PageLayout';

const DonatePage = () => {
  return (
    <PageLayout title="Donate">
      <div className="text-center">
        <div className="space-y-12">
          <div>
            <p className="mb-6 text-xl">
              We are a fledgling, not-for-profit magazine run by two college students. Your generous donation will go towards maintaining our website and covering the cost of printing.
            </p>
          </div>

          <div className="space-y-4">
            <button 
              className="w-full py-3 px-6 bg-black text-white font-serif text-xl hover:opacity-80 transition-opacity"
              onClick={() => alert("Thanks for the imaginary money!")}
            >
              $5 - Coffee Money
            </button>
            <button 
              className="w-full py-3 px-6 bg-black text-white font-serif text-xl hover:opacity-80 transition-opacity"
              onClick={() => alert("Thanks for the imaginary money!")}
            >
              $10 - Lunch Money
            </button>
            <button 
              className="w-full py-3 px-6 bg-black text-white font-serif text-xl hover:opacity-80 transition-opacity"
              onClick={() => alert("Thanks for the imaginary money!")}
            >
              $25 - Dinner's On You
            </button>
            <button 
              className="w-full py-3 px-6 bg-black text-white font-serif text-xl hover:opacity-80 transition-opacity"
              onClick={() => alert("Thanks for the imaginary money!")}
            >
              $100 - The Whole Damn Menu
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DonatePage;