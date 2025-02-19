import React from 'react';
import PageLayout from './PageLayout';

const Submissions = () => {
  return (
    <PageLayout title="Submissions">
      <div className="text-center">
        <div className="space-y-8 text-center">
          <div>
            <p className="mb-10">
              For our first issue, we're looking for work that explores remnants, remainders, and reminders. Is a coffee ring just a stain when it outlives the mug? Does a footprint exist? Give us anything!
            </p>
            <h2 className="text-2xl mb-3">guidelines</h2>
            <p className="mb-3">
              Our submissions are open to anyone and everyone. We accept poetry, fiction, essays, and visual art.
              </p>
              <p className="mb-3">
              You may submit up to five poems. Prose can be any length, although an excerpt of up to 
              1000 words should be underlined as the section you would most prefer to be published. 
              </p>
              <p className="mb-3">
              Regardless of length, your submission should 
              be sent in a single pdf.
              </p>
              <p>
              We accept submissions by email at <a 
                href="mailto:submissions@lunchbreakreview.com"
                className="hover:opacity-30 transition-opacity underline"
              >
                submissions@lunchbreakreview.com
              </a>. We're
              happy to provide feedback on written submissions; please let us know if you would like it.
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