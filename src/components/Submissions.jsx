import React from 'react';
import PageLayout from './PageLayout';

const Submissions = () => {
  return (
    <PageLayout title="Submissions">
      <div className="text-center">
        <div className="space-y-8 text-center">
          <div>
            <h2 className="text-2xl mb-1">guidelines</h2>
            <p className="mb-2">
              Our submissions are open to anyone and everyone. We accept poetry and fiction, as well as essays on 
              literary themes. You may submit up to five poems. Prose can be any length, although an excerpt of up to 
              1000 words should be underlined as the section you would most prefer to be published. Multiple poems should 
              be submitted in a single pdf.
              </p>
              <p>
              We accept submissions by email at <a 
                href="mailto:editors@lunchbreakreview.com"
                className="hover:opacity-30 transition-opacity underline"
              >
                editors@lunchbreakreview.com
              </a>. Our editors are 
              happy to provide feedback on submissions. Please let us know whether you would like feedback with your 
              submission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3">reading period</h2>
            <p className="mb-2">We accept submissions year-round.</p>
            <p className="mb-1">We aim to respond within two weeks.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Submissions;