import React from 'react';
import PageLayout from './PageLayout';

const Submissions = () => {
  return (
    <PageLayout 
      title="Submissions"
      contentSize="wide">
      <div className="text-center">
        <div className="space-y-8 text-center">
          <div>
            <p className="mb-10">
            Our reading period is <b>now closed.</b> </p>
            <h2 className="text-2xl mb-5">guidelines</h2>
            <p className="mb-3">
              Our submissions are open to anyone and everyone. We accept poetry, fiction, creative nonfiction, essays, and visual art.
              </p>
              <p className="mb-3">
              You may submit up to five poems. Prose can be any length, although an excerpt of up to 
              1000 words should be underlined as the section you would most prefer to be published. 
              Regardless of length, your submission should 
              be sent in a single pdf.
              </p>
              <p className="mb-3">
              We accept submissions by email at <a 
                href="mailto:submissions@lunchbreakreview.com"
                className="hover:opacity-30 transition-opacity underline">submissions@lunchbreakreview.com</a>. 
                We're happy to provide feedback on written submissions; please let us know if you would like it.
              </p>
              <p className="mb-10">We publish weekly features on our <a href="/weekly"
              className="hover:opacity-30 transition-opacity underline">specials</a> page. These are pieces that we want to publish, 
                but don't feel fit the theme of our upcoming issue. Print pieces are typically not posted online.</p>
          </div>

          <div>
            <h2 className="text-2xl mb-5">reading period</h2>
            <p className="mb-3">Print and online submissions are now closed.</p> 
            <p className="mb-6">We aim to respond within one month.</p>
          </div>
        </div>
      </div> 
    </PageLayout>
  );
};

export default Submissions;