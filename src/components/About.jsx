import React from 'react';
import PageLayout from './PageLayout';

const About = () => {
  return (
    <PageLayout title="About Us">
      <div className="text-center">
        <div className="space-y-12 text-center">
          <div>
            <p className="mb-6">
              LUNCHBREAK is a literary magazine open to amateur writers of all ages. We stress this word 
              "amateur" because we want to create a space for writers who, for whatever reason, don't 
              consider themselves "professionals." The word comes from the Latin root "amare," meaning 
              "to love"; an amateur, then, is someone who loves what they do, from the fledgling high school 
              essayist to the lunch break poet.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">editorial team</h2>
            <p className="mb-2">Ingrid Belcher</p>
            <p className="mb-2">Sam Tabeart</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">contact</h2>
            <p className="mb-2"><a 
                href="mailto:editors@lunchbreakreview.com"
                className="hover:opacity-30 transition-opacity underline"
              >
                editors@lunchbreakreview.com
              </a> <br></br>
              <a
                href="https://www.instagram.com/lunchbreak_review/"
                className="hover:opacity-30 transition-opacity underline"
              >
                Instagram Account  </a></p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;