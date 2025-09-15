import React from 'react';
import PageLayout from './PageLayout';

const About = () => {
  return (
    <PageLayout title="About Us">
      <div className="text-center">
        <div className="space-y-12 text-center">
          <div>
            <p className="mb-6">
            Lunchbreak seeks to promote the valuable connections that are formed in the most likely of places - which are often the most overlooked. You meet a man, the cashier at your Ohio grocery store, who tells you his story of falling off a mountain in Colorado. You meet a woman while shopping for coffee mugs in a Texas antique store whose sons attended your college in Vermont. You are named for a hiker your parents met while backpacking the Appalachian Trail. We look for writing and artwork with a vision of intimacy, promoting the ordinary in order to highlight the remarkable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">editorial team</h2>
            <p className="mb-2">Ingrid Alva</p>
            <p className="mb-2">Rayna Moxley</p>
            <p className="mb-2">Sam Tabeart</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">layout and design</h2>
            <p clasName="mb-2">Eleanor Ford</p>
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