import React from 'react';
import PageLayout from './PageLayout';

const About = () => {
  return (
    <PageLayout title="About Us">
      <div className="text-center">
        <div className="space-y-12 text-center">
          <div>
            <p className="mb-6">
              Lunch Break is a literary magazine open to amateur writers of all ages. We stress this word 
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
            <p className="mb-2">editors@lunchbreak.com</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;