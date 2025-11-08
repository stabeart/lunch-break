import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

const styles = {
  georgia: {
    fontFamily: 'Perpetua',
    fontWeight: 400
  },
  sectionTitle: {
    fontFamily: 'Perpetua',
    fontWeight: 400,
    fontSize: '2.25rem',
    fontStyle: 'italic'
  }
};

const MenuLink = ({ href, children, className, useGeorgia, isSpecial }) => (
  <Link 
    to={href} 
    style={{
      transition: 'opacity 0.3s ease-in-out',
      ...(isSpecial ? styles.sectionTitle : useGeorgia ? styles.georgia : {})
    }}
    className={`hover:text-amber-800 transition-colors ${className}`}
  >
    {children}
  </Link>
);

const LiteraryMenu = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <PageLayout title="Menu" showMenuLink={false}>
      <div className="text-center">
        <div className="space-y-12 text-center">
          <div>
            <h2 className="text-2xl mb-4" style={styles.sectionTitle}>
              Specials
            </h2>
            <p className="text-xl mb-2" style={styles.georgia}>
              <MenuLink href="/weekly">Current Feature</MenuLink>
            </p>
            <p className="text-xl mb-2" style={styles.georgia}>
              <MenuLink href="/archive">Archive</MenuLink>
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4" style={styles.georgia}>Main Courses</h2>
            <p className="text-xl mb-2" style={styles.georgia}>
              <MenuLink href="/current">Current Issue</MenuLink>
            </p>
            <p className="text-xl mb-2" style={styles.georgia}>
              <MenuLink href="/past">Past Issues</MenuLink>
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4" style={styles.georgia}>Desserts</h2>
            <p className="text-xl mb-2" style={styles.georgia}>
              <MenuLink href="/submissions">Submissions</MenuLink>
            </p>
          </div>

          <div className="text-base mt-8">
            <p className="mb-2" style={styles.georgia}>
              <MenuLink href="/about">About us</MenuLink>
            </p>
            {isMobile && (
              <p className="mt-2">
                <MenuLink href="/donate">donate</MenuLink>
              </p>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LiteraryMenu;